import { AppSidebar } from "@/components/previews/dashboard/app-sidebar"
import { ChartAreaInteractive } from "@/components/previews/dashboard/chart-area-interactive"
import { DataTable } from "@/components/previews/dashboard/data-table"
import { SectionCards } from "@/components/previews/dashboard/section-cards"
// import { SiteHeader } from "@/components/previews/dashboard/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import data from "@/public/assets/data.json"

export default function Dashboard() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      {/* <SiteHeader /> */}
      <SidebarInset>
        <div>
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SectionCards />
                <div className="px-4 lg:px-6">
                  <ChartAreaInteractive />
                </div>
                <DataTable data={data} />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
