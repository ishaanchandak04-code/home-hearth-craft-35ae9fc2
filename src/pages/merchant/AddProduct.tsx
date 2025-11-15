import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Upload } from "lucide-react";
import { Link } from "react-router-dom";

export default function AddProduct() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-8">
          <Link to="/merchant/products">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-3xl font-display">Add New Product</CardTitle>
              <CardDescription>Fill in the details to list your product</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="e.g., Traditional Mango Pickle"
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pickles">Pickles</SelectItem>
                      <SelectItem value="tiffin">Tiffin Service</SelectItem>
                      <SelectItem value="handicrafts">Handicrafts</SelectItem>
                      <SelectItem value="snacks">Snacks</SelectItem>
                      <SelectItem value="spices">Spices</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price (₹) *</Label>
                  <Input 
                    id="price" 
                    type="number"
                    placeholder="e.g., 250"
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe your product..."
                    rows={4}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="story">Your Story</Label>
                  <Textarea 
                    id="story" 
                    placeholder="Share the story behind this product..."
                    rows={4}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ingredients">Ingredients/Materials</Label>
                  <Input 
                    id="ingredients" 
                    placeholder="e.g., Raw Mangoes, Mustard Oil, Spices"
                    className="bg-background border-border"
                  />
                  <p className="text-xs text-muted-foreground">Separate items with commas</p>
                </div>

                <div className="space-y-2">
                  <Label>Product Images *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB (max 5 images)</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Product Video (Optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-1">Upload a short video (30-60 seconds)</p>
                    <p className="text-xs text-muted-foreground">MP4, MOV up to 50MB</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    Publish Product
                  </Button>
                  <Link to="/merchant/products" className="flex-1">
                    <Button type="button" variant="outline" className="w-full">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
