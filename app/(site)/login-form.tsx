"use client"

import { Eye, EyeOff, Globe } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Card className="w-full max-w-md border-0 bg-card/50 shadow-xl backdrop-blur">
      <CardHeader className="space-y-4 pb-6 text-center">
        <div className="flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <Globe className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-2xl text-foreground">Welcome Back</h2>
          <p className="mt-1 text-muted-foreground text-sm">
            Sign in to your Mikrolink account
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label className="font-medium text-sm" htmlFor="phone-number">
            Phone Number
          </Label>
          <Input
            className="h-11"
            id="phone-number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            type="text"
            value={phoneNumber}
          />
        </div>

        <div className="space-y-2">
          <Label className="font-medium text-sm" htmlFor="password">
            Password
          </Label>
          <div className="relative">
            <Input
              className="h-11 pr-10"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              value={password}
            />
            <Button
              className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
              size="sm"
              type="button"
              variant="ghost"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
        </div>

        <Button className="h-11 w-full font-medium text-base shadow-lg">Sign In</Button>

        {/* <div className="text-center text-muted-foreground text-sm">
          <p className="font-medium">Demo credentials:</p>
          <p>Username: admin | Password: admin</p>
        </div> */}
      </CardContent>
    </Card>
  )
}
