export default function Games() {
  return (
    <section id="games" className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">GAMES</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">CHECK OUT OUR WORK</p>
          <a
            href="#games"
            className="inline-block px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm"
          >
            More
          </a>
        </div>
      </div>
    </section>
  )
}

