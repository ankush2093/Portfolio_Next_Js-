
"use client"
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      // Simulate data fetch
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    }
    fetchData();
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <div className="flex items-center justify-center h-32 w-32 border-4 border-primary border-t-transparent rounded-full animate-spin">
        <p> Loading...</p>
        <Loader2 className="h-8 w-8 text-primary" />

      </div>
      <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-extrabold leading-tight tracking-wide">
      ..... Welcome 
      </h1>
    </div>
  );
}
