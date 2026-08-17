import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "23.5rem",
          "--sidebar-width-icon": "6rem",
          "--sidebar": "#1e1e1e",
          "--sidebar-foreground": "#fafafa",
          "--sidebar-accent": "#262626",
          "--sidebar-accent-foreground": "#fafafa",
          "--sidebar-border": "#1e1e1e",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset className="min-w-0 overflow-hidden">
        <SidebarTrigger className="fixed top-3 left-3 z-20 md:hidden" />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
