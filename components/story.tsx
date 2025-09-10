import { Sparkles } from "lucide-react"

export function Story() {
  return (
    <section className="py-16 md:py-24 opacity-100 bg-neutral-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-light text-card-foreground italic mb-6 text-balance">
              Każdy naszyjnik, bransoletka czy para kolczyków, które tu znajdziesz, powstaje z pasji do piękna i sztuki
              rękodzieła. Tworzę biżuterię z naturalnych i szlachetnych kamieni, a także ze starannie dobranych
              szklanych koralików, łącząc tradycję z nowoczesnym stylem.
            </blockquote>
            <div className="flex items-center justify-center gap-2 text-primary">
              <div className="w-8 h-px bg-primary/30"></div>
              <Sparkles className="w-4 h-4" />
              <div className="w-8 h-px bg-primary/30"></div>
            </div>
          </div>
        </div>
        <br />
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-light text-card-foreground italic mb-6 text-balance">
              Moje prace to nie tylko ozdoby - to małe dzieła sztuki, w których każdy detal ma znaczenie. Dzięki
              wyjątkowym materiałom i ręcznej pracy, każda biżuteria jest jedyna w swoim rodzaju i niepowtarzalna - tak
              jak osoba, która ją nosi.
            </blockquote>
            <div className="flex items-center justify-center gap-2 text-primary">
              <div className="w-8 h-px bg-primary/30"></div>
              <Sparkles className="w-4 h-4" />
              <div className="w-8 h-px bg-primary/30"></div>
            </div>
          </div>
        </div>
        <br />
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-light text-card-foreground italic mb-6 text-balance">
              Pozwól sobie na odrobinę luksusu w codzienności i odkryj biżuterię, która podkreśli Twój charakter i
              naturalne piękno
            </blockquote>
            <div className="flex items-center justify-center gap-2 text-primary">
              <div className="w-8 h-px bg-primary/30"></div>
              <Sparkles className="w-4 h-4" />
              <div className="w-8 h-px bg-primary/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
