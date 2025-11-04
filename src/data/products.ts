import picklesImg from "@/assets/product-pickles.jpg";
import tiffinImg from "@/assets/product-tiffin.jpg";
import handicraftImg from "@/assets/product-handicraft.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  seller: string;
  sellerImage?: string;
  location: string;
  category: string;
  description: string;
  story: string;
  ingredients?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Traditional Mango Pickle",
    price: 250,
    image: picklesImg,
    seller: "Lakshmi Devi",
    location: "Mumbai, Maharashtra",
    category: "Pickles",
    description: "Authentic homemade mango pickle prepared with traditional spices and pure mustard oil. Made with love using my grandmother's 50-year-old recipe.",
    story: "I learned this recipe from my mother-in-law who brought it from her village in Rajasthan. For 30 years, I've been making this pickle for my family, and now I want to share this taste of home with yours.",
    ingredients: ["Raw Mangoes", "Mustard Oil", "Fenugreek", "Red Chili", "Turmeric", "Salt", "Asafoetida"],
  },
  {
    id: "2",
    name: "Daily Tiffin Service",
    price: 180,
    image: tiffinImg,
    seller: "Savita Sharma",
    location: "Pune, Maharashtra",
    category: "Tiffin",
    description: "Fresh, nutritious home-cooked meals delivered daily. Includes 2 rotis, sabzi, dal, rice, and salad. Prepared in a clean home kitchen.",
    story: "After my children grew up, I found joy in cooking for working professionals who miss home food. Each meal is prepared with the same care I give to my own family.",
    ingredients: ["Fresh Vegetables", "Whole Wheat", "Lentils", "Rice", "Spices"],
  },
  {
    id: "3",
    name: "Handmade Crochet Items",
    price: 450,
    image: handicraftImg,
    seller: "Radha Iyer",
    location: "Bangalore, Karnataka",
    category: "Handicrafts",
    description: "Beautiful handmade crochet items including coasters, cushion covers, and decorative pieces. Each piece is unique and made with premium yarn.",
    story: "Crochet has been my passion for 40 years. What started as a hobby has now become a way to keep my hands and mind active in my retirement years.",
    ingredients: ["Premium Cotton Yarn", "Love & Patience"],
  },
  {
    id: "4",
    name: "Homemade Chakli & Namkeen",
    price: 200,
    image: picklesImg,
    seller: "Meena Patel",
    location: "Ahmedabad, Gujarat",
    category: "Snacks",
    description: "Crispy, golden chakli and traditional namkeen made fresh to order. Perfect for tea time or festive occasions.",
    story: "During Diwali, everyone in my neighborhood used to ask for my chakli. Now I make it year-round to support my family and share happiness.",
    ingredients: ["Rice Flour", "Gram Flour", "Sesame Seeds", "Ajwain", "Ghee"],
  },
  {
    id: "5",
    name: "Traditional Rasam Powder",
    price: 150,
    image: picklesImg,
    seller: "Kamala Venkat",
    location: "Chennai, Tamil Nadu",
    category: "Spices",
    description: "Authentic South Indian rasam powder made with sun-dried spices. No preservatives or artificial colors.",
    story: "My grandmother taught me to dry roast each spice separately for the best flavor. This powder brings the authentic taste of South Indian homes.",
    ingredients: ["Coriander Seeds", "Cumin", "Black Pepper", "Curry Leaves", "Red Chillies"],
  },
  {
    id: "6",
    name: "Knitted Woolen Sweaters",
    price: 800,
    image: handicraftImg,
    seller: "Geeta Negi",
    location: "Shimla, Himachal Pradesh",
    category: "Handicrafts",
    description: "Hand-knitted woolen sweaters perfect for cold weather. Custom sizes and colors available on request.",
    story: "In the mountains, knitting keeps us warm in both heart and body. Each sweater takes me a week to complete with love and care.",
    ingredients: ["Pure Wool", "Warmth & Care"],
  },
];
