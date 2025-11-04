import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, Heart, ShoppingBag, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Woman cooking in home kitchen"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container relative mx-auto flex h-full items-center px-4">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
              Empowering Women Through Homemade Creations
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Discover authentic homemade food and handicrafts made with love by talented housewives
              and elderly women. Every purchase supports a family and celebrates traditional skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="hero" asChild>
                <Link to="/shop">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="border-b bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-1 text-3xl font-bold text-foreground">500+</h3>
              <p className="text-muted-foreground">Women Empowered</p>
            </div>
            <div className="text-center">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <ShoppingBag className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-1 text-3xl font-bold text-foreground">10,000+</h3>
              <p className="text-muted-foreground">Products Sold</p>
            </div>
            <div className="text-center">
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-1 text-3xl font-bold text-foreground">5,000+</h3>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Featured Products</h2>
            <p className="text-lg text-muted-foreground">
              Handpicked items made with love and traditional expertise
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">Our Mission</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                HomeMade Haven is more than a marketplace—it's a movement to celebrate and support
                the incredible talents of housewives and elderly women across India.
              </p>
              <p className="mb-6 text-lg text-muted-foreground">
                Every product tells a story of tradition, skill, and love. Every purchase creates
                economic independence and preserves cultural heritage.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/about">Read More About Us</Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    Economic Empowerment
                  </h3>
                  <p className="text-muted-foreground">
                    Helping women earn income from their skills and support their families
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    Traditional Crafts
                  </h3>
                  <p className="text-muted-foreground">
                    Preserving recipes and techniques passed down through generations
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Quality Assured</h3>
                  <p className="text-muted-foreground">
                    Every product is made with care in clean, verified home kitchens
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    Community Support
                  </h3>
                  <p className="text-muted-foreground">
                    Building a network of support for women entrepreneurs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">HomeMade Haven</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering women through homemade creations
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/shop" className="hover:text-foreground">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-foreground">
                    Food & Tiffin
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-foreground">
                    Handicrafts
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-foreground">
                    Pickles & Spices
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/about" className="hover:text-foreground">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-foreground">
                    Social Impact
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Become a Seller
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 HomeMade Haven. All rights reserved. Made with ❤️ for empowering women.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
