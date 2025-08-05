import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Check } from "lucide-react";
import { Product } from "@/types/Product";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  if (!product) return null;

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted/50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {discount > 0 && (
              <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                -{discount}% OFF
              </Badge>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl font-bold text-primary">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <Button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                disabled={!product.inStock}
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;