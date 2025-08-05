import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onProductClick }: ProductCardProps) => {
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-card/50">
      <div className="relative" onClick={() => onProductClick(product)}>
        <div className="aspect-square overflow-hidden bg-muted/50 rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {discount > 0 && (
          <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
            -{discount}%
          </Badge>
        )}
        {!product.inStock && (
          <Badge variant="secondary" className="absolute top-3 right-3">
            Out of Stock
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>
          
          <div className="flex items-center space-x-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews})
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            disabled={!product.inStock}
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;