"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  const router = useRouter();

  return (
    <div>
      <Link href="/" className="flex justify-center items-center">
        <Image
          src={"/logo.png"}
          alt="Travel"
          width={210}
          height={50}
          className="w-36 lg:w-52 h-auto"
        />
      </Link>
      <div>{children}</div>
    </div>
  );
}

export default AuthLayout;
