"use client";

import { useState , useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import bookCover from "@/assets/book_cover.jpg";


const images = [
  bookCover,bookCover,bookCover
];
export default function ImageSlider() {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="relative flex items-center justify-center w-[512px] h-[400px]">
        {images.map((src, i) => {
          let position = "hidden"; // Hide unused images
          let size = "w-1/3 h-[250px] blur-sm"; // Left & Right are smaller and blurry
          if (i === index) {
            position = "z-10"; // Bring center image to front
            size = "w-1/2 h-[350px] blur-0"; // Center image is bigger & clear
          } else if ((i + 1) % images.length === index) {
            position = "right-5"; // Left image position
          } else if ((i - 1 + images.length) % images.length === index) {
            position = "left-5"; // Right image position
          }
          
        if ((i - 1 + images.length) % images.length !== index ){
          return (
           
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: i === index ? 1 : 0.8 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.1 }}
              className={`absolute ${position} transition-all ${size}`}
            >
              <Image
                src={src}
                alt={`Slide ${i}`}
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          );
        }else{
            return (
                <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale:  1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 0.1 }}
                className={`absolute ${position} transition-all ${size}`}
                >
                <Image
                    src={src}
                    alt={`Slide ${i}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                />
                </motion.div>
            )
        }            
        })}
        {/* Dots Navigation */}
        <div className="absolute bottom-2 flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                index === i ? "bg-blue-500 scale-100" : "bg-gray-300"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    );
  }