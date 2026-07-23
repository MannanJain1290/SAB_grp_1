import TiltedCard from "./TiltedCard";

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
              image: "/images/lobby.png"
            },
            {
              title: "Integrity",
              desc: "Transparency and ethical practices form the cornerstone of every transaction we facilitate.",
              icon: "⚖️",
              image: "/images/hero_building.png"
            },
            {
              title: "Excellence",
              desc: "We strive for perfection, leveraging deep market intelligence to deliver superior outcomes.",
              icon: "⭐",
              image: "/images/villa.png"
            },
            {
              title: "Innovation",
              desc: "Embracing new technologies and strategies to stay ahead in a dynamic real estate landscape.",
              icon: "💡",
              image: "/images/hero_cityscape.png"
            }
          ].map((val, i) => (
            <div key={i} className="flex justify-center h-full">
              <TiltedCard
                imageSrc={val.image}
                altText={val.title}
                captionText={val.title}
                containerHeight="380px"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div 
                    className="absolute inset-0 flex flex-col justify-end p-8 border rounded-[15px]"
                    style={{ 
                      background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.1) 100%)",
                      borderColor: "rgba(200, 155, 78, 0.2)",
                    }}
                  >
                    <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>{val.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
                      {val.desc}
                    </p>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
