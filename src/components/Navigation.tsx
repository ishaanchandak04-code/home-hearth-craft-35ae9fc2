import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import CartDrawer from "@/components/CartDrawer";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">HomeMade Haven</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link to="/" className="text-foreground/80 transition-colors hover:text-foreground">
              Home
            </Link>
            <Link to="/shop" className="text-foreground/80 transition-colors hover:text-foreground">
              Shop
            </Link>
            <Link to="/about" className="text-foreground/80 transition-colors hover:text-foreground">
              About
            </Link>
            <CartDrawer />
            <Button variant="outline" size="sm">
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Button>
            <Button size="sm">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Sell
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="flex flex-col gap-4 pb-4 md:hidden">
            <Link
              to="/"
              className="text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex gap-2">
              <CartDrawer />
              <Button variant="outline" size="sm" className="flex-1">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
              <Button size="sm" className="flex-1">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Sell
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
