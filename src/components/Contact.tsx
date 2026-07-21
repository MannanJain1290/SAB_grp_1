"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import PremiumGlowButton from "@/components/PremiumGlowButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "Commercial",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", propertyType: "Commercial", message: "" });
      }, 5000);
    }, 1200);
  };

  return (
    <>
      <section
        id="contact"
        className="py-20 md:py-28 px-4 md:px-8 relative overflow-hidden"
        style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}
      >
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-orange-50 blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="section-label mb-4 block inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase" style={{ background: "rgba(200,155,78,0.1)", color: "#c89b4e" }}>
              Get In Touch
            </span>
            <h2
              className="font-bold mb-4"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0f172a" }}
            >
              Let&apos;s Find Your <span style={{ color: "#c89b4e" }}>Perfect Property</span>
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6 }}>
              Fill the form below or reach out directly. Our premium advisors will contact you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Info Cards */}
              {[
                {
                  icon: MapPin,
                  title: "Head Office",
                  lines: ["1/22, Asaf Ali Road", "Delhi - 110002"],
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  lines: ["+91 87005 13200"],
                  href: "tel:+918700513200",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: ["info@sabproperties.in"],
                  href: "mailto:info@sabproperties.in",
                },
              ].map((info) => (
                <div
                  key={info.title}
                  className="flex gap-5 p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(226, 232, 240, 0.8)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, rgba(200,155,78,0.15) 0%, rgba(200,155,78,0.05) 100%)" }}
                  >
                    <info.icon className="w-5 h-5" style={{ color: "#c89b4e" }} />
                  </div>
                  <div>
                    <h4
                      className="font-bold mb-1.5"
                      style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "#0f172a" }}
                    >
                      {info.title}
                    </h4>
                    {info.lines.map((line) =>
                      info.href ? (
                        <a
                          key={line}
                          href={info.href}
                          className="block transition-colors"
                          style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.5 }}
                          onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#c89b4e"; }}
                          onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#64748b"; }}
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.5 }}>{line}</p>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* Office hours */}
              <div
                className="p-6 rounded-2xl mt-2 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.15)" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                <h4
                  className="font-bold text-white mb-4 flex items-center gap-2"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px" }}
                >
                  Office Hours
                </h4>
                <div className="space-y-3 relative z-10">
                  {[
                    { day: "Monday – Saturday", time: "9:30 AM – 7:00 PM" },
                    { day: "Sunday", time: "By Appointment Only" },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between items-center pb-3 border-b border-white/10 last:border-0 last:pb-0">
                      <span style={{ fontSize: "14px", color: "#cbd5e1" }}>{row.day}</span>
                      <span style={{ fontSize: "13px", color: "#c89b4e", fontWeight: 600, letterSpacing: "0.5px" }}>{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div
              className="lg:col-span-7 rounded-3xl p-8 md:p-10 lg:p-12 relative overflow-hidden"
              style={{ background: "#ffffff", boxShadow: "0 20px 40px rgba(0,0,0,0.04)", border: "1px solid rgba(226, 232, 240, 0.8)" }}
            >
              {submitted ? (
                <div className="h-full min-h-[450px] flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" style={{ color: "#16a34a" }} />
                  </div>
                  <h3
                    className="font-bold mb-4"
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", color: "#0f172a" }}
                  >
                    Thank You!
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "340px", lineHeight: 1.6 }}>
                    Your enquiry has been received securely. One of our premium advisors will reach out to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8 border-b border-slate-100 pb-6">
                    <h3
                      className="font-bold"
                      style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.75rem", color: "#0f172a" }}
                    >
                      Send Us an Enquiry
                    </h3>
                    <p style={{ color: "#64748b", fontSize: "14px", marginTop: "8px" }}>
                      We respect your privacy. Your information is secure.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold tracking-widest uppercase" style={{ color: "#475569" }}>
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-5 py-3.5 text-sm rounded-xl transition-all outline-none"
                          style={{
                            border: "1px solid #e2e8f0",
                            background: "#f8fafc",
                            color: "#0f172a",
                            fontSize: "15px",
                          }}
                          onFocus={(e) => { 
                            (e.target as HTMLElement).style.borderColor = "#c89b4e";
                            (e.target as HTMLElement).style.background = "#ffffff";
                            (e.target as HTMLElement).style.boxShadow = "0 0 0 4px rgba(200,155,78,0.1)";
                          }}
                          onBlur={(e) => { 
                            (e.target as HTMLElement).style.borderColor = "#e2e8f0";
                            (e.target as HTMLElement).style.background = "#f8fafc";
                            (e.target as HTMLElement).style.boxShadow = "none";
                          }}
                          id="contact-name"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold tracking-widest uppercase" style={{ color: "#475569" }}>
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-5 py-3.5 text-sm rounded-xl transition-all outline-none"
                          style={{ border: "1px solid #e2e8f0", background: "#f8fafc", color: "#0f172a", fontSize: "15px" }}
                          onFocus={(e) => { 
                            (e.target as HTMLElement).style.borderColor = "#c89b4e";
                            (e.target as HTMLElement).style.background = "#ffffff";
                            (e.target as HTMLElement).style.boxShadow = "0 0 0 4px rgba(200,155,78,0.1)";
                          }}
                          onBlur={(e) => { 
                            (e.target as HTMLElement).style.borderColor = "#e2e8f0";
                            (e.target as HTMLElement).style.background = "#f8fafc";
                            (e.target as HTMLElement).style.boxShadow = "none";
                          }}
                          id="contact-email"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold tracking-widest uppercase" style={{ color: "#475569" }}>
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full px-5 py-3.5 text-sm rounded-xl transition-all outline-none"
                        style={{ border: "1px solid #e2e8f0", background: "#f8fafc", color: "#0f172a", fontSize: "15px" }}
                        onFocus={(e) => { 
                          (e.target as HTMLElement).style.borderColor = "#c89b4e";
                          (e.target as HTMLElement).style.background = "#ffffff";
                          (e.target as HTMLElement).style.boxShadow = "0 0 0 4px rgba(200,155,78,0.1)";
                        }}
                        onBlur={(e) => { 
                          (e.target as HTMLElement).style.borderColor = "#e2e8f0";
                          (e.target as HTMLElement).style.background = "#f8fafc";
                          (e.target as HTMLElement).style.boxShadow = "none";
                        }}
                        id="contact-phone"
                      />
                    </div>

                    {/* Property Type */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold tracking-widest uppercase" style={{ color: "#475569" }}>
                        Interested In
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-5 py-3.5 text-sm rounded-xl transition-all outline-none appearance-none bg-no-repeat bg-right"
                        style={{ 
                          border: "1px solid #e2e8f0", 
                          background: "#f8fafc url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%2364748b\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>') no-repeat right 1rem center", 
                          color: "#0f172a", 
                          fontSize: "15px",
                          paddingRight: "2.5rem"
                        }}
                        onFocus={(e) => { 
                          (e.target as HTMLElement).style.borderColor = "#c89b4e";
                          (e.target as HTMLElement).style.backgroundColor = "#ffffff";
                          (e.target as HTMLElement).style.boxShadow = "0 0 0 4px rgba(200,155,78,0.1)";
                        }}
                        onBlur={(e) => { 
                          (e.target as HTMLElement).style.borderColor = "#e2e8f0";
                          (e.target as HTMLElement).style.backgroundColor = "#f8fafc";
                          (e.target as HTMLElement).style.boxShadow = "none";
                        }}
                        id="contact-property-type"
                      >
                        <option>Commercial Properties</option>
                        <option>Residential Properties</option>
                        <option>Industrial / Warehouse</option>
                        <option>Turnkey Projects</option>
                        <option>Property Valuation</option>
                        <option>Other Services</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold tracking-widest uppercase" style={{ color: "#475569" }}>
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-5 py-4 text-sm rounded-xl transition-all outline-none resize-none"
                        style={{ border: "1px solid #e2e8f0", background: "#f8fafc", color: "#0f172a", fontSize: "15px" }}
                        onFocus={(e) => { 
                          (e.target as HTMLElement).style.borderColor = "#c89b4e";
                          (e.target as HTMLElement).style.background = "#ffffff";
                          (e.target as HTMLElement).style.boxShadow = "0 0 0 4px rgba(200,155,78,0.1)";
                        }}
                        onBlur={(e) => { 
                          (e.target as HTMLElement).style.borderColor = "#e2e8f0";
                          (e.target as HTMLElement).style.background = "#f8fafc";
                          (e.target as HTMLElement).style.boxShadow = "none";
                        }}
                        id="contact-message"
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <PremiumGlowButton
                        type="submit"
                        disabled={loading}
                        className="w-full"
                        id="contact-submit-btn"
                        style={{ padding: "16px", borderRadius: "12px", fontSize: "15px" }}
                      >
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Submit Enquiry
                          </>
                        )}
                      </PremiumGlowButton>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918700513200"
        className="whatsapp-float hover:scale-110 transition-transform duration-300 shadow-xl"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        id="whatsapp-float-btn"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
