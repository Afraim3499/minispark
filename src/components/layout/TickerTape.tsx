"use client";

export function TickerTape() {
    const items = [
        "REVENUE GROWTH: +140%",
        "LEAD ACQUISITION: +275%",
        "MANAGED AD SPEND: $1M+",
        "AVERAGE RESPONSE TIME: <1 HOUR",
        "PLATFORM UPTIME: 99.9%",
        "CONVERSION LIFT: +42%",
    ];

    return (
        <div className="w-full bg-primary/5 border-y border-primary/20 overflow-hidden py-3 relative backdrop-blur-sm mt-10">
            <div className="flex whitespace-nowrap animate-ticker w-max">
                {[...items, ...items].map((item, i) => (
                    <span key={i} className="inline-block px-12 text-xs font-mono text-muted-foreground font-bold tracking-widest">
            /// <span className="text-primary">{item.split(":")[0]}</span>:
                        <span className="text-foreground ml-1">{item.split(":")[1]}</span>
                    </span>
                ))}
            </div>

            {/* Gradient masks for fade effect */}
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

            <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>
        </div>
    );
}
