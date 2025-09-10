export function ArtisanStory() {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-balance text-foreground">
              Historia każdej branzoletki
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Każda branzoletka z mojej kolekcji jest stworzona z pasją i sercem przy wykorzystaniu własnej techniki. Używane są jedynie najlepsze kamienie naturalne, każdy produkt jest unikatowy oraz nosi pasję i doświadczenie twórcy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Od pomysłu do wykończenia, przykładam swoje serce do tworzenia tych akcesorii, które nie są tylko piękne ale i znaczące. Kiedy chcesz założyć jedną z moich branzoletek, nie nosisz tylko branzoletki ale nosisz również kawałek mnie.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-medium">✨</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Własnoręcznie zrobione z pasją</p>
                <p className="text-sm text-muted-foreground">Każdy detal ma znaczenie</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-card shadow-2xl">
              <img
                src="/artisan-crafting-handmade-jewelry-bracelet-worksho.png"
                alt="Artisan crafting handmade bracelets"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-accent/20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
