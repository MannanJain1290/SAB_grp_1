"use client";

import { Mail } from "lucide-react";

const LinkedinIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);

const team = [
  {
    name: "Sanjay Gupta",
    role: "FOUNDER & MANAGING DIRECTOR",
    bio: "With over four decades of extensive experience in the commercial real estate industry, Sanjay Gupta is the visionary behind SAB Properties. He brings a wealth of market knowledge, strategic foresight, and unparalleled expertise to the team. His leadership ensures exceptional service delivery, driving high-value transactions and securing optimal results for all premium clients.",
    initials: "SG",
    side: "right", // image on right, text on left
  },
  {
    name: "Kashish Gupta",
    role: "PARTNER & CHIEF OPERATIONS OFFICER",
    bio: "Kashish Gupta is focused on delivering outstanding end-to-end results while building long-lasting relationships with clients. With a strong commitment to transparency, reliability, and a client-first approach, she ensures that every portfolio is managed with precision and care. Her proactive leadership and strategic mindset play a key role in driving the growth of SAB Properties’ expanding commercial footprint.",
    initials: "KG",
    side: "left", // image on left, text on right
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-20 md:py-28 px-4 md:px-8"
      style={{ background: "#f0f2f5", borderTop: "1px solid #e2e8f0" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">The Team</span>
          <h2
            className="font-bold"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", color: "#0f172a" }}
          >
            Our <span style={{ color: "#c89b4e" }}>Leadership</span> Team
          </h2>
        </div>

        {/* Team Members */}
        <div className="space-y-8">
          {team.map((member, idx) => (
            <div
              key={member.name}
              className={`flex flex-col ${member.side === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} rounded-sm overflow-hidden`}
              style={{ boxShadow: "0 6px 32px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0" }}
              id={`leader-${idx}`}
            >
              {/* Image Side */}
              <div
                className="relative overflow-hidden flex-shrink-0"
                style={{ width: "100%", height: "280px", maxWidth: "400px" }}
              >
                {/* Placeholder portrait with gradient background */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background:
                      idx === 0
                        ? "linear-gradient(135deg, #1e293b 0%, #263447 100%)"
                        : "linear-gradient(135deg, #1a2435 0%, #2d3f55 100%)",
                  }}
                >
                  {/* Portrait silhouette */}
                  <div className="relative">
                    <div
                      className="w-32 h-32 rounded-full flex items-center justify-center border-4"
                      style={{ background: "rgba(200,155,78,0.1)", borderColor: "rgba(200,155,78,0.4)" }}
                    >
                      <span
                        className="font-bold"
                        style={{ fontFamily: "'Outfit', sans-serif", fontSize: "42px", color: "#c89b4e" }}
                      >
                        {member.initials}
                      </span>
                    </div>
                    {/* Decorative rings */}
                    <div
                      className="absolute -inset-4 rounded-full border opacity-20 pointer-events-none"
                      style={{ borderColor: "#c89b4e" }}
                    />
                    <div
                      className="absolute -inset-8 rounded-full border opacity-10 pointer-events-none"
                      style={{ borderColor: "#c89b4e" }}
                    />
                  </div>
                </div>

                {/* Gold bar at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 py-3 px-5 text-center"
                  style={{ background: "#c89b4e" }}
                >
                  <span
                    className="font-bold text-white tracking-widest uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.2em" }}
                  >
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Text Side */}
              <div
                className="flex-1 p-8 md:p-10 flex flex-col justify-center"
                style={{ background: "#1e293b" }}
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <h3
                    className="font-bold text-white leading-tight"
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
                  >
                    {member.name}
                  </h3>
                  {/* Removed social icons as per request */}
                </div>

                {/* Role */}
                <div
                  className="inline-flex items-center gap-2 mb-5"
                >
                  <div className="w-6 h-0.5" style={{ background: "#c89b4e" }} />
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#c89b4e",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    Partner
                  </span>
                </div>

                {/* Bio in italic */}
                <p
                  className="leading-relaxed italic"
                  style={{ color: "#94a3b8", fontSize: "14px", fontFamily: "'Inter', sans-serif" }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
