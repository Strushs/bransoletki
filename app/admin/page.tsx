import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { AdminDashboard } from "@/components/admin-dashboard"
import { AdminHeader } from "@/components/admin-header"

export default async function AdminPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  const { data: bracelets, error: braceletError } = await supabase
    .from("bracelets")
    .select("*")
    .order("created_at", { ascending: false })

  if (braceletError) {
    console.error("Error fetching bracelets:", braceletError)
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <AdminDashboard bracelets={bracelets || []} />
    </div>
  )
}
