import { createContext, useContext, useState } from "react";

// 定義型別： Cart 會需要用到的東西
interface allCartItem {
  id: number;
  title: string;
  price: number;
  img: string;
  quantity: number;
}

// 定義型別：給出去 children 的東西
interface CartContextType {
  cart: allCartItem[]; // cart 回傳的會是 [{},{},{}] 這些 {} 都會符合 allCartItem 的資料型態！
  addToCart: (product: allCartItem) => void;
  // product 這個 fn 不回傳任何值(void)，product 要符合 allCartItem 行別
}

// !根據 CartContextType 或是 null 建立通道,一開始的資料型態是 null，所以需要加上 null
const CartContext = createContext<CartContextType | null>(null);

// children: React.ReactNode 代表「所有可以被 React render 的東西」
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // cart 會裝很多個符合 allCartItem 資料型態的 array，所以需要加上 []
  const [cart, setCart] = useState<allCartItem[]>([]);
  // 建立一個回傳值 product 內容中要符合 allCartItem
  const addToCart = (product: allCartItem) => {
    setCart((prev) => [...prev, product]);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};
