import { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "./_components/header";
import Landing from "@/components/landing";

export type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export default async function Layout({ children }: LayoutProps) {
  if (true) {
    return <Landing />;
  }

  return (
    <SidebarProvider>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <AppSidebar />
      <main className="mt-14 flex-1">{children}</main>
    </SidebarProvider>
  );
}
