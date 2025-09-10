export interface Bracelet {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  stones: string[]
  created_at: string
  updated_at: string
}

export interface BraceletFormData {
  name: string
  description: string
  price: number
  image_url: string
  stones: string[]
}
