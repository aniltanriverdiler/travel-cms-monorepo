import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import React from "react";

interface RouteLayoutProps {
  children: React.ReactNode;
}

function RouteLayout({ children }: RouteLayoutProps) {
  return (
    <div>
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default RouteLayout;
