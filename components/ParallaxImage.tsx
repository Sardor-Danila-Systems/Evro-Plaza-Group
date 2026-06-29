'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
  strength?: number;
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  containerClassName = '',
  imageClassName = '',
  strength = 60,
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${containerClassName}`}>
      <motion.div style={{ y }} className="absolute -inset-x-0 -top-[12%] -bottom-[12%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover ${imageClassName}`}
        />
      </motion.div>
    </div>
  );
}
