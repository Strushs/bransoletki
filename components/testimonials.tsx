"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Chen",
    text: "The quality is absolutely stunning. I get compliments every time I wear my bracelet!",
    image: "/happy-woman-wearing-handmade-bracelet-portrait.png",
  },
  {
    name: "Maria Rodriguez",
    text: "Each piece feels so special and unique. You can really feel the love that went into making it.",
    image: "/smiling-woman-with-handmade-jewelry-portrait.png",
  },
  {
    name: "Emma Thompson",
    text: "I've never owned anything so beautifully crafted. It's become my favorite accessory.",
    image: "/elegant-woman-wearing-artisan-bracelet-portrait.png",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-balance mb-16">
            What Our Customers Say
          </h2>

          <div className="relative h-48 flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-6 border-2 border-primary-foreground/20"
                />
                <blockquote className="text-xl md:text-2xl text-center mb-4 max-w-2xl leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <cite className="text-lg font-medium">— {testimonial.name}</cite>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary-foreground" : "bg-primary-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
