import { Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-t from-muted/30 to-background bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">Kontakt</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Masz pytania lub chcesz zamówić bransoletke?
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">Telefon</h3>
            <p className="text-muted-foreground">+48 792 130 675</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">E-mail</h3>
            <p className="text-muted-foreground">lesnapracownia@gmail.com</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">Godziny</h3>
            <p className="text-muted-foreground">
              Pon-Pt: 18:00 - 20:00
              <br />
              Sob-Nd: 10:00 - 22:00
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">Zaobserwuj nas na socialmediach</p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.595-.122-.807-.315-.21-.21-.315-.49-.315-.807s.105-.595.315-.807c.21-.21.49-.315.807-.315s.595.105.807.315c.21.21.315.49.315.807s-.105.595-.315.807c-.21.193-.49.315-.807.315z" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
