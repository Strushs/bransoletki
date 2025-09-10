"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const COMMON_STONES = [
  "Ametyst",
  "Kwarc różowy",
  "Kwarc biały",
  "Cytryn",
  "Turkus",
  "Jadeit",
  "Kamień księżycowy",
  "Awenturyn",
  "Turmalin",
  "Fluoryt",
]

interface StoneSelectorProps {
  selectedStones: string[]
  onStonesChange: (stones: string[]) => void
  className?: string
}

export function StoneSelector({ selectedStones, onStonesChange, className = "" }: StoneSelectorProps) {
  const [customStone, setCustomStone] = useState("")

  const addStone = (stone: string) => {
    const trimmedStone = stone.trim()
    if (trimmedStone && !selectedStones.includes(trimmedStone)) {
      onStonesChange([...selectedStones, trimmedStone])
    }
  }

  const removeStone = (stone: string) => {
    onStonesChange(selectedStones.filter((s) => s !== stone))
  }

  const handleCustomStoneAdd = () => {
    if (customStone.trim()) {
      addStone(customStone)
      setCustomStone("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleCustomStoneAdd()
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Użyte materiały</label>

        {/* Selected stones */}
        {selectedStones.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {selectedStones.map((stone) => (
              <Badge key={stone} variant="secondary" className="bg-rose-100 text-rose-800 hover:bg-rose-200 pr-1">
                {stone}
                <button
                  type="button"
                  onClick={() => removeStone(stone)}
                  className="ml-1 hover:bg-rose-300 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}

        {/* Common stones */}
        <div className="mb-3">
          <p className="text-xs text-gray-500 mb-2">Kamienie naturalne:</p>
          <div className="flex flex-wrap gap-2">
            {COMMON_STONES.filter((stone) => !selectedStones.includes(stone)).map((stone) => (
              <button
                key={stone}
                type="button"
                onClick={() => addStone(stone)}
                className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-rose-100 hover:text-rose-700 transition-colors"
              >
                + {stone}
              </button>
            ))}
          </div>
        </div>

        {/* Custom stone input */}
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Dodaj coś innego"
            value={customStone}
            onChange={(e) => setCustomStone(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button type="button" onClick={handleCustomStoneAdd} variant="outline" size="sm">
            Dodaj
          </Button>
        </div>
      </div>
    </div>
  )
}
