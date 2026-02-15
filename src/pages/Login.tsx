import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  isSupabaseAuthenticated,
  signInWithSupabasePassword,
  signUpWithSupabasePassword,
} from "@/lib/integrations";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSupabaseAuthenticated()) {
      window.location.assign("/settings");
    }
  }, []);

  const validateCredentials = () => {
    const normalizedEmail = email.trim();
    if (!normalizedEmail) {
      toast({
        title: "Email required",
        description: "Enter your email address to continue.",
      });
      return null;
    }

    if (!password) {
      toast({
        title: "Password required",
        description: "Enter your password to continue.",
      });
      return null;
    }

    return { email: normalizedEmail, password };
  };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials = validateCredentials();
    if (!credentials) {
      return;
    }

    setIsSubmitting(true);
    const result = await signInWithSupabasePassword(credentials.email, credentials.password);
    setIsSubmitting(false);

    if (!result.ok) {
      toast({
        title: "Sign in failed",
        description: result.error,
      });
      return;
    }

    toast({
      title: "Signed in",
      description: "You are now logged in.",
    });
    window.location.assign("/settings");
  };

  const handleSignUp = async () => {
    const credentials = validateCredentials();
    if (!credentials) {
      return;
    }

    setIsSubmitting(true);
    const result = await signUpWithSupabasePassword(credentials.email, credentials.password);
    setIsSubmitting(false);

    if (!result.ok) {
      toast({
        title: "Sign up failed",
        description: result.error,
      });
      return;
    }

    toast({
      title: "Account created",
      description: "Sign in now with the same credentials.",
    });
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md border-2 border-border bg-card p-8 rounded-2xl"
      >
        <a
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </a>

        <h1 className="text-3xl font-bold tracking-tight mb-2">Log in</h1>
        <p className="text-muted-foreground mb-8">
          Use your email and password to sign in to Praxiym.
        </p>

        <form onSubmit={handleSignIn} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-xs uppercase tracking-widest text-muted-foreground">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div className="space-y-3 pt-2">
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
              <Lock className="w-4 h-4" />
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>

            <Button
              type="button"
              variant="heroOutline"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
              onClick={handleSignUp}
            >
              <UserPlus className="w-4 h-4" />
              {isSubmitting ? "Creating..." : "Create Account"}
            </Button>
          </div>
        </form>
      </motion.div>
    </main>
  );
};

export default Login;
