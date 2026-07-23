export default function BlogPage() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center" style={{ background: "#f0f2f5" }}>
      {/* Blog Hero Banner */}
      <div className="relative w-full h-[35vh] min-h-[300px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero_cityscape.png" alt="Blog Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(15, 23, 42, 0.7)" }}></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>SAB Group <span style={{ color: "#c89b4e" }}>Blog</span></h1>
          <p className="text-white/90 text-lg md:text-xl">Insights, market trends, and real estate news from our experts.</p>
        </div>
      </div>
      
      <div className="py-20 px-4 md:px-8 max-w-4xl w-full text-center">
        <p className="text-slate-600 text-lg">
          Coming soon!
        </p>
      </div>
    </main>
  );
}
