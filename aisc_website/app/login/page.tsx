"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const errorParam = searchParams?.get("error");
    if (errorParam === "pending_approval") {
      setError("Your account is pending admin approval.");
    }
  }, [searchParams]);

  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Since they logged in, verify if their profile status is 'accepted'
    const { data: profile, error: profileError } = await supabase
      .from("Profiles")
      .select("status")
      .eq("email", email)
      .single();

    if (profileError || !profile || !profile.status) {
      // If not accepted, immediately log them back out
      await supabase.auth.signOut();
      setError("Your account is pending admin approval.");
    } else {
      router.push("/");
      router.refresh(); // Refresh to update navbar state
    }
    setLoading(false);
  };

  const handleSignUp = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
    } else {
      // Since email confirmation is turned off, Supabase logs them in automatically on signup.
      // We sign them out immediately so they don't get access without being accepted.
      if (data?.session) {
        await supabase.auth.signOut();
      }
      setMessage("Account created! Please wait for an admin to accept your request.");
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-100px)] flex items-center justify-center px-4 animate-fade-in-hard font-[var(--font-bai-jamjuree)]">
        <div className="w-full max-w-md bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="text-center mb-8 relative z-10">
            <div className="flex justify-center mb-4">
              <Image
                src="/colored_logo.png"
                alt="AISC Logo"
                width={60}
                height={60}
                className="animate-[float_3s_ease-in-out_infinite]"
              />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-wider font-[var(--font-archivo)]">
              WELCOME BACK
            </h1>
            <p className="text-gray-400 mt-2">Log in to your AISC account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5 relative z-10">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 p-3 rounded-lg text-center">
                {error}
              </div>
            )}
            {message && (
              <div className="text-green-400 text-sm bg-green-400/10 border border-green-400/20 p-3 rounded-lg text-center">
                {message}
              </div>
            )}

            <div className="flex flex-col gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg transform transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "PROCESSING..." : "LOG IN"}
              </button>
              
              <button
                type="button"
                onClick={handleSignUp}
                disabled={loading}
                className="w-full py-3 px-4 bg-transparent border border-gray-600 hover:border-gray-400 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
