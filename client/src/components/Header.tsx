import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [location] = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/track", label: "Track Usage" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/community", label: "Community" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2" data-testid="link-home">
          <Leaf className="w-6 h-6 text-primary" />
          <span className="font-bold text-xl">EcoTrack</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={location === item.href ? "secondary" : "ghost"}
                size="sm"
                data-testid={`link-${item.label.toLowerCase().replace(" ", "-")}`}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>

          <div className="hidden md:flex gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm" data-testid="link-login">Login</Button>
            </Link>
            <Link href="/login">
              <Button size="sm" data-testid="link-signup">Sign Up</Button>
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={location === item.href ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-link-${item.label.toLowerCase().replace(" ", "-")}`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
                <div className="border-t pt-4 flex flex-col gap-2">
                  <Link href="/login">
                    <Button variant="ghost" className="w-full" onClick={() => setIsOpen(false)} data-testid="mobile-link-login">
                      Login
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button className="w-full" onClick={() => setIsOpen(false)} data-testid="mobile-link-signup">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
