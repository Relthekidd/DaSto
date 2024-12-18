import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '4',
    name: "Grape Gushers",
    type: "Flower",
    weightOptions: [
      { weight: '3.5g', price: 15.00 },
      { weight: '7g', price: 30.00 },
      { weight: '14g', price: 45.00 },
      { weight: '28g', price: 80.00 }
    ],
    description: "A sweet and fruity strain with relaxing effects",
    effects: ["Relaxation", "Euphoria", "Mood Boost"],
    flavors: ["Grape", "Berry", "Sweet"],
    category: "flower", // <-- Missing comma added here
    image: "https://images.leafly.com/flower-images/defaults/purple/strain-23.png?auto=compress%2Cformat&w=350&dpr=2"
  },
  {
    id: '5',
    name: "Dosi Dos",
    type: "Flower",
    weightOptions: [
      { weight: '3.5g', price: 20.00 },
      { weight: '7g', price: 40.00 },
      { weight: '14g', price: 60.00 },
      { weight: '28g', price: 90.00 }
    ],
    description: "A potent hybrid with earthy and sweet flavor",
    effects: ["Relaxing", "Euphoric", "Stress Relief"],
    flavors: ["Earthy", "Sweet", "Citrus"],
    category: "flower",
    image: "https://leafly-public.imgix.net/strains/reviews/photos/do-si-dos__primary_d9be.jpg"
  },
  {
    id: '6',
    name: "Burnt Toast",
    type: "Flower",
    weightOptions: [
      { weight: '3.5g', price: 25.00 },
      { weight: '7g', price: 45.00 },
      { weight: '14g', price: 65.00 },
      { weight: '28g', price: 90.00 }
    ],
    description: "A unique, savory strain with a relaxing effect",
    effects: ["Relaxation", "Calm", "Stress Relief"],
    flavors: ["Savory", "Herbal", "Nutty"],
    category: "flower",
    image: "https://images.leafly.com/flower-images/defaults/generic/strain-9.png?auto=compress%2Cformat&w=350&dpr=2"
  },
  {
    id: '7',
    name: "Zoap",
    type: "Flower",
    weightOptions: [
      { weight: '3.5g', price: 25.00 },
      { weight: '7g', price: 45.00 },
      { weight: '14g', price: 70.00 },
      { weight: '28g', price: 95.00 }
    ],
    description: "A potent hybrid strain with an uplifting effect",
    effects: ["Uplifting", "Euphoric", "Creative"],
    flavors: ["Citrus", "Sweet", "Spicy"],
    category: "flower",
    image: "https://leafly-public.imgix.net/strains/photos/QEJXLkqjSWufdzJEi0PR_Deo%20Farms%20Zoap%20Photo%20by%20David%20Downs%20Leafly%202%20smaller.jpg?auto=compress%2Cformat&w=350&dpr=2"
  },
  {
    id: '8',
    name: "Candy OG",
    type: "Flower",
    weightOptions: [
      { weight: '3.5g', price: 25.00 },
      { weight: '7g', price: 45.00 },
      { weight: '14g', price: 70.00 },
      { weight: '28g', price: 100.00 }
    ],
    description: "A sweet and calming strain with relaxing effects",
    effects: ["Relaxing", "Calming", "Stress Relief"],
    flavors: ["Sweet", "Candy", "Citrus"],
    category: "flower",
    image: "https://images.leafly.com/flower-images/defaults/generic/strain-9.png?auto=compress%2Cformat&w=350&dpr=2"
  },
  {
    id: '9',
    name: "Double Queen",
    type: "Flower",
    weightOptions: [
      { weight: '3.5g', price: 25.00 },
      { weight: '7g', price: 50.00 },
      { weight: '14g', price: 75.00 },
      { weight: '28g', price: 110.00 }
    ],
    description: "A balanced hybrid with relaxing yet euphoric effects",
    effects: ["Euphoria", "Relaxation", "Mood Boost"],
    flavors: ["Earthy", "Sweet", "Spicy"],
    category: "flower",
    image: "https://images.leafly.com/flower-images/defaults/frosty/strain-6.png?auto=compress%2Cformat&w=350&dpr=2"
  },
  {
    id: '10',
    name: "Wedding Pie",
    type: "Flower",
    weightOptions: [
      { weight: '3.5g', price: 30.00 },
      { weight: '7g', price: 55.00 },
      { weight: '14g', price: 85.00 },
      { weight: '28g', price: 115.00 }
    ],
    description: "A well-balanced hybrid with uplifting and relaxing effects",
    effects: ["Relaxation", "Euphoria", "Mood Boost", "Stress Relief"],
    flavors: ["Berry", "Citrus", "Sweet"],
    category: "flower",
    image: "https://images.leafly.com/flower-images/defaults/generic/strain-32.png?auto=compress%2Cformat&w=350&dpr=2"
  },
  {
    id: '11',
    name: "Fruity Pebbles",
    type: "Flower",
    weightOptions: [
      { weight: '3.5g', price: 35.00 },
      { weight: '7g', price: 60.00 },
      { weight: '14g', price: 85.00 },
      { weight: '28g', price: 125.00 }
    ],
    description: "A sweet and fruity strain with a potent effect",
    effects: ["Euphoria", "Relaxing", "Stress Relief"],
    flavors: ["Berry", "Citrus", "Sweet"],
    category: "flower",
    image: "https://images.leafly.com/flower-images/defaults/generic/strain-28.png?auto=compress%2Cformat&w=350&dpr=2"
  },
  {
    id: '12',
    name: "Exotic Shake",
    type: "Flower",
    weightOptions: [
      { weight: '3.5g', price: 15.00 },
      { weight: '7g', price: 30.00 },
      { weight: '14g', price: 50.00 },
      { weight: '28g', price: 85.00 }
    ],
    description: "A tropical strain with fruity and sweet flavors",
    effects: ["Euphoria", "Relaxation", "Mood Boost"],
    flavors: ["Tropical", "Berry", "Sweet"],
    category: "flower",
    image: "https://i0.wp.com/exoticorganicsdc.com/wp-content/uploads/2021/09/shake-edited.jpeg?resize=574%2C431&ssl=1"
  }
];
