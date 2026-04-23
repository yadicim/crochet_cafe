// src/data/projects.js
export const PROJECTS_DATA = [


  //TOYS
  {
    id: "chick",
    category: "toys",
    image: "/projects/toy/bird.jpg",
    video: "/projects/toy/bird.mp4",
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
    id: "cat",
    category: "toys",
    image: "/projects/toy/cat1.jpg",
    slides: [
      { url: '/projects/toy/cat1.jpg', caption: 'Slide 1' },
      { url: '/projects//toy/cat2.jpg', caption: 'Slide 2' },
      { url: '/projects//toy/cat3.jpg', caption: 'Slide 2' }
    ],
    price: 20.00,
    currency: "€",
    status: "available", 
    
    tags: [
      "Amigurumi",
      "Handmade",
      "Cute",
      "Toy",
      "Cat"
    ],
  },
  {
    id: "koala",
    category: "toys",
    image: "/projects/toy/koala1.jpg",
    slides: [
      { url: '/projects/toy/koala1.jpg', caption: 'Slide 1' },
      { url: '/projects/toy/koala3.jpg', caption: 'Slide 2' },
      { url: '/projects/toy/koala2.jpg', caption: 'Slide 3' }
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
    id: "owl",
    image: "/projects/toy/owl.jpg",
    category: "toys",
   
    price: 20.00,
    currency: "€",
    status: "available", 
    
    tags: [
      "Amigurumi",
      "Handmade",
      "Cute",
      "Toy",
      "Owl"
    ],
  },

  //HOME

  {
    id: "sakura",
    category: "home",
    image: "/projects/home/sakura1.jpg",
    slides: [
      { url: '/projects/home/sakura1.jpg', caption: 'Slide 1' },
      { url: '/projects/home/sakura2.jpg', caption: 'Slide 2' }
    ],
    price: 25.00,
    currency: "€",
    status: "available", 
    
    tags: [
      "Amigurumi",
      "Handmade",
      "Sakura",
      "Flower",
      "Home Decor"
    ],
  },
  
  {
    id: "lavender",
    category: "home",
    image: "/projects/home/lavender.jpg",
    
    price: 25.00,
    currency: "€",
    status: "available", 
    
    tags: [
      "Amigurumi",
      "Handmade",
      "Lavender",
      "Flower",
      "Home Decor"
    ],
  },
  //ACCESSORIES

  {
    id: "hair-acc",
    category: "accessories",
    image: "/projects/acc/hair-acc1.jpg",
    slides: [
      { url: '/projects/acc/hair-acc1.jpg', caption: 'Slide 1' },
      { url: '/projects/acc/hair-acc2.jpg', caption: 'Slide 2' },
      
    ],
    price: 10.00  ,
    currency:  "€  ",
    priceDetail: "1 kpl",
    status: "available", 
    
    tags: [
      "Amigurumi",
      "Handmade",
      "Crochet Hair Accessory",
      "Boho Style",
      "Flower Hair Twine"
    ],
  },
  
];