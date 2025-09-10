"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Upload, X, ImageIcon } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface FileUploadProps {
  onUpload: (url: string) => void
  currentImage?: string
  className?: string
}

export function FileUpload({ onUpload, currentImage, className = "" }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(currentImage || null)
  const supabase = createClient()

  const uploadFile = async (file: File) => {
    setIsUploading(true)
    try {
      const fileExt = file.name.split(".").pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`

      const { data, error } = await supabase.storage.from("bracelet-images").upload(fileName, file)

      if (error) throw error

      const {
        data: { publicUrl },
      } = supabase.storage.from("bracelet-images").getPublicUrl(fileName)

      setPreview(publicUrl)
      onUpload(publicUrl)
    } catch (error) {
      console.error("Upload error:", error)
      alert("Failed to upload image. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    const imageFile = files.find((file) => file.type.startsWith("image/"))

    if (imageFile) {
      uploadFile(imageFile)
    }
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      uploadFile(file)
    }
  }

  const removeImage = () => {
    setPreview(null)
    onUpload("")
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {preview ? (
        <div className="relative">
          <img
            src={preview || "/placeholder.svg"}
            alt="Preview"
            className="w-full h-full object-cover rounded-lg border-2 border-rose-200"
          />
          <button
            type="button"
            onClick={removeImage}
            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging ? "border-rose-400 bg-rose-50" : "border-rose-200 hover:border-rose-300"
          }`}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragLeave={() => setIsDragging(false)}
        >
          <div className="flex flex-col items-center space-y-4">
            {isUploading ? (
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-500"></div>
            ) : (
              <ImageIcon className="w-12 h-12 text-rose-300" />
            )}
            <div>
              <p className="text-sm text-gray-600 mb-2">
                {isUploading ? "Uploading..." : "Drag and drop an image here, or"}
              </p>
              <label className="inline-flex items-center px-4 py-2 bg-rose-100 text-rose-700 rounded-lg hover:bg-rose-200 cursor-pointer transition-colors">
                <Upload className="w-4 h-4 mr-2" />
                Wybierz plik
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  disabled={isUploading}
                />
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
