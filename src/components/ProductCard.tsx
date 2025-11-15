import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/products";

type ProductCardProps = Product;

const ProductCard = (product: ProductCardProps) => {
  const { addToCart } = useCart();
  const { id, name, price, image, seller, location, category } = product;
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/product/${id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground">
            {category}
          </Badge>
          <button
            className="absolute right-3 top-3 rounded-full bg-card/80 p-2 backdrop-blur transition-all hover:bg-card"
            onClick={(e) => {
              e.preventDefault();
              // Add to favorites logic
            }}
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="mb-2 font-semibold text-foreground transition-colors hover:text-primary">
            {name}
          </h3>
        </Link>
        <div className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span>{location}</span>
        </div>
        <p className="text-sm text-muted-foreground">by {seller}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <span className="text-xl font-bold text-primary">₹{price}</span>
        <div className="flex gap-2">
          <Button 
            size="sm" 
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
