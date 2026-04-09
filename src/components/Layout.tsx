import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/courses/MobileCTA";
import CurrencyToggle from "@/components/CurrencyToggle";

const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <MobileCTA />
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <CurrencyToggle />
    </div>
  </div>
);

export default Layout;
