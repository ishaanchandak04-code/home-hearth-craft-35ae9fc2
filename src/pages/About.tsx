import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-6 text-5xl font-bold text-foreground">About HomeMade Haven</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            We're on a mission to empower housewives and elderly women by providing them a platform
            to share their homemade creations with the world and earn a sustainable income.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  To create a world where every woman's skills and talents are valued, celebrated,
                  and transformed into economic opportunities. We envision communities where
                  traditional crafts and recipes thrive alongside modern commerce.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To bridge the gap between talented home entrepreneurs and customers who appreciate
                  authentic, handmade products. We provide the platform, support, and community
                  needed for women to succeed in their entrepreneurial journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="border-y bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Our Impact</h2>
            <p className="text-lg text-muted-foreground">
              Together, we're making a real difference in women's lives
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-4xl font-bold text-foreground">500+</h3>
              <p className="mb-2 text-lg font-semibold">Women Entrepreneurs</p>
              <p className="text-muted-foreground">
                Earning sustainable income from their skills
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="mb-2 text-4xl font-bold text-foreground">₹50L+</h3>
              <p className="mb-2 text-lg font-semibold">Income Generated</p>
              <p className="text-muted-foreground">Direct income to sellers' families</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-4xl font-bold text-foreground">10,000+</h3>
              <p className="mb-2 text-lg font-semibold">Happy Customers</p>
              <p className="text-muted-foreground">Enjoying authentic homemade products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-foreground">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">Empowerment</h3>
                <p className="text-muted-foreground">
                  Enabling women to become financially independent and confident
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">Authenticity</h3>
                <p className="text-muted-foreground">
                  Preserving traditional recipes and crafts with genuine care
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">Quality</h3>
                <p className="text-muted-foreground">
                  Ensuring every product meets high standards of excellence
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">Community</h3>
                <p className="text-muted-foreground">
                  Building supportive networks of sellers and customers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground">
            Join Our Community Today
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Whether you're a talented homemaker or a customer who values authenticity,
            <br />
            there's a place for you in the HomeMade Haven family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/shop">Start Shopping</Link>
            </Button>
            <Button size="lg" variant="outline">
              Become a Seller
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
