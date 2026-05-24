"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState("organize"); // organize, hired, boards

  return (
    <section className="border-t bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Responsive Tabs Grid/Flex */}
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-8 w-full max-w-md sm:max-w-none mx-auto">
            <Button
              onClick={() => setActiveTab("organize")}
            //   variant={activeTab === "organize" ? "default" : "secondary"}
              className={`w-full sm:w-auto rounded-lg px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === "organize"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Organize Applications
            </Button>
            <Button
              onClick={() => setActiveTab("hired")}
            //   variant={activeTab === "hired" ? "default" : "secondary"}
              className={`w-full sm:w-auto rounded-lg px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === "hired"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Get Hired
            </Button>
            <Button
              onClick={() => setActiveTab("boards")}
            //   variant={activeTab === "boards" ? "default" : "secondary"}
              className={`w-full sm:w-auto rounded-lg px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === "boards"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Manage Boards
            </Button>
          </div>

          {/* Responsive Image Wrapper */}
           <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
            {activeTab === "organize" && (
              <Image
                src="/hero-images/hero1.png"
                alt="Organize Applications"
                width={1200}
                height={800}
              />
            )}

            {activeTab === "hired" && (
              <Image
                src="/hero-images/hero2.png"
                alt="Organize Applications"
                width={1200}
                height={800}
              />
            )}

            {activeTab === "boards" && (
              <Image
                src="/hero-images/hero3.png"
                alt="Organize Applications"
                width={1200}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}