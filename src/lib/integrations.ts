export type PricingPlan = "free" | "pro" | "enterprise";

type AuthResponse = {
  ok: boolean;
  error: string;
};

type SupabaseAuthPayload = {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  expires_at?: number;
  user?: {
    id: string;
    email?: string;
  };
};

export type SupabaseSession = {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresAt: number;
  userEmail: string;
  userId: string;
};

export type SupabaseUser = {
  id: string;
  email?: string;
};

const SUPABASE_SESSION_KEY = "praxiym.supabase.session";
const AUTH_CHANGE_EVENT = "praxiym-auth-changed";

const getSupabaseUrl = () => import.meta.env.VITE_SUPABASE_URL?.trim() ?? "";
const getSupabaseAnonKey = () => import.meta.env.VITE_SUPABASE_ANON_KEY?.trim() ?? "";

const emitAuthChanged = () => {
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
};

export const getAuthChangeEventName = () => AUTH_CHANGE_EVENT;

const getAuthHeaders = (supabaseAnonKey: string, accessToken?: string) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    apikey: supabaseAnonKey,
    Authorization: `Bearer ${accessToken || supabaseAnonKey}`,
  };

  return headers;
};

const parseAuthError = async (response: Response, fallback: string) => {
  try {
    const body = (await response.json()) as { msg?: string; error_description?: string; error?: string };
    return body.msg || body.error_description || body.error || fallback;
  } catch {
    return fallback;
  }
};

const validateSupabaseConfig = () => {
  const supabaseUrl = getSupabaseUrl();
  const supabaseAnonKey = getSupabaseAnonKey();

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      valid: false,
      supabaseUrl,
      supabaseAnonKey,
      error: "Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable login.",
    };
  }

  return {
    valid: true,
    supabaseUrl,
    supabaseAnonKey,
    error: "",
  };
};

const toSession = (payload: SupabaseAuthPayload): SupabaseSession => {
  const expiresAt = payload.expires_at ?? Math.floor(Date.now() / 1000) + payload.expires_in;

  return {
    accessToken: payload.access_token,
    refreshToken: payload.refresh_token,
    tokenType: payload.token_type,
    expiresAt,
    userEmail: payload.user?.email ?? "",
    userId: payload.user?.id ?? "",
  };
};

const storeSupabaseSession = (session: SupabaseSession) => {
  localStorage.setItem(SUPABASE_SESSION_KEY, JSON.stringify(session));
  emitAuthChanged();
};

export const clearSupabaseSession = () => {
  localStorage.removeItem(SUPABASE_SESSION_KEY);
  emitAuthChanged();
};

export const getStoredSupabaseSession = (): SupabaseSession | null => {
  const rawSession = localStorage.getItem(SUPABASE_SESSION_KEY);
  if (!rawSession) {
    return null;
  }

  try {
    return JSON.parse(rawSession) as SupabaseSession;
  } catch {
    return null;
  }
};

export const isSupabaseAuthenticated = () => {
  const session = getStoredSupabaseSession();
  if (!session?.accessToken) {
    return false;
  }

  return session.expiresAt > Math.floor(Date.now() / 1000);
};

export const signInWithSupabasePassword = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  const config = validateSupabaseConfig();
  if (!config.valid) {
    return { ok: false, error: config.error };
  }

  const response = await fetch(`${config.supabaseUrl}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: getAuthHeaders(config.supabaseAnonKey),
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    return {
      ok: false,
      error: await parseAuthError(response, "Unable to sign in. Check your credentials and try again."),
    };
  }

  const payload = (await response.json()) as SupabaseAuthPayload;
  storeSupabaseSession(toSession(payload));
  return { ok: true, error: "" };
};

export const signUpWithSupabasePassword = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  const config = validateSupabaseConfig();
  if (!config.valid) {
    return { ok: false, error: config.error };
  }

  const response = await fetch(`${config.supabaseUrl}/auth/v1/signup`, {
    method: "POST",
    headers: getAuthHeaders(config.supabaseAnonKey),
    body: JSON.stringify({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
      },
    }),
  });

  if (!response.ok) {
    return {
      ok: false,
      error: await parseAuthError(response, "Unable to create account. Please try again."),
    };
  }

  const payload = (await response.json()) as Partial<SupabaseAuthPayload>;
  if (payload.access_token && payload.refresh_token && payload.token_type && payload.expires_in) {
    storeSupabaseSession(toSession(payload as SupabaseAuthPayload));
  }

  return { ok: true, error: "" };
};

export const fetchSupabaseUser = async () => {
  const session = getStoredSupabaseSession();
  const config = validateSupabaseConfig();
  if (!config.valid || !session?.accessToken) {
    return null;
  }

  const response = await fetch(`${config.supabaseUrl}/auth/v1/user`, {
    method: "GET",
    headers: getAuthHeaders(config.supabaseAnonKey, session.accessToken),
  });

  if (!response.ok) {
    if (response.status === 401) {
      clearSupabaseSession();
    }
    return null;
  }

  const user = (await response.json()) as SupabaseUser;
  return user;
};

export const logoutSupabase = async (): Promise<AuthResponse> => {
  const session = getStoredSupabaseSession();
  const config = validateSupabaseConfig();
  if (!config.valid || !session?.accessToken) {
    clearSupabaseSession();
    return { ok: true, error: "" };
  }

  const response = await fetch(`${config.supabaseUrl}/auth/v1/logout`, {
    method: "POST",
    headers: getAuthHeaders(config.supabaseAnonKey, session.accessToken),
    body: JSON.stringify({ scope: "global" }),
  });

  clearSupabaseSession();

  if (!response.ok) {
    return {
      ok: false,
      error: await parseAuthError(response, "Session cleared locally, but remote logout failed."),
    };
  }

  return { ok: true, error: "" };
};

export const getStripePaymentLink = (plan: PricingPlan) => {
  if (plan === "pro") {
    return import.meta.env.VITE_STRIPE_PAYMENT_LINK_PRO?.trim() ?? "";
  }

  if (plan === "enterprise") {
    return import.meta.env.VITE_STRIPE_PAYMENT_LINK_ENTERPRISE?.trim() ?? "";
  }

  return "";
};
