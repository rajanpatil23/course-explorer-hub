import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, CheckCircle2, Shield, Award, BookOpen } from "lucide-react";
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

  const benefits = [
    { icon: BookOpen, title: "100+ Certification Courses", desc: "Industry-recognized programs across IT, cloud, and project management." },
    { icon: Award, title: "Expert Industry Trainers", desc: "Certified professionals with real-world experience in every session." },
    { icon: Shield, title: "First-Attempt Pass Guarantee", desc: "Structured curriculum and exam prep to pass on your first try." },
    { icon: CheckCircle2, title: "Flexible Learning Options", desc: "Live online, weekend batches, or self-paced — your schedule, your way." },
  ];

  return (
    <div className="bg-muted/30 min-h-[calc(100vh-160px)]">
      <div className="container py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 max-w-[1100px] mx-auto rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
          
          {/* Left — Branding panel */}
          <div className="hidden lg:flex lg:col-span-2 bg-gradient-to-br from-primary via-primary to-teal-dark relative flex-col justify-between p-10 text-primary-foreground">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="font-heading font-bold text-lg">EduEdge</span>
              </div>
              
              <h2 className="font-heading text-2xl font-bold leading-tight mb-3">
                {isLogin ? "Welcome Back!" : "Start Your Journey"}
              </h2>
              <p className="text-sm text-primary-foreground/75 leading-relaxed">
                {isLogin
                  ? "Sign in to access your courses, track your progress, and continue learning."
                  : "Join thousands of professionals advancing their careers with industry-recognized certifications."}
              </p>
            </div>

            <div className="relative z-10 space-y-4 mt-8">
              {benefits.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-primary-foreground/60 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-primary flex items-center justify-center text-[10px] font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold">2,640+ Professionals</p>
                  <p className="text-[11px] text-primary-foreground/60">already learning with us</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3 p-8 md:p-10 lg:p-12">
            <div className="max-w-md mx-auto">
              {/* Mobile branding */}
              <div className="lg:hidden flex items-center gap-2 mb-6">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <span className="font-heading font-bold text-foreground">EduEdge</span>
              </div>

              <h1 className="font-heading text-2xl font-bold text-foreground mb-1">
                {isLogin ? "Sign In" : "Create Account"}
              </h1>
              <p className="text-sm text-muted-foreground mb-8">
                {isLogin ? "Enter your credentials to access your account." : "Fill in your details to get started with EduEdge."}
              </p>

              {/* Google button first for social proof */}
              <Button
                variant="outline"
                size="lg"
                className="w-full h-12 font-medium text-foreground border-border hover:bg-muted/50 mb-6"
                onClick={() =>
                  toast({ title: "Coming Soon", description: "Google sign-in will be available soon." })
                }
              >
                <svg className="w-5 h-5 mr-2.5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Continue with Google
              </Button>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-card px-4 text-muted-foreground uppercase tracking-widest font-medium">or continue with email</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {!isLogin && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                        maxLength={100}
                        className="h-12 pl-11 bg-muted/30 border-border focus:bg-background transition-colors"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      maxLength={255}
                      className="h-12 pl-11 bg-muted/30 border-border focus:bg-background transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">Password</label>
                    {isLogin && (
                      <button type="button" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={form.password}
                      onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                      maxLength={128}
                      className="h-12 pl-11 pr-11 bg-muted/30 border-border focus:bg-background transition-colors"
                    />
                    <button
                      type="button"
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
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
                  className="w-full h-12 font-semibold text-[15px] mt-2"
                >
                  {submitting ? "Please wait…" : isLogin ? "Sign In" : "Create Account"}
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-8">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  type="button"
                  className="font-semibold text-primary hover:text-primary/80 transition-colors"
                  onClick={() => { setIsLogin(!isLogin); setForm({ name: "", email: "", password: "" }); }}
                >
                  {isLogin ? "Create one" : "Sign in instead"}
                </button>
              </p>

              {!isLogin && (
                <p className="text-center text-xs text-muted-foreground mt-4 leading-relaxed">
                  By creating an account, you agree to our{" "}
                  <Link to="/terms" className="text-primary hover:underline">Terms</Link> and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
