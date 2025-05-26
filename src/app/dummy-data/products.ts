import { Product } from "../interfaces/product.interface";

export const products: Product[] = [
  // Cakes
  {
    id: 13,
    name: 'Ramen',
    description: 
      'Our Ramen is a soup whose main ingredients are Chinese noodles, accompanied by meat broth, vegetables and meat, seafood or fish',
    rating: 4.5,
    image: 'assets/products/ramen.jpg',
    category_id: 5,
    seller_id: 2,
    default_price: 25,
    cut_price: 50,
    type: 'soup',
    varieties: [
      { id: 7, unit: 'px', quantity: 1, price: 25, is_default: false },
    ],
  },
  {
    id: 15,
    name: 'Sushi',
    type: 'japan food',
    description: 
      'Our Sushi It is a typical dish of Japanese origin based on rice seasoned with rice vinegar, sugar and salt and combined with other ingredients such as raw fish, seafood, vegetables.',
    rating: 4.8,
    image: 'assets/products/sushi.jpg',
    category_id: 5,
    seller_id: 2,
    default_price: 35,
    cut_price: 150,
    varieties: [
      { id: 17, unit: '1 vegan', quantity: 1, price: 28, is_default: false },
      { id: 18, unit: '1 salmon', quantity: 1, price: 28, is_default: true },
    ],
  },
  {
    id: 14,
    name: 'pork',
    type: 'non-veg',
    description: 
      'This Red Velvet Cake is a luxurious dessert with a velvety texture and a hint of cocoa. Topped with creamy, tangy cream cheese frosting, it’s the ultimate treat for special occasions. Its vibrant red color and rich flavor make it a feast for both the eyes and the palate.',
    rating: 4.7,
    image: 'assets/products/pork.jpg',
    category_id: 5,
    seller_id: 2,
    default_price: 30,
    cut_price: 150,
    varieties: [
      { id: 12, unit: '1 px', quantity: 1, price: 27, is_default: false },
    ],
  },

  // Cupcakes
  {
    id: 1,
    name: 'Vanilla Cupcake',
    description: 
      'Our Vanilla Cupcake is a delightful treat crafted with moist vanilla sponge cake and topped with a swirl of creamy, rich frosting. Perfect for satisfying your sweet tooth, it is made using the finest vanilla extracts. Enjoy a melt-in-your-mouth experience with every bite of this classic cupcake.',
    rating: 4.3,
    image: 'assets/products/vanilla-cupcake.jpg',
    category_id: 1,
    seller_id: 1,
    default_price: 15,
    cut_price: 30,
    type: 'veg',
    varieties: [
      {
        id: 1,
        unit: 'Piece',
        quantity: 1,
        price: 15,
        is_default: true,
      },
    ],
  },
  {
    id: 3,
    name: 'ramen',
    type: 'non-veg',
    description: 
      'Indulge in the richness of our Chocolate Cupcake, made with premium cocoa and topped with a luscious chocolate ganache. This cupcake offers a perfect balance of sweetness and flavor, making it a favorite for chocolate lovers. A treat for all occasions, it’s as decadent as it is delightful.',
    rating: 4.7,
    image: 'assets/products/ramen.jpg',
    category_id: 1,
    seller_id: 1,
    default_price: 20,
    cut_price: 50,
    varieties: [
      {
        id: 2,
        unit: 'Piece',
        quantity: 1,
        price: 20,
        is_default: true,
      },
    ],
  },

  // Donuts
  {
    id: 7,
    name: 'sushi',
    type: 'non-veg',
    description: 
      'Our Glazed Donut is a soft, airy delight coated with a shiny layer of sweet glaze. The perfect combination of texture and flavor, it’s made fresh daily to provide an irresistible taste. Enjoy this timeless classic with a cup of coffee or as a standalone treat anytime.',
    rating: 4.7,
    image: 'assets/products/sushi.jpg',
    category_id: 3,
    seller_id: 2,
    default_price: 8,
    cut_price: 15,
    varieties: [
      {
        id: 3,
        unit: 'Piece',
        quantity: 1,
        price: 8,
        is_default: true,
      },
    ],
  },
  {
    id: 8,
    name: 'pork',
    type: 'veg',
    description: 
      'This Chocolate Sprinkled Donut is a feast for both the eyes and the palate. It features a soft donut base, a layer of rich chocolate glaze, and a generous topping of colorful sprinkles. A delightful treat for any occasion, it’s a perfect snack for all ages.',
    rating: 4.9,
    image: 'assets/products/pork.jpg',
    category_id: 3,
    seller_id: 2,
    default_price: 10,
    varieties: [
      {
        id: 4,
        unit: 'Piece',
        quantity: 1,
        price: 10,
        is_default: true,
      },
    ],
  },

  // Breads
  {
    id: 10,
    name: 'Sourdough Bread',
    description: 
      'Our Sourdough Bread is a handcrafted loaf made with a slow fermentation process for that perfect tangy flavor. Its crusty exterior and soft, chewy interior make it ideal for sandwiches, toasts, or enjoying on its own. Made with natural ingredients, it’s a healthy and tasty choice.',
    rating: 4.6,
    image: 'assets/products/sourdough_bread.jpg',
    category_id: 4,
    seller_id: 1,
    default_price: 20,
    type: 'non-veg',
    varieties: [
      {
        id: 5,
        unit: 'Loaf',
        quantity: 1,
        price: 20,
        is_default: true,
      },
    ],
  },
  {
    id: 11,
    name: 'Baguette',
    description: 
      'This traditional French Baguette is baked to golden perfection with a crispy crust and soft, fluffy interior. Ideal for pairing with cheese, spreads, or soups, it is made with simple, high-quality ingredients. Perfect for elevating your dining experience with a touch of authenticity.',
    rating: 4.4,
    image: 'assets/products/baguette.jpg',
    category_id: 4,
    seller_id: 1,
    default_price: 15,
    type: 'non-veg',
    varieties: [
      {
        id: 6,
        unit: 'Loaf',
        quantity: 1,
        price: 15,
        is_default: true,
      },
    ],
  },
];