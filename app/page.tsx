"use client";
import "@/styles/globals.css";
import Header from "../components/Header";
import { ThemeChanger } from "@/components/ThemeChanger";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="lg:flex lg:flex-row-reverse lg:justify-between gap-4">
      <Header />
      <Main />
    </div>
  );
}
