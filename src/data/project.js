// src/data/projects.js
export const PROJECTS_DATA = [
  {
    id: "chick",
    image: "/projects/bird.jpg",
    video: "/projects/bird.mp4",
    price: 30.00, // Sayı olarak tutmak ileride sepet yaparsan toplama işlemi için iyidir
    currency: "€", 
    status: "available", // available, sold_out, or custom_order
    
    tags: [
      "Amigurumi",
      "Handmade",
      "Spring",
      "Cute",
      "Decor"
    ],
  },
  {
    id: "koala",
    image: "/projects/koala1.jpg",
    slides: [
      { url: '/projects/koala1.jpg', caption: 'Slide 1' },
      { url: '/projects/koala3.jpg', caption: 'Slide 2' },
      { url: '/projects/koala2.jpg', caption: 'Slide 3' }
    ],
    price: 35.00,
    currency: "€",
    status: "available",
   
    tags: [
      "Amigurumi",
      "Handmade",
      "Koala",
      "Baby",
      "Comfort Toy"
    ],
  },
  {
    id: "sakura",
    image: "/projects/sakura1.jpg",
    slides: [
      { url: '/projects/sakura1.jpg', caption: 'Slide 1' },
      { url: '/projects/sakura2.jpg', caption: 'Slide 2' }
    ],
    price: 20.00,
    currency: "€",
    status: "available", // Stokta yok ama sipariş üzerine yapılabilir
    
    tags: [
      "Amigurumi",
      "Handmade",
      "Sakura",
      "Flower",
      "Home Decor"
    ],
  },
];