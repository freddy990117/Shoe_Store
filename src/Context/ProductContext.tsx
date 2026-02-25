import { createContext, useContext } from "react";
// ! product list interface
interface allProduct {
  id: number;
  shoes: string;
  catalog: string;
  price: number;
  imageURL: string;
  title: string;
  description: string;
  keyPoint: string[];
}
// ! proudct Array
const productList: allProduct[] = [
  // Off-White
  {
    id: 0,
    shoes: "Off-White",
    catalog: `Out Of Office "Ooo" sneakers`,
    price: 1200,
    imageURL: "/images/picture-0.png",
    title: "Nike Off-white",
    description:
      "Nike x Off-White represents one of the most influential collaborations in modern sneaker culture, seamlessly merging athletic performance with conceptual high-fashion design. This partnership redefines traditional footwear by transforming classic Nike silhouettes into expressive design statements. Off-White’s signature deconstructed approach introduces exposed stitching, industrial-inspired text, zip-tie accents, and unconventional material layering, creating sneakers that feel experimental yet intentional. Rather than focusing solely on aesthetics, the collaboration preserves Nike’s functional DNA, ensuring that each design remains wearable and comfortable for everyday use.\nBeyond design, Nike x Off-White carries deep cultural significance. It reflects a shift in how sneakers are perceived—not merely as sports equipment, but as a medium for storytelling, creativity, and social commentary. Each release resonates strongly with sneaker collectors, designers, and fashion-forward consumers who value originality and cultural relevance. The collaboration consistently challenges norms while honoring Nike’s heritage, striking a rare balance between innovation and tradition. As a result, Nike x Off-White has become a symbol of modern street culture, artistic freedom, and the evolving relationship between fashion and performance.\n",
    keyPoint: [
      "Deconstructed, high-fashion reinterpretation of classic Nike designs",
      "Strong cultural impact within sneaker and streetwear communities",
      "Balance between artistic expression and everyday wearability",
    ],
  },
  // Nike
  {
    id: 1,
    shoes: "Nike",
    catalog: "Nike Air Force Premium",
    price: 200,
    imageURL: "/images/picture-1.png",
    title: "Air Force Premium",
    description:
      "The Nike Air Force Premium is an elevated interpretation of the iconic Air Force 1, designed to retain its legendary silhouette while introducing refined materials and enhanced detailing. Originally launched as a performance basketball shoe, the Air Force 1 has evolved into a timeless staple in streetwear and lifestyle fashion. This premium version emphasizes craftsmanship, featuring smoother leather, subtle texture contrasts, and carefully selected finishes that give the shoe a cleaner and more sophisticated appearance.\nComfort remains central to the design, with signature Air cushioning and a durable rubber outsole providing reliable support for all-day wear. The Premium edition is built for versatility, making it suitable for casual outfits, urban styling, and everyday use. Its understated elegance allows it to adapt effortlessly across different fashion preferences, appealing to those who value both comfort and subtle luxury. By enhancing the classic design without overcomplicating it, the Nike Air Force Premium delivers a modern update to a true sneaker icon.\n",
    keyPoint: [
      "Premium materials with refined, polished finishes",
      "Classic Air Force silhouette with modern detailing",
      "Designed for everyday comfort and versatile styling",
    ],
  },
  // Nike
  {
    id: 2,
    shoes: "Nike",
    catalog: "Nike Air Force Premium",
    price: 98.23,
    imageURL: "/images/picture-2.png",
    title: "Air Force Premium",
    description:
      "The second pair of Nike Air Force Premium continues the legacy of the Air Force line by reinforcing consistency, durability, and timeless design. While maintaining the same iconic structure, this edition focuses on long-term wearability and understated sophistication. The design philosophy centers on balance—enhancing quality and comfort without straying from the shoe’s recognizable identity.\nHigh-quality construction ensures a stable fit and dependable performance during daily use. The clean aesthetic allows the shoe to blend seamlessly into various wardrobes, from minimal streetwear to contemporary casual fashion. Rather than chasing trends, this edition emphasizes longevity and reliability, making it an ideal choice for those who appreciate classic design with a premium touch. As part of the broader Air Force heritage, it reflects the enduring appeal of simplicity, functionality, and cultural relevance.\n",
    keyPoint: [
      "Durable construction for long-term daily wear",
      "Timeless design that complements diverse styles",
      "Emphasis on simplicity and functional elegance",
    ],
  },
  // adidas
  {
    id: 3,
    shoes: "adidas",
    catalog: "DAILY 3.0 SHOES",
    price: 98.99,
    imageURL: "/images/picture-3.png",
    title: "Adidas Shoes",
    description:
      "Adidas shoes are globally recognized for combining innovation, comfort, and timeless style across both performance and lifestyle categories. With strong roots in athletic heritage, Adidas designs footwear that supports movement while adapting to modern fashion needs. Advanced cushioning systems, lightweight materials, and ergonomic construction ensure comfort and responsiveness across various activities.\n In addition to performance, Adidas places increasing emphasis on sustainability, incorporating recycled and eco-conscious materials into many of its designs. This commitment reflects the brand’s forward-thinking approach and responsibility toward environmental impact. Beyond function, Adidas shoes maintain a strong presence in street culture, offering versatile designs that transition easily between sports, casual wear, and contemporary fashion. This fusion of technology, style, and sustainability has established Adidas as a trusted brand for athletes and fashion-conscious consumers worldwide.\n",
    keyPoint: [
      "Innovative cushioning and lightweight construction",
      "Strong focus on sustainability and eco-friendly materials",
      "Versatile designs blending sport and lifestyle fashion",
    ],
  },
];

// 1.create Context
const ProductContext = createContext<allProduct[] | null>(null);

// 2.Provider (use on Router)
export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    // Create a data room
    <ProductContext.Provider value={productList}>
      {children}
    </ProductContext.Provider>
  );
};

// 3.Customer hook
export const useProducts = () => {
  // use data room's data
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used inside ProductProvider");
  }
  return context;
};
