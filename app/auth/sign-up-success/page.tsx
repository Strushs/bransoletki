import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, ArrowLeft } from "lucide-react"

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Showcase
              </Button>
            </Link>
          </div>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-serif font-light">Check Your Email</CardTitle>
              <CardDescription>We've sent you a confirmation link to complete your account setup</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
                <p className="text-sm text-muted-foreground">
                  Please check your email and click the confirmation link to activate your admin account. Once
                  confirmed, you'll be able to sign in and manage your bracelet collection.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link href="/auth/login">
                  <Button className="w-full bg-primary hover:bg-primary/90">Go to Sign In</Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="w-full bg-transparent">
                    Return to Showcase
                  </Button>
                </Link>
              </div>

              <p className="text-xs text-muted-foreground">
                Didn't receive the email? Check your spam folder or try signing up again.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
