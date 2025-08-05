import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus, Trash2, CreditCard } from "lucide-react";
import { CartItem } from "@/types/Product";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: CartProps) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            Shopping Cart
            <span className="text-sm font-normal text-muted-foreground">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Your cart is empty</p>
                <Button variant="outline" className="mt-4" onClick={onClose}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted/50 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h4 className="font-medium line-clamp-2">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-primary">
                          ${item.price}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:text-destructive"
                            onClick={() => onRemoveItem(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t pt-6 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
              <Separator />
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300"
                onClick={() => {
                  // Handle checkout
                  alert('Checkout functionality would be implemented here!');
                }}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Checkout
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;