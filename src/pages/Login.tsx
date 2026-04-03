import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    if (form.password.length < 6) {
      toast({ title: "Invalid password", description: "Password must be at least 6 characters.", variant: "destructive" });
      return;
    }
    if (!isLogin && !form.name.trim()) {
      toast({ title: "Name required", description: "Please enter your full name.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: isLogin ? "Login Successful" : "Account Created",
        description: isLogin
          ? "Welcome back! Redirecting…"
          : "Your account has been created. Please check your email to verify.",
      });
    }, 1200);
  };

  return (
    <div className="bg-background">

      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Form */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm max-w-lg mx-auto lg:mx-0 w-full">
            <h2 className="font-heading text-xl font-bold text-foreground mb-1">
              {isLogin ? "Sign In" : "Sign Up"}
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              {isLogin ? "Enter your credentials to continue." : "Fill in your details to get started."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <Input
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    maxLength={100}
                    className="h-11"
                  />
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    maxLength={255}
                    className="h-11 pl-10"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">Password</label>
                  {isLogin && (
                    <button type="button" className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                    maxLength={128}
                    className="h-11 pl-10 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                size="lg"
                className="w-full bg-primary hover:bg-teal-dark text-primary-foreground font-semibold h-11"
              >
                {submitting ? "Please wait…" : isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-card px-3 text-muted-foreground uppercase tracking-wider">or</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="w-full h-11 font-medium text-foreground border-border hover:bg-muted"
              onClick={() =>
                toast({ title: "Coming Soon", description: "Google sign-in will be available soon." })
              }
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                className="font-semibold text-primary hover:text-primary/80 transition-colors"
                onClick={() => { setIsLogin(!isLogin); setForm({ name: "", email: "", password: "" }); }}
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>

          {/* Why join panel */}
          <div className="hidden lg:block">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              Why Join EduEdge?
            </h3>
            <div className="space-y-5">
              {[
                { title: "100+ Certification Courses", desc: "Access a wide range of industry-recognized certification programs across IT, cloud, and project management." },
                { title: "Expert Industry Trainers", desc: "Learn from certified professionals with real-world experience who bring practical insights to every session." },
                { title: "First-Attempt Pass Guarantee", desc: "Our structured curriculum and exam prep ensure you're fully prepared to pass on your first try." },
                { title: "Flexible Learning Options", desc: "Choose from live online sessions, weekend batches, or self-paced learning to fit your schedule." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="mt-1 w-5 h-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
