"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createBracelet, updateBracelet } from "@/lib/actions"
import { ArrowLeft } from "lucide-react"
import type { Bracelet, BraceletFormData } from "@/lib/types"
import { FileUpload } from "@/components/file-upload"
import { StoneSelector } from "@/components/stone-selector"

interface BraceletFormProps {
  bracelet?: Bracelet | null
  onSuccess: (bracelet: Bracelet) => void
  onCancel: () => void
}

export function BraceletForm({ bracelet, onSuccess, onCancel }: BraceletFormProps) {
  const [formData, setFormData] = useState<BraceletFormData>({
    name: bracelet?.name || "",
    description: bracelet?.description || "",
    price: bracelet?.price || 0,
    image_url: bracelet?.image_url || "",
    stones: bracelet?.stones || [],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      let result
      if (bracelet) {
        result = await updateBracelet(bracelet.id, formData)
      } else {
        result = await createBracelet(formData)
      }

      if (result.error) {
        setError(result.error)
      } else if (result.data) {
        onSuccess(result.data)
      }
    } catch (err) {
      setError("An unexpected error occurred")
      console.error("Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof BraceletFormData, value: string | number | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm" onClick={onCancel}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Cofnij
        </Button>
        <h1 className="text-2xl font-serif font-light">{bracelet ? "Edytuj" : "Dodaj"}</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif font-light">Detale produktu</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nazwa</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Bransoletka z turmalinu"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Opis</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Opis produktu"
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Cena (zł)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={(e) => handleChange("price", Number.parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Zdjęcie produktu</Label>
              <FileUpload onUpload={(url) => handleChange("image_url", url)} currentImage={formData.image_url} />
            </div>

            <StoneSelector
              selectedStones={formData.stones}
              onStonesChange={(stones) => handleChange("stones", stones)}
            />

            {error && (
              <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90">
                {isSubmitting ? "Saving..." : bracelet ? "Zaaktualizuj" : "Utwórz"}
              </Button>
              <Button type="button" variant="outline" onClick={onCancel}>
                Anuluj
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
