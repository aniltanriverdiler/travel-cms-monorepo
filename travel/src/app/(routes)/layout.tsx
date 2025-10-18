"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import React from "react";
import ClientWrapper from "@/components/providers/ClientWrapper";

interface RouteLayoutProps {
  children: React.ReactNode;
}

function RouteLayout({ children }: RouteLayoutProps) {
  return (
    <ClientWrapper>
      <div>
        <Header />
        <div className="min-h-screen">{children}</div>
        <div className="min-h-64"></div>
        <Footer />
      </div>
    </ClientWrapper>
  );
}

export default RouteLayout;
