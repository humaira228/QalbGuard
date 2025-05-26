import React from "react";
//import { cn } from "@/lib/utils"; // Adjust if you don't have this util

type SlideProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Slide({ children, className, id }: SlideProps) {
  return (
    <section
      id={id}
      className={classname(
        "min-h-screen flex flex-col items-center justify-center px-6 py-12 text-white",
        className
      )}
    >
      {children}
    </section>
  );
}
