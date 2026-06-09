import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import CartSidebar from "../cart/CartSidebar";
import ChatbotWidget from "../chatbot/ChatbotWidget";
import "./PageBackground.css";

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="app-layout">
      <div className="page-bg">
        <div className="page-bg-orb page-bg-orb-1" />
        <div className="page-bg-orb page-bg-orb-2" />
        <div className="page-bg-orb page-bg-orb-3" />
        <div className="page-bg-aurora" />
        <div className="page-bg-grid" />
      </div>
      <Header />
      <CartSidebar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={isHome ? "main-home" : "main-page"}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
