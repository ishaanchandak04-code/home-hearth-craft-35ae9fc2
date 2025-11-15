import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ShoppingCart, TrendingUp, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

export default function MerchantDashboard() {
  // Simulate merchant's products (first 3)
  const myProducts = products.slice(0, 3);

  const stats = [
    { title: "My Products", value: myProducts.length.toString(), icon: Package, change: "+2 this month" },
    { title: "Total Orders", value: "45", icon: ShoppingCart, change: "+8 this week" },
    { title: "Revenue", value: "₹12,450", icon: TrendingUp, change: "+15% this month" },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-8">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-display font-bold text-foreground mb-2">My Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's your business overview</p>
            </div>
            <Link to="/merchant/products/add">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add New Product
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.title} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>My Products</CardTitle>
                <CardDescription>Your active product listings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myProducts.map((product) => (
                    <div key={product.id} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">₹{product.price}</p>
                        <Link to={`/merchant/products/edit/${product.id}`}>
                          <button className="text-xs text-muted-foreground hover:text-primary transition-colors mt-1">
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/merchant/products">
                  <Button variant="outline" className="w-full mt-4">
                    View All Products
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your latest customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">Order #{2000 + i}</p>
                        <p className="text-sm text-muted-foreground">Customer Name</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground">₹{180 * i}</p>
                        <p className="text-xs text-accent">Processing</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
