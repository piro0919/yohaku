import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link } from "@/i18n/navigation";
import Spacer from "react-spacer";

export default function Header(): React.JSX.Element {
  return (
    <header className="h-14 bg-sidebar border-b flex items-center px-4 gap-2">
      <SidebarTrigger className="cursor-pointer" />
      <Link href="/">
        <span className="text-3xl font-bold">Yohaku</span>
      </Link>
      <Spacer grow={1} />
      <Button asChild={true}>
        <Link href="/new">作成</Link>
      </Button>
    </header>
  );
}
