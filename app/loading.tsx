// import { Loader2 } from "lucide-react";

// export default function Loading() {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
//       <Loader2 className="h-8 w-8 animate-spin text-primary" />
//     </div>
//   );
// }

"use client"
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <div className="flex items-center justify-center h-16 w-16 border-4 border-primary border-t-transparent rounded-full animate-spin">
        <Loader2 className="h-8 w-8 text-primary" />
      </div>
    </div>
  );
}
