import { Link } from "wouter";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="font-bold text-lg">EcoTrack</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Track your environmental impact and join a community committed to sustainability.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/dashboard">
                  <a className="text-muted-foreground hover:text-foreground">Dashboard</a>
                </Link>
              </li>
              <li>
                <Link href="/leaderboard">
                  <a className="text-muted-foreground hover:text-foreground">Leaderboard</a>
                </Link>
              </li>
              <li>
                <Link href="/community">
                  <a className="text-muted-foreground hover:text-foreground">Community</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy">
                  <a className="text-muted-foreground hover:text-foreground" data-testid="link-privacy">Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EcoTrack. All rights reserved.</p>
          <p className="mt-2">Written by Andre Youdachev</p>
        </div>
      </div>
    </footer>
  );
}
