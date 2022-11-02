import Product from "../models/product.js";

function seed() {
  const products = [
    {
      name: "Easter Studs",
      price: 18.00,
      imageUrl: "/images/products/35435.jpg",
      description: "Easter studs available in three different colors and vibes."
    },
    {
      name: "Mirage Moccasin",
      price: 20.00,
      imageUrl: "/images/products/43488.jpg",
      description: "This collection comes into few different styles for anyone who likes neutral colors. Can be worn for a casual day out of a classy dinner date. Jumprings and hooks are all gold plated and hypoallergenic, perfect for senstive ears."
    },
    {
      name: "Blooming Petals",
      price: 20.00,
      imageUrl: "/images/products/54343.jpg",
      description: "Accessorize your summer wardrobe with these classy petals. It comes in neutral plain colors or hand painted borders with gold acrylic. The V-Shaped hooks are gold plated and hypoallergenic for sensitive ears."
    },
    {
      name: "Chakras & Hand of Fatima",
      price: 20.00,
      imageUrl: "/images/products/16543.jpg",
      description: "Are you looking for some symbolic earrings!? Check out these chakras earrings made magically using the hand of Fatima and V-shaped gold plated hooks."
    },
  ];

  products.forEach(product => Product.create(product))
}

seed();
