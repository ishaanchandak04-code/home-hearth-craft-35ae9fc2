import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Phone, Mail } from "lucide-react";

export default function ManageSellers() {
  const sellers = [
    { id: 1, name: "Lakshmi Devi", location: "Mumbai, Maharashtra", phone: "+91 98765 43210", email: "lakshmi@example.com", status: "active", products: 5 },
    { id: 2, name: "Savita Sharma", location: "Pune, Maharashtra", phone: "+91 98765 43211", email: "savita@example.com", status: "active", products: 3 },
    { id: 3, name: "Radha Iyer", location: "Bangalore, Karnataka", phone: "+91 98765 43212", email: "radha@example.com", status: "active", products: 8 },
    { id: 4, name: "Meena Patel", location: "Ahmedabad, Gujarat", phone: "+91 98765 43213", email: "meena@example.com", status: "pending", products: 0 },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-display font-bold text-foreground mb-2">Manage Sellers</h1>
            <p className="text-muted-foreground">Review and manage all registered sellers on the platform</p>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search sellers by name, location, or email..." 
                className="pl-10 bg-background border-border"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {sellers.map((seller) => (
              <Card key={seller.id} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-foreground">{seller.name}</h3>
                        <Badge variant={seller.status === "active" ? "default" : "secondary"}>
                          {seller.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{seller.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <span>{seller.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span>{seller.email}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mt-3">
                        {seller.products} active products
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 md:items-end">
                      <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                        View Profile
                      </button>
                      {seller.status === "pending" && (
                        <>
                          <button className="px-6 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors">
                            Approve
                          </button>
                          <button className="px-6 py-2 bg-destructive/10 text-destructive rounded-md hover:bg-destructive/20 transition-colors">
                            Reject
                          </button>
                        </>
                      )}
                      {seller.status === "active" && (
                        <button className="px-6 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors">
                          Suspend
                        </button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
