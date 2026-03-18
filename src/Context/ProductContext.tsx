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
      "The Nike x Off-White collaboration is considered one of the most influential partnerships in modern sneaker culture, perfectly blending athletic performance with conceptual high-fashion design.\n\nThis collaboration redefines traditional footwear, transforming classic Nike silhouettes into highly expressive design statements.\n\nOff-White's signature deconstructivist approach incorporates exposed stitching, industrial lettering, drawstring embellishments, and unconventional material layering, creating sneakers that are both experimental and meticulously crafted.\n\nThis collaboration goes beyond mere aesthetics, preserving Nike's functional DNA to ensure that each design is both comfortable and practical for everyday wear.",
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
      "The Nike Air Force Premium is an elevated interpretation of the iconic Air Force 1, designed to retain its legendary silhouette while introducing refined materials and enhanced detailing. Originally launched as a performance basketball shoe, the Air Force 1 has evolved into a timeless staple in streetwear and lifestyle fashion.\n\nThis premium version emphasizes craftsmanship, featuring smoother leather, subtle texture contrasts, and carefully selected finishes that give the shoe a cleaner and more sophisticated appearance.\n\nComfort remains central to the design, with signature Air cushioning and a durable rubber outsole providing reliable support for all-day wear. The Premium edition is built for versatility, making it suitable for casual outfits, urban styling, and everyday use. \n",
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
      "The second pair of Nike Air Force Premium continues the legacy of the Air Force line by reinforcing consistency, durability, and timeless design.\n\nWhile maintaining the same iconic structure, this edition focuses on long-term wearability and understated sophistication. The design philosophy centers on balance—enhancing quality and comfort without straying from the shoe’s recognizable identity.\n\nHigh-quality construction ensures a stable fit and dependable performance during daily use. The clean aesthetic allows the shoe to blend seamlessly into various wardrobes, from minimal streetwear to contemporary casual fashion. Rather than chasing trends, this edition emphasizes longevity and reliability, making it an ideal choice for those who appreciate classic design with a premium touch. As part of the broader Air Force heritage, it reflects the enduring appeal of simplicity, functionality, and cultural relevance.\n",
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
      "Adidas shoes are globally recognized for combining innovation, comfort, and timeless style across both performance and lifestyle categories. With strong roots in athletic heritage, Adidas designs footwear that supports movement while adapting to modern fashion needs.\n\n Advanced cushioning systems, lightweight materials, and ergonomic construction ensure comfort and responsiveness across various activities.\n\n In addition to performance, Adidas places increasing emphasis on sustainability, incorporating recycled and eco-conscious materials into many of its designs. This commitment reflects the brand’s forward-thinking approach and responsibility toward environmental impact. \n\n\n",
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
