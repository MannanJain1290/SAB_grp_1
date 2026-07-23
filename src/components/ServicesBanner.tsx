import { Building, TrendingUp, ClipboardCheck, Globe } from "lucide-react";

export default function ServicesBanner() {
  return (
    <div className="py-16 px-4 md:px-8 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Building, title: "Turnkey Projects", desc: "End-to-end project management" },
            { icon: TrendingUp, title: "Valuation & Advisory", desc: "Expert property valuation services" },
            { icon: ClipboardCheck, title: "Lease Administration", desc: "Complete lease management solutions" },
            { icon: Globe, title: "Brokerage Services", desc: "Trusted brokerage across India" },
          ].map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 cursor-default"
                style={{ 
                  backgroundColor: "#0f2a4a",
                  border: "1px solid rgba(200,155,78,0.2)",
                  boxShadow: "0 8px 20px -4px rgba(15, 42, 74, 0.2)"
                }}
                id={`service-card-${idx}`}
              >
                <div 
                  className="p-3 rounded-lg shrink-0 transition-colors duration-300 group-hover:bg-[#c89b4e]/20"
                  style={{ backgroundColor: "rgba(200,155,78,0.1)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#c89b4e" }} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
