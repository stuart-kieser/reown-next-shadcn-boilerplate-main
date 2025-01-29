"use client";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {/*web 3 connect wallet button*/}
          <w3m-button/>

      </main>
  );
}
