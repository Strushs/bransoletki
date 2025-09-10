"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BraceletForm } from "./bracelet-form"
import { deleteBracelet } from "@/lib/actions"
import { Pencil, Trash2, Plus } from "lucide-react"
import Image from "next/image"
import type { Bracelet } from "@/lib/types"

interface AdminDashboardProps {
  bracelets: Bracelet[]
}

export function AdminDashboard({ bracelets: initialBracelets }: AdminDashboardProps) {
  const [bracelets, setBracelets] = useState(initialBracelets)
  const [editingBracelet, setEditingBracelet] = useState<Bracelet | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    if (!confirm("Napewno chcesz usunąć ten produkt?")) return

    setIsDeleting(id)
    try {
      await deleteBracelet(id)
      setBracelets(bracelets.filter((b) => b.id !== id))
    } catch (error) {
      console.error("Błąd przy usuwaniu produktu:", error)
      alert("Problem z usunięciem produktu")
    } finally {
      setIsDeleting(null)
    }
  }

  const handleFormSuccess = (bracelet: Bracelet) => {
    if (editingBracelet) {
      setBracelets(bracelets.map((b) => (b.id === bracelet.id ? bracelet : b)))
    } else {
      setBracelets([bracelet, ...bracelets])
    }
    setShowForm(false)
    setEditingBracelet(null)
  }

  const handleFormCancel = () => {
    setShowForm(false)
    setEditingBracelet(null)
  }

  if (showForm) {
    return (
      <div className="container mx-auto py-8 px-4">
        <BraceletForm bracelet={editingBracelet} onSuccess={handleFormSuccess} onCancel={handleFormCancel} />
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-serif font-light">Zarządzanie kolekcją</h2>
          <p className="text-muted-foreground">Dodaj edytuj i usuwaj produkty</p>
        </div>
        <Button onClick={() => setShowForm(true)} className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Dodaj produkt
        </Button>
      </div>

      <div className="grid gap-6">
        {bracelets.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground mb-4">Nie znaleziono produktów</p>
              <Button onClick={() => setShowForm(true)}>Dodaj swój pierwszy produkt</Button>
            </CardContent>
          </Card>
        ) : (
          bracelets.map((bracelet) => (
            <Card key={bracelet.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-secondary/20 shrink-0">
                    <Image
                      src={bracelet.image_url || "/placeholder.svg"}
                      alt={bracelet.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-xl font-medium text-balance truncate pr-2">{bracelet.name}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {bracelet.price} zł
                        </Badge>
                      </div>
                      <div className="flex gap-2 shrink-0 ml-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditingBracelet(bracelet)
                            setShowForm(true)
                          }}
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(bracelet.id)}
                          disabled={isDeleting === bracelet.id}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{bracelet.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Dodano: {new Date(bracelet.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
