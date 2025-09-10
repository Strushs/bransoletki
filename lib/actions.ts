"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import type { BraceletFormData } from "@/lib/types"

export async function createBracelet(data: BraceletFormData) {
  try {
    const supabase = await createClient()

    const { data: user } = await supabase.auth.getUser()
    if (!user.user) {
      return { error: "Authentication required" }
    }

    const { data: bracelet, error } = await supabase
      .from("bracelets")
      .insert({
        name: data.name,
        description: data.description,
        price: data.price,
        image_url: data.image_url || "/placeholder.svg?height=400&width=400",
        stones: data.stones || [],
      })
      .select()
      .single()

    if (error) {
      console.error("Error creating bracelet:", error)
      return { error: "Failed to create bracelet" }
    }

    revalidatePath("/")
    revalidatePath("/admin")
    return { data: bracelet }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { error: "An unexpected error occurred" }
  }
}

export async function updateBracelet(id: string, data: BraceletFormData) {
  try {
    const supabase = await createClient()

    const { data: user } = await supabase.auth.getUser()
    if (!user.user) {
      return { error: "Authentication required" }
    }

    const { data: bracelet, error } = await supabase
      .from("bracelets")
      .update({
        name: data.name,
        description: data.description,
        price: data.price,
        image_url: data.image_url || "/placeholder.svg?height=400&width=400",
        stones: data.stones || [],
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("Error updating bracelet:", error)
      return { error: "Failed to update bracelet" }
    }

    revalidatePath("/")
    revalidatePath("/admin")
    return { data: bracelet }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { error: "An unexpected error occurred" }
  }
}

export async function deleteBracelet(id: string) {
  try {
    const supabase = await createClient()

    const { data: user } = await supabase.auth.getUser()
    if (!user.user) {
      throw new Error("Authentication required")
    }

    const { error } = await supabase.from("bracelets").delete().eq("id", id)

    if (error) {
      console.error("Error deleting bracelet:", error)
      throw new Error("Failed to delete bracelet")
    }

    revalidatePath("/")
    revalidatePath("/admin")
  } catch (error) {
    console.error("Unexpected error:", error)
    throw error
  }
}
