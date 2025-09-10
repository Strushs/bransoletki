import { createClient } from "@/lib/supabase/server";
import { BraceletGrid } from "@/components/bracelet-grid";
import { Hero } from "@/components/hero";
import { Contact } from "@/components/contact";
import { Story } from "@/components/story";

export default async function HomePage() {
  const supabase = await createClient();

  const { data: bracelets, error } = await supabase
    .from("bracelets")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching bracelets:", error);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Hero />
      <section
        id="collection"
        className="py-16 my-0 px-1 mx-0 bg-white md:py-0"
      >
        <BraceletGrid bracelets={bracelets || []} />
      </section>
      <Contact />
      <Story />
    </main>
  );
}
