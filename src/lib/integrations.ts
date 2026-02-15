export type PricingPlan = "free" | "pro" | "enterprise";

const getSupabaseUrl = () => import.meta.env.VITE_SUPABASE_URL?.trim() ?? "";
const getSupabaseAnonKey = () => import.meta.env.VITE_SUPABASE_ANON_KEY?.trim() ?? "";

export const sendSupabaseMagicLink = async (email: string) => {
  const supabaseUrl = getSupabaseUrl();
  const supabaseAnonKey = getSupabaseAnonKey();

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      ok: false,
      error: "Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable login.",
    };
  }

  const response = await fetch(`${supabaseUrl}/auth/v1/otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
    },
    body: JSON.stringify({
      email,
      create_user: true,
      email_redirect_to: window.location.origin,
    }),
  });

  if (!response.ok) {
    return {
      ok: false,
      error: "Unable to send sign-in link. Check Supabase Auth settings and try again.",
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
