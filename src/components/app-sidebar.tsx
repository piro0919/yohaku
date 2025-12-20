import { Calendar, Crown, Pen, Settings, Users } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "エディター",
    url: "/write",
    icon: Pen,
  },
  {
    title: "カレンダー",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "フォロー中",
    url: "/following",
    icon: Users,
  },
  {
    title: "設定",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "プレミアム",
    url: "/premium",
    icon: Crown,
  },
];

export function AppSidebar() {
  return (
    <Sidebar
      className="mt-14"
      collapsible="icon"
      style={{
        height: "calc(100svh - var(--spacing) * 14)",
      }}
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
