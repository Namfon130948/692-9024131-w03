"use client";

import React, { useState } from "react";

export interface PlaceProps {
  id: number;
  title: string;
  province: string;
  region: string;
  description: string;
  fullStory: string;
  imageUrl: string;
  tag: string;
  bestTime: string;
  highlights: string[];
}

interface PlaceCardProps {
  place: PlaceProps;
  onSelect: (place: PlaceProps) => void;
}

export default function PlaceCard({ place, onSelect }: PlaceCardProps) {
  const [imgSrc, setImgSrc] = useState(place.imageUrl);

  return (
    <article
      onClick={() => onSelect(place)}
      className="group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200/70 shadow-[0_4px_20px_rgba(28,25,23,0.04)] hover:shadow-[0_20px_40px_rgba(28,25,23,0.1)] hover:-translate-y-1.5 transition-all duration-500"
    >
      {/* รูปภาพสถานที่ */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-100">
        <img
          src={imgSrc}
          alt={place.title}
          onError={() =>
            setImgSrc(
              "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80"
            )
          }
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60" />

        {/* ป้ายหมวดหมู่ */}
        <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-medium bg-white/95 text-stone-800 backdrop-blur-md shadow-sm">
          {place.tag}
        </span>

        {/* จังหวัดมุมซ้ายล่างบนรูป */}
        <span className="absolute bottom-3.5 left-4 text-xs font-medium text-white drop-shadow">
          📍 {place.province}
        </span>
      </div>

      {/* ส่วนเนื้อหา */}
      <div className="flex flex-col flex-1 p-6">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 mb-1.5">
          {place.region}
        </div>

        <h2 className="text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors mb-2.5 leading-snug">
          {place.title}
        </h2>

        <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-6 flex-1">
          {place.description}
        </p>

        {/* ส่วนท้ายการ์ด */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
          <span className="text-stone-400">
            ฤดูแนะนำ: <strong className="font-medium text-stone-700">{place.bestTime}</strong>
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-stone-900 group-hover:text-emerald-700 transition-colors">
            อ่านเพิ่มเติม
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </div>
    </article>
  );
}