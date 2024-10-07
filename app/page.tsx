"use client";
import "@/styles/globals.css";
import Header from "../components/Header";
import Main from "@/components/main/Main";
import About from "@/components/main/About";
import Work from "@/components/main/Work";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between gap-4">
      <Header />
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Work />
      </main>
    </div>
  );
}
