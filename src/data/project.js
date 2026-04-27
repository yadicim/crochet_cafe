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
   {
    id: "bear_rattle",
    image: "/projects/toy/bear-rattle.jpg",
    category: "toys",
   
    price: 15.00,
    currency: "€",
    status: "custom_order", 
    
    tags:["Baby Rattle", "Crochet Toy", "Newborn Gift", "Eco-friendly Toy", "Nursery Essential"]
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
    
    price: 30.00,
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
  {
    id: "robin_bird_nest",
    category: "home",
     image: "/projects/home/robin1.jpg",
    slides: [
      { url: '/projects/home/robin1.jpg', caption: 'Slide 1' },
      { url: '/projects/home/robin2.jpg', caption: 'Slide 2' }
    ],
    
    price: 20.00,
    currency: "€",
    status: "available", 
    
    tags: ["Crochet Bird", "Robin Redbreast", "Spring Decor", "Nature Inspired", "Bird Watcher Gift"]
  },
   {
    id: "bellflower_mirror",
    category: "home",
     image: "/projects/home/kissa-mirror1.jpg",
    slides: [
      { url: '/projects/home/kissa-mirror1.jpg', caption: 'Slide 1' },
      { url: '/projects/home/kissa-mirror2.jpg', caption: 'Slide 2' },
      { url: '/projects/home/kissa-mirror3.jpg', caption: 'Slide 3' }
    ],
    
    price: 40.00,
    currency: "€",
    status: "available", 
    
    tags: ["Bellflower Mirror", "Kissankello", "Boho Wall Art", "Crochet Flowers", "Nordic Decor"]
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
  {
    id: "coffee_bookmark",
    category: "accessories",
    image: "/projects/acc/bookmark1.jpg",
    slides: [
      { url: '/projects/acc/bookmark1.jpg', caption: 'Slide 1' },
      { url: '/projects/acc/bookmark2.jpg', caption: 'Slide 2' },
      { url: '/projects/acc/bookmark3.jpg', caption: 'Slide 3' },
      
    ],
    price: 10.00  ,
    currency:  "€  ",
    priceDetail: "1 kpl",
    status: "available", 
    
    tags: [
      "Crochet Bookmark",
      "Amigurumi",
      "Handmade",
      "Coffee Lovers",
      "Book Lover Gift"
    ],
  },
  {
    id: "kawaii_cup_keychains",
    category: "accessories",
    image: "/projects/acc/keychain1.jpg",
    slides: [
      { url: '/projects/acc/keychain1.jpg', caption: 'Slide 1' },
      { url: '/projects/acc/keychain2.jpg', caption: 'Slide 2' }
     
      
    ],
    price: 15.00  ,
    currency:  "€  ",
    priceDetail: "1 kpl",
    status: "available", 
    
    tags: ["Kawaii Keychain", "Emoji Accessory", "Handmade Gift", "Cute Crochet", "Bag Charm"]
  },
  
];