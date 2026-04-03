import { createContext, useContext, useState, type ReactNode } from "react";
// 1. 使用 import type 匯入型別，符合你的 tsconfig 規範
import type { allCartItem } from "./CartContext";

// --- 1. 定義規格 ---
export interface Order {
  id: string;
  items: allCartItem[];
  total: number;
  status: "待出貨" | "已出貨";
  createdAt: string;
}

// --- 2. 定義這個 Context 要做什麼事情 ---
interface AdminContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateStatus: (id: string) => void; // 之後「已出貨」功能會用到
}

// --- 3. 創造通道給 Context 使用 ---
const AdminContext = createContext<AdminContextType | null>(null);

// --- 4. 建立 Context 要做的事情 ---
export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem("admin_orders");
    return saved ? JSON.parse(saved) : [];
  });

  const addOrder = (newOrder: Order) => {
    const updated = [...orders, newOrder];
    setOrders(updated);
    localStorage.setItem("admin_orders", JSON.stringify(updated));
  };

  const updateStatus = (id: string) => {
    const updated = orders.map((order) =>
      order.id === id ? { ...order, status: "已出貨" as const } : order,
    );
    setOrders(updated);
    localStorage.setItem("admin_orders", JSON.stringify(updated));
  };

  //  --- 5. 將 Context 的功能匯出去使用 ---
  return (
    <AdminContext.Provider value={{ orders, addOrder, updateStatus }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAdmin must be used inside AdminProvider");
  return context;
};
