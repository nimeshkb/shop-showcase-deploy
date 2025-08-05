import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            TechStore
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Products</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Categories</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative" onClick={onCartClick}>
            <ShoppingCart className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center">
                {cartItemsCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;