'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import { assets } from "@/assets/assets";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Header />
    <About/>
    </>
  );
}
