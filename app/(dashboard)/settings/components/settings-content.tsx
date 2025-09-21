"use client"

import {
  Bell,
  Database,
  Globe,
  Key,
  Package,
  Server,
  Settings,
  Shield,
  User,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function SettingsContent() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="px-2 sm:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold">Settings</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Manage your application settings and preferences
        </p>
      </div>

      <Separator />

      {/* Settings Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* General Settings */}
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              <CardTitle className="text-base sm:text-lg">General</CardTitle>
            </div>
            <CardDescription className="text-xs sm:text-sm">
              Basic application settings and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="px-3 sm:px-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">Language</span>
                <Badge variant="outline" className="text-xs">
                  English
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">Theme</span>
                <Badge variant="outline" className="text-xs">
                  System
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">Timezone</span>
                <Badge variant="outline" className="text-xs">
                  UTC+6
                </Badge>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-3 sm:mt-4 text-xs sm:text-sm"
            >
              Configure
            </Button>
          </CardContent>
        </Card>

        {/* User Management */}
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-green-600" />
              <CardTitle className="text-lg">Users</CardTitle>
            </div>
            <CardDescription>Manage users, roles, and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Total Users</span>
                <Badge variant="outline">24</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Active Users</span>
                <Badge variant="outline">22</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Admin Users</span>
                <Badge variant="outline">3</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              Manage Users
            </Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-red-600" />
              <CardTitle className="text-lg">Security</CardTitle>
            </div>
            <CardDescription>Security settings and authentication</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">2FA</span>
                <Badge variant="outline">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Session Timeout</span>
                <Badge variant="outline">24h</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Password Policy</span>
                <Badge variant="outline">Strong</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              Security Settings
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-yellow-600" />
              <CardTitle className="text-lg">Notifications</CardTitle>
            </div>
            <CardDescription>Configure notification preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Email</span>
                <Badge variant="outline">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">SMS</span>
                <Badge variant="outline">Disabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Push</span>
                <Badge variant="outline">Enabled</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              Configure
            </Button>
          </CardContent>
        </Card>

        {/* Database */}
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-purple-600" />
              <CardTitle className="text-lg">Database</CardTitle>
            </div>
            <CardDescription>Database settings and maintenance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Status</span>
                <Badge variant="outline" className="bg-green-100 text-green-800">
                  Healthy
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Size</span>
                <Badge variant="outline">2.4 GB</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Backup</span>
                <Badge variant="outline">2h ago</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              Database Tools
            </Button>
          </CardContent>
        </Card>

        {/* API Settings */}
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Key className="h-5 w-5 text-indigo-600" />
              <CardTitle className="text-lg">API</CardTitle>
            </div>
            <CardDescription>API keys and integration settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">API Version</span>
                <Badge variant="outline">v1.0</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Rate Limit</span>
                <Badge variant="outline">1000/min</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Active Keys</span>
                <Badge variant="outline">3</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              API Settings
            </Button>
          </CardContent>
        </Card>

        {/* Server Configuration */}
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Server className="h-5 w-5 text-orange-600" />
              <CardTitle className="text-lg">Server</CardTitle>
            </div>
            <CardDescription>Server configuration and monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Status</span>
                <Badge variant="outline" className="bg-green-100 text-green-800">
                  Online
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Uptime</span>
                <Badge variant="outline">99.9%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Load</span>
                <Badge variant="outline">Low</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              Server Monitor
            </Button>
          </CardContent>
        </Card>

        {/* Network Settings */}
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-cyan-600" />
              <CardTitle className="text-lg">Network</CardTitle>
            </div>
            <CardDescription>Network configuration and connectivity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Protocol</span>
                <Badge variant="outline">HTTPS</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Port</span>
                <Badge variant="outline">443</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">SSL</span>
                <Badge variant="outline" className="bg-green-100 text-green-800">
                  Valid
                </Badge>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              Network Config
            </Button>
          </CardContent>
        </Card>

        {/* Package Management */}
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-pink-600" />
              <CardTitle className="text-lg">Packages</CardTitle>
            </div>
            <CardDescription>Package and subscription management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Total Packages</span>
                <Badge variant="outline">12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Active Packages</span>
                <Badge variant="outline">10</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Revenue</span>
                <Badge variant="outline">$2,450</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              Manage Packages
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="pb-3 sm:pb-4">
          <CardTitle className="text-sm sm:text-base">Quick Actions</CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Common administrative tasks and maintenance
          </CardDescription>
        </CardHeader>
        <CardContent className="px-3 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            <Button
              variant="outline"
              className="h-16 sm:h-20 flex flex-col space-y-1 sm:space-y-2 p-2"
            >
              <Database className="h-4 w-4 sm:h-6 sm:w-6" />
              <span className="text-xs sm:text-sm text-center">Backup Database</span>
            </Button>
            <Button
              variant="outline"
              className="h-16 sm:h-20 flex flex-col space-y-1 sm:space-y-2 p-2"
            >
              <Bell className="h-4 w-4 sm:h-6 sm:w-6" />
              <span className="text-xs sm:text-sm text-center">Send Notification</span>
            </Button>
            <Button
              variant="outline"
              className="h-16 sm:h-20 flex flex-col space-y-1 sm:space-y-2 p-2"
            >
              <Shield className="h-4 w-4 sm:h-6 sm:w-6" />
              <span className="text-xs sm:text-sm text-center">Security Audit</span>
            </Button>
            <Button
              variant="outline"
              className="h-16 sm:h-20 flex flex-col space-y-1 sm:space-y-2 p-2"
            >
              <Server className="h-4 w-4 sm:h-6 sm:w-6" />
              <span className="text-xs sm:text-sm text-center">System Health</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
