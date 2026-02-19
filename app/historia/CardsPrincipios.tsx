"use client";

import {
  motion,
  useTransform,
  useScroll,
  MotionValue,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Cards = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const targetRef2 = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  const [containerHeight, setContainerHeight] = useState(0);

  const [amountToScroll, setAmountToScroll] = useState("0px");

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

const x = useTransform(
  scrollYProgress,
  [0, 1],
  ["0px", amountToScroll],
);

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress2, "change", (latest) => {
    console.log(latest);
  });

  /* =======================
     FIXED EFFECT
  ======================= */
 useEffect(() => {
  if (!content.current) return;

  const calculatedOffsetX = window.innerWidth / 2;

  const contentWidth =
    content.current.getBoundingClientRect().width;

  const calculatedAmountToScroll = `${-(
    contentWidth +
    calculatedOffsetX -
    window.innerWidth +
    1600
  )}px`;

  setAmountToScroll(calculatedAmountToScroll);
  setContainerHeight(window.innerHeight);
}, []);

  const images = [
    "/img/cards/Cortesy.png",
    "/img/cards/INtgr.png",
    "/img/cards/persv.png",
    "/img/cards/autocont.png",
    "/img/cards/espirt.png",
  ];

  return (
    <>
      <div
        ref={targetRef}
        className="h-[340dvh] relative md:block hidden pt-[240px]"
      >
        <div className="flex flex-col px-6 md:px-40 pb-40 pt-0 md:pt-0">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-start bg-gradient-to-r from-[#ec0202] via-[#e4c8c8] to-white bg-clip-text text-transparent pb-2">
              Nuestros Principios
            </h1>
            <p className="text-lg text-gray-200 font-semibold text-start">
              (Taekwon-Do Jungshin)
            </p>
          </div>
        </div>

        <div
          ref={targetRef2}
          className="sticky top-1/4 flex h-auto pt-10 bg-gray-1000 items-center overflow-y-visible overflow-x-clip"
        >
          <motion.div
            style={{ x }}
            transition={{ duration: 1 }}
            className="flex flex-row ml-[330px] space-x-14"
            ref={content}
          >
            {images.map((src, index) => (
              <ImageCard
                key={index}
                src={src}
                index={index}
                scrollYProgress={scrollYProgress}
                containerHeight={containerHeight}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="md:flex hidden items-center justify-center md:-mt-40 pt-10 w-full h-full">
        <Image
          src="/img/1.png"
          alt="Spa individual"
          width={1100}
          height={200}
          className="object-cover rounded-2xl mb-20"
        />
      </div>
    </>
  );
};

function ImageCard({
  src,
  scrollYProgress,
  index,
  containerHeight,
}: {
  src: string;
  scrollYProgress: MotionValue<number>;
  index: number;
  containerHeight: number;
}) {
  const [transitionTop, setTransitionTop] = useState("140px");

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${(index + 1) * 300}px`, transitionTop],
  );

  const rotateX = useTransform(scrollYProgress, [0, 1], ["-1.5deg", "0deg"]);
  const rotateY = useTransform(scrollYProgress, [0, 1], ["1.5deg", "0deg"]);
  const z = useTransform(scrollYProgress, [0, 1], ["-300px", "300px"]);

  const imageRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`${200 + 100 * index}px`, "700px"],
  );

  const opacity = useTransform(y, () => {
    if (!imageRef.current || !imageContainerRef.current) return 1;

    const imageY = imageRef.current.getBoundingClientRect().y;
    const containerY =
      imageContainerRef.current.getBoundingClientRect().y;

    const distance = Math.abs(imageY - containerY);

    const maxDistance = 500;
    const minOpacity = 0.3;

    return Math.max(minOpacity, 1 - distance / maxDistance);
  });

  /* =======================
     FIXED EFFECT
  ======================= */
  useEffect(() => {
    if (!imageRef.current) return;

    const height =
      imageRef.current.getBoundingClientRect().height;

    const calculatedTransitionTop = `-${
      containerHeight +
      containerHeight / 4 -
      index * (height / 3) +
      400
    }px`;

    setTransitionTop(calculatedTransitionTop);
  }, [containerHeight, index]);

  const scale = useTransform(y, () => {
    if (!imageRef.current || !imageContainerRef.current) return 1;

    const imageY = imageRef.current.getBoundingClientRect().y;
    const containerY =
      imageContainerRef.current.getBoundingClientRect().y;

    const distance = imageY - containerY;

    if (distance <= 0) return 1;

    const maxDistance = 500;
    const minScale = 0.6;

    return Math.min(
      1,
      1 -
        (Math.min(distance, maxDistance) / maxDistance) *
          (1 - minScale),
    );
  });

  return (
    <div ref={imageContainerRef}>
      <motion.div
        className="w-[500px]"
        ref={imageRef}
        style={{
          y,
          rotateX,
          rotateY,
          opacity,
          perspective: "300px",
          z,
          scale,
          x,
        }}
      >
        <Image src={src} alt="card" width={450} height={450} />
      </motion.div>
    </div>
  );
}

export default Cards;
