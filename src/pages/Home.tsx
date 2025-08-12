// src/pages/Home.tsx
import React from "react";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col md:flex-row gap-6 p-4">
      {/* Hero - 70% */}
      <div className="md:w-[70%] w-full">
        <Hero />
      </div>

      {/* Sidebar - 30% */}
      <div className="md:w-[30%] w-full">
        <Sidebar />
      </div>
    </main>
  );
};

export default Home;
