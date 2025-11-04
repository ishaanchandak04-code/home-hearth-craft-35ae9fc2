import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, MapPin, MessageCircle, ShoppingCart, User } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </div>
    );
  }

  const handleRequestVariation = () => {
    toast.success("Request sent! The seller will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <Badge className="mb-4 w-fit bg-accent text-accent-foreground">
              {product.category}
            </Badge>
            <h1 className="mb-4 text-4xl font-bold text-foreground">{product.name}</h1>
            <p className="mb-6 text-3xl font-bold text-primary">₹{product.price}</p>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">{product.seller}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">{product.location}</span>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="mb-6">
              <h2 className="mb-3 text-xl font-semibold">Description</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {product.ingredients && (
              <div className="mb-6">
                <h2 className="mb-3 text-xl font-semibold">Ingredients</h2>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <Badge key={index} variant="outline">
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-auto flex gap-3">
              <Button size="lg" className="flex-1" onClick={handleRequestVariation}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Request Variation
              </Button>
              <Button size="lg" variant="secondary" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Seller Story */}
        <Card className="mt-12 border-2">
          <CardContent className="p-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Seller's Story</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{product.story}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
