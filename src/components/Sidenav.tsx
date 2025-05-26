"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = Array.from({ length: 20 }, (_, i) => ({
  name: `${i + 1}`,
  href: `/sidebar${i + 1}`,
}));

export default function Sidenav() {
  const pathname = usePathname();

  return (
    <aside className="fixed bottom-0 left-[60%] transform -translate-x-[50%] z-[1000]  border-l border-blue-200 shadow-md overflow-y-auto">
      <nav className="flex  items-center pb-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "h-8  w-8 flex items-center justify-center rounded-full text-sm font-semibold transition-colors bg-blue-100 hover:bg-blue-300",
              pathname === link.href
                ? " text-white shadow bg-blue-500"
                : "text-gray-600"
            )}>
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
