"use client";

import { Box } from "@mui/material";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

export const TechCards = ({
  items,
}: {
  items: {
    name: string;
    description: string;
    image: StaticImport;
    color: string;
    backgroundColor: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "end",
        flexWrap: "wrap",
      }}
    >
      {items.map((item, idx) => (
        <div
          className='group relative'
          key={item.name}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode='popLayout'>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className='absolute bottom-24 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl w-[200px] '
              >
                <div className='absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent' />
                <div className='absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
                <div className='relative z-30 text-base font-bold text-white'>
                  {item.name}
                </div>
                <div className='text-xs text-white text-wrap text-center'>
                  {item.description}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Box
            sx={{
              border: `2px solid ${item.color}`,
              height: 70,
              width: 70,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              cursor: "pointer",
              transition: "all 0.3s ease",
              backgroundColor: item.backgroundColor,
              "&:hover": {
                transform: "scale(1.1) translateY(-10px)",
                zIndex: 100,
              },
            }}
          >
            <Image
              onMouseMove={handleMouseMove}
              height={35}
              width={35}
              src={item.image}
              alt={item.name}
            />
          </Box>
        </div>
      ))}
    </Box>
  );
};
