import { BraceletCard } from "./bracelet-card"
import type { Bracelet } from "@/lib/types"

interface BraceletGridProps {
  bracelets: Bracelet[]
}

export function BraceletGrid({ bracelets }: BraceletGridProps) {
  if (!bracelets.length) {
    return (
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-serif text-muted-foreground mb-4">Brak dostępnych produktów</h2>
          <p className="text-muted-foreground">Wróć ponownie za jakiś czas.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-balance mb-4 text-foreground">
            Moja kolekcja
          </h2>
          <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
            Każda bransoletka jest tworzona własnoręcznie z pasją, wszystkie są unikatowe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {bracelets.map((bracelet) => (
            <BraceletCard key={bracelet.id} bracelet={bracelet} />
          ))}
        </div>
      </div>
    </section>
  )
}
