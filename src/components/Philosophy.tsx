export default function Philosophy() {
  return (
    <section
      className="py-20 md:py-28 px-4 md:px-8 relative"
      id="philosophy"
      style={{ background: "#0f172a" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="section-label" style={{ color: "#c89b4e" }}>Our Core Values</span>
          <h2
            className="font-bold mt-4"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#ffffff",
            }}
          >
            Our <span style={{ color: "#c89b4e" }}>Philosophy</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 leading-relaxed" style={{ color: "#94a3b8", fontSize: "16px" }}>
            At SAB Group, our approach is built on a foundation of trust, excellence, and a relentless commitment to maximizing value for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Client-Centricity",
              desc: "We put our clients' interests first, tailoring bespoke solutions to meet their unique real estate goals.",
              icon: "🤝",
            },
            {
              title: "Integrity",
              desc: "Transparency and ethical practices form the cornerstone of every transaction we facilitate.",
              icon: "⚖️",
            },
            {
              title: "Excellence",
              desc: "We strive for perfection, leveraging deep market intelligence to deliver superior outcomes.",
              icon: "⭐",
            },
            {
              title: "Innovation",
              desc: "Embracing new technologies and strategies to stay ahead in a dynamic real estate landscape.",
              icon: "💡",
            }
          ].map((val, i) => (
            <div 
              key={i} 
              className="p-8 rounded-lg border transition-all duration-300 hover:-translate-y-2 group"
              style={{ 
                background: "rgba(30, 41, 59, 0.5)", 
                borderColor: "rgba(200, 155, 78, 0.2)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: "rgba(200, 155, 78, 0.1)", border: "1px solid rgba(200, 155, 78, 0.3)" }}
              >
                {val.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>{val.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
