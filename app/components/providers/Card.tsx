"use client";

import Image from "next/image";
import TiltCard from "../providers/TiltCard";

type CardProps = {
  image: string;
  title: string;
  text: string;
  className?: string;
};

export default function Card({
  image,
  title,
  text,
  className = "",
}: CardProps) {
  return (
    <TiltCard
      className={`landing-surface h-full min-h-[25px] rounded-[28px] p-6 md:p-7 ${className}`}
    >
      <div className="flex h-full flex-col items-center text-center">
        <div className="relative flex h-14 w-14 items-center justify-center">
          <div className="benefit-icon-float relative h-14 w-14">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <h3 className="type-card-title mt-6 font-bold text-white">
          {title}
        </h3>

        <p className="type-body-lg mt-4 text-white/72">
          {text}
        </p>
      </div>
    </TiltCard>
  );
}