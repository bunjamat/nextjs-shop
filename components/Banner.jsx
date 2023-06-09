"use client";

import React, { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

import Image from "next/image";
const banner = [
  {
    alt: "banner-01",
    src: "https://drive.google.com/uc?id=1_ArKDdMKP0isAxoyw06W00TcCGvpZbJR",
  },
  {
    alt: "banner-02",
    src: "https://drive.google.com/uc?id=1AB4QYyDz2W_p7xsGE0OskfDuECFhbW-b",
  },
  {
    alt: "banner-03",
    src: "https://drive.google.com/uc?id=1mt0yEaSKrPl--hW2B-OwHuTG_2elRJAN",
  },
];
const Banner = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    register();
    if (swiperElRef.current) {
      // listen for Swiper events using addEventListener
      // swiperElRef.current.addEventListener("progress", (e) => {
      //   const [swiper, progress] = e.detail;
      //   console.log(progress);
      // });
      // swiperElRef.current.addEventListener("slidechange", (e) => {
      //   console.log("slide changed");
      // });
    }
    // console.log("🚀 ~ file: Banner.jsx:41 ~ Banner ~ swiperElRef:", swiperElRef);
  }, []);

  return (
    <div className="w-full mt-5">
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="true"
        pagination="true"
      >
        {banner.map((item, idx) => {
          return (
            <swiper-slide key={idx}>
              <div id={`slide${idx}`} className="carousel-item relative w-full">
                <Image
                  width={828}
                  height={315}
                  priority
                  alt={item.alt}
                  src={`${item.src}`}
                  className="w-full"
                />
              </div>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </div>
  );
};

export default Banner;
