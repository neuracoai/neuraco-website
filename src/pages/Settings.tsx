import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Building2, CreditCard, LogOut, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { fetchSupabaseUser, getStoredSupabaseSession, isSupabaseAuthenticated, logoutSupabase } from "@/lib/integrations";
import { toast } from "@/hooks/use-toast";

const orgMembers = [
  { name: "Yet to be added", email: "Yet to be added", role: "Yet to be added", status: "Yet to be added" },
  { name: "Yet to be added", email: "Yet to be added", role: "Yet to be added", status: "Yet to be added" },
  { name: "Yet to be added", email: "Yet to be added", role: "Yet to be added", status: "Yet to be added" },
];

const Settings = () => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (!isSupabaseAuthenticated()) {
      window.location.assign("/login");
      return;
    }

    const session = getStoredSupabaseSession();
    setUserEmail(session?.userEmail ?? "");

    fetchSupabaseUser()
      .then((user) => {
        if (user?.email) {
          setUserEmail(user.email);
        }
      })
      .finally(() => {
        setIsCheckingAuth(false);
      });
  }, []);

  const usageStats = useMemo(
    () => [
      { label: "Seats", value: 7, total: 10 },
      { label: "Agent Runs", value: 8420, total: 10000 },
      { label: "Storage", value: 186, total: 250, unit: "GB" },
    ],
    [],
  );

  const handleLogout = async () => {
    setIsLoggingOut(true);
    const result = await logoutSupabase();
    setIsLoggingOut(false);

    if (!result.ok) {
      toast({
        title: "Logged out locally",
        description: result.error,
      });
    } else {
      toast({
        title: "Logged out",
        description: "Your session has ended.",
      });
    }

    window.location.assign("/login");
  };

  if (isCheckingAuth) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
        <p className="text-muted-foreground text-sm uppercase tracking-widest">Loading settings...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-2 border-border p-6 bg-card">
            <div>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-3"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </a>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground mt-1">
                Manage your workspace, billing, and security.
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                Signed in as <span className="text-foreground">{userEmail || "your account"}</span>
              </p>
            </div>
            <Button variant="heroOutline" size="lg" onClick={handleLogout} disabled={isLoggingOut}>
              <LogOut className="w-4 h-4" />
              {isLoggingOut ? "Logging out..." : "Log Out"}
            </Button>
          </div>

          <section className="grid lg:grid-cols-3 gap-6">
            <article className="border-2 border-border bg-card p-6 lg:col-span-2">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-muted-foreground" />
                  <h2 className="text-lg font-semibold uppercase tracking-wider">Current Plan</h2>
                </div>
                <Badge variant="secondary">Pro</Badge>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                Yet to be added
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-border p-4">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Billing</p>
                  <p className="font-medium">Yet to be added</p>
                </div>
                <div className="border border-border p-4">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Next Invoice</p>
                  <p className="font-medium">Yet to be added</p>
                </div>
                <div className="border border-border p-4">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Payment Method</p>
                  <p className="font-medium">Yet to be added</p>
                </div>
              </div>
            </article>

            <article className="border-2 border-border bg-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-4 h-4 text-muted-foreground" />
                <h2 className="text-lg font-semibold uppercase tracking-wider">Organization</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Name</p>
              <p className="font-medium mb-4">Yet to be added</p>
              <p className="text-sm text-muted-foreground mb-2">Workspace URL</p>
              <p className="font-medium mb-4">Yet to be added</p>
              <p className="text-sm text-muted-foreground mb-2">Industry</p>
              <p className="font-medium">Yet to be added</p>
            </article>
          </section>

          <section className="grid lg:grid-cols-2 gap-6">
            <article className="border-2 border-border bg-card p-6">
              <h2 className="text-lg font-semibold uppercase tracking-wider mb-6">Usage</h2>
              <div className="space-y-6">
                {usageStats.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span>
                        {item.value}
                        {item.unit ? ` ${item.unit}` : ""} / {item.total}
                        {item.unit ? ` ${item.unit}` : ""}
                      </span>
                    </div>
                    <Progress value={(item.value / item.total) * 100} />
                  </div>
                ))}
              </div>
            </article>

            <article className="border-2 border-border bg-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-4 h-4 text-muted-foreground" />
                <h2 className="text-lg font-semibold uppercase tracking-wider">Security</h2>
              </div>
              <div className="space-y-4">
                <div className="border border-border p-4">
                  <p className="font-medium mb-1">Single Sign-On</p>
                  <p className="text-sm text-muted-foreground">Yet to be added</p>
                </div>
                <div className="border border-border p-4">
                  <p className="font-medium mb-1">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Yet to be added</p>
                </div>
                <div className="border border-border p-4">
                  <p className="font-medium mb-1">Session Timeout</p>
                  <p className="text-sm text-muted-foreground">Yet to be added</p>
                </div>
              </div>
            </article>
          </section>

          <section className="border-2 border-border bg-card p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <h2 className="text-lg font-semibold uppercase tracking-wider">Organization Members</h2>
              </div>
              <Button variant="heroOutline" size="sm">Invite Member</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border text-muted-foreground">
                    <th className="text-left py-3 font-medium">Name</th>
                    <th className="text-left py-3 font-medium">Email</th>
                    <th className="text-left py-3 font-medium">Role</th>
                    <th className="text-left py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orgMembers.map((member) => (
                    <tr key={member.email} className="border-b border-border/80">
                      <td className="py-3">{member.name}</td>
                      <td className="py-3 text-muted-foreground">{member.email}</td>
                      <td className="py-3">{member.role}</td>
                      <td className="py-3">
                        <Badge variant={member.status === "Active" ? "secondary" : "outline"}>
                          {member.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default Settings;
