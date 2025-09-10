"use client"

export function Hero() {
  return (
    <section
      className="relative overflow-x-hidden overflow-y-visible bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/herobg.jpg-vMRvvnNVunN5HQskjYX56UIIavpafG.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 opacity-100"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-balance mb-8 text-white leading-tight font-medium">
            Leśna pracownia
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 text-pretty mb-12 max-w-3xl mx-auto leading-relaxed">
            Biżuteria robiona z pasją
          </p>

          <div className="mb-12">
            <button
              onClick={() => {
                const collectionSection = document.getElementById("collection")
                collectionSection?.scrollIntoView({ behavior: "smooth" })
              }}
              className="hover:bg-foreground/90 text-background px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl bg-purple-500"
            >
              Odkryj moją kolekcję
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-4xl mx-auto opacity-100">
            <div className="flex items-center gap-3 text-sm sm:text-base text-white bg-black/40 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full whitespace-nowrap shadow-lg opacity-100">
              <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0"></div>
              <span className="drop-shadow-sm">Materiały z dobrego źródła</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base text-white bg-black/40 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full whitespace-nowrap shadow-lg">
              <div className="w-3 h-3 rounded-full bg-secondary flex-shrink-0"></div>
              <span className="drop-shadow-sm">Jedyne w swoim rodzaju</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base text-white bg-black/40 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full whitespace-nowrap shadow-lg">
              <div className="w-3 h-3 rounded-full flex-shrink-0 bg-teal-200"></div>
              <span className="drop-shadow-sm">Zrobione z pasją</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
