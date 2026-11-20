"use client";

import React, { useState } from "react";
import PlaceCard, { PlaceProps } from "@/components/PlaceCard";

const places: PlaceProps[] = [
  {
    id: 1,
    title: "วัดพระศรีรัตนศาสดาราม (วัดพระแก้ว)",
    province: "กรุงเทพมหานคร",
    region: "ภาคกลาง",
    tag: "ศิลปวัฒนธรรม",
    bestTime: "ตลอดทั้งปี",
    description:
      "ศูนย์รวมจิตใจและสถาปัตยกรรมไทยอันวิจิตรตระการตาภายในพระบรมมหาราชวัง โดดเด่นด้วยพระอุโบสถและพระพุทธมหามณีรัตนปฏิมากร",
    fullStory:
      "วัดพระศรีรัตนศาสดาราม หรือที่เรียกกันทั่วไปว่า วัดพระแก้ว เป็นวัดที่พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราชโปรดเกล้าฯ ให้สร้างขึ้นพร้อมกับการสถาปนากรุงรัตนโกสินทร์ในปี พ.ศ. 2325 ภายในประดิษฐานพระพุทธมหามณีรัตนปฏิมากร (พระแก้วมรกต) และรายล้อมด้วยจิตรกรรมฝาผนังเรื่องรามเกียรติ์ที่ยาวที่สุดในโลก",
    highlights: ["พระอุโบสถและพระแก้วมรกต", "จิตรกรรมฝาผนังรามเกียรติ์", "ปราสาทพระเทพบิดร"],
    imageUrl:
      "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "อุทยานแห่งชาติดอยอินทนนท์",
    province: "เชียงใหม่",
    region: "ภาคเหนือ",
    tag: "ภูเขา & ธรรมชาติ",
    bestTime: "พ.ย. – ก.พ.",
    description:
      "สัมผัสอากาศหนาวเย็นบนยอดเขาที่สูงที่สุดในประเทศไทย เดินชมเส้นทางศึกษาธรรมชาติกิ่วแม่ปาน และสักการะพระมหาธาตุนภเมทนีดล",
    fullStory:
      "ดอยอินทนนท์มีความสูง 2,565 เมตรจากระดับน้ำทะเล ทำให้มีอากาศหนาวเย็นตลอดทั้งปี โดดเด่นด้วยป่าเมฆดึกดำบรรพ์ จุดชมทะเลหมอกยามเช้าที่กิ่วแม่ปาน และน้ำตกขนาดใหญ่หลายแห่ง เช่น น้ำตกวชิรธาร และน้ำตกแม่ยะ",
    highlights: ["เส้นทางศึกษาธรรมชาติกิ่วแม่ปาน", "พระมหาธาตุนภเมทนีดล-นภพลภูมิสิริ", "จุดสูงสุดแดนสยาม"],
    imageUrl:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "อ่าวมาหยา หมู่เกาะพีพี",
    province: "กระบี่",
    region: "ภาคใต้",
    tag: "ทะเล & หมู่เกาะ",
    bestTime: "พ.ย. – เม.ย.",
    description:
      "เวิ้งอ่าวน้ำทะเลสีเขียวมรกตโอบล้อมด้วยหน้าผาหินปูนสูงชันและหาดทรายขาวละเอียด หนึ่งในจุดหมายปลายทางทางทะเลที่งดงามระดับโลก",
    fullStory:
      "อ่าวมาหยาตั้งอยู่บนเกาะพีพีเล จังหวัดกระบี่ มีลักษณะเป็นเวิ้งอ่าวขนาดเล็กที่โอบล้อมด้วยภูเขาหินปูนสูงตระหง่าน น้ำทะเลใสจนมองเห็นพื้นทรายและฝูงปลาฉลามครีบดำที่เข้ามาอาศัยอยู่ในระบบนิเวศที่ได้รับการฟื้นฟูอย่างสมบูรณ์",
    highlights: ["หาดทรายขาวละเอียดดุจแป้ง", "น้ำทะเลสีเขียวมรกต", "จุดชมวิวหน้าผาหินปูน"],
    imageUrl:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "สามพันโบก",
    province: "อุบลราชธานี",
    region: "ภาคอีสาน",
    tag: "สิ่งมหัศจรรย์ธรรมชาติ",
    bestTime: "ม.ค. – เม.ย.",
    description:
      "ประติมากรรมหินธรรมชาติกลางลำน้ำโขงที่ถูกกระแสน้ำกัดเซาะจนเกิดเป็นแอ่งหินน้อยใหญ่กว่า 3,000 แอ่ง งดงามแปลกตาในช่วงฤดูน้ำลด",
    fullStory:
      "สามพันโบก ตั้งอยู่ที่อำเภอโพธิ์ไทร จังหวัดอุบลราชธานี คำว่า 'โบก' ในภาษาท้องถิ่นอีสานหมายถึงแอ่งน้ำลึก ในช่วงฤดูแล้งระดับน้ำโขงลดลงจะเผยให้เห็นแก่งหินทรายขนาดมหึมาที่มีลวดลายโค้งเว้าแปลกตาราวกับงานศิลปะ",
    highlights: ["แอ่งหินรูปหัวใจและมิกกี้เมาส์", "ล่องเรือชมผาหินริมโขง", "ชมพระอาทิตย์ขึ้นกลางแก่งหิน"],
    imageUrl:
      "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "อุทยานประวัติศาสตร์สุโขทัย",
    province: "สุโขทัย",
    region: "ภาคเหนือ",
    tag: "มรดกโลก",
    bestTime: "พ.ย. – ก.พ.",
    description:
      "ย้อนรอยอารยธรรมแห่งรุ่งอรุณของไทย ชมความงดงามของวัดมหาธาตุและโบราณสถานท่ามกลางบรรยากาศเงียบสงบและสระน้ำขนาดใหญ่",
    fullStory:
      "อุทยานประวัติศาสตร์สุโขทัยได้รับการขึ้นทะเบียนเป็นมรดกโลกโดยองค์การยูเนสโก ภายในครอบคลุมพื้นที่โบราณสถานสำคัญกว่า 200 แห่ง สามารถปั่นจักรยานชมความร่มรื่นของวัดมหาธาตุ วัดศรีสวาย และวัดสระศรีได้อย่างเพลิดเพลิน",
    highlights: ["ปั่นจักรยานชมเมืองเก่า", "วัดมหาธาตุและสระน้ำตระพังเงิน", "ชมแสงยามเย็นสะท้อนผิวน้ำ"],
    imageUrl:
      "https://images.unsplash.com/photo-1552550049-db097c9480d1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "อุทยานแห่งชาติหมู่เกาะสิมิลัน",
    province: "พังงา",
    region: "ภาคใต้",
    tag: "ดำน้ำ & พักผ่อน",
    bestTime: "ต.ค. – พ.ค.",
    description:
      "สวรรค์ของคนรักทะเลและโลกใต้ทะเล โดดเด่นด้วยน้ำทะเลใสราวกระจก หาดทรายขาวบริสุทธิ์ และจุดชมวิวหินเรือใบอันเป็นเอกลักษณ์",
    fullStory:
      "หมู่เกาะสิมิลันประกอบด้วยเกาะน้อยใหญ่ 9 เกาะกลางทะเลอันดามัน ได้รับการยกย่องว่าเป็นหนึ่งในจุดดำน้ำตื้นและดำน้ำลึกที่สวยที่สุดในโลก มีแนวปะการังหลากสีสันและจุดชมวิวหินเรือใบบนเกาะ 8 ที่มองเห็นอ่าวโค้งรูปเกือกม้าได้อย่างชัดเจน",
    highlights: ["จุดชมวิวหินเรือใบ เกาะ 8", "ดำน้ำดูปะการังและเต่าทะเล", "หาดทรายขาวสะอาดตา"],
    imageUrl:
      "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=1000&q=80",
  },
];

const regions = ["ทั้งหมด", "ภาคเหนือ", "ภาคกลาง", "ภาคอีสาน", "ภาคใต้"];

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState("ทั้งหมด");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<PlaceProps | null>(null);

  const filteredPlaces = places.filter((place) => {
    const matchRegion =
      selectedRegion === "ทั้งหมด" || place.region === selectedRegion;
    const matchSearch =
      place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.province.toLowerCase().includes(searchQuery.toLowerCase());
    return matchRegion && matchSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900">
      {/* แถบเมนูด้านบน */}
      <nav className="sticky top-0 z-30 bg-[#faf8f5]/85 backdrop-blur-md border-b border-stone-200/70">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-700" />
            <span className="font-bold text-lg tracking-tight text-stone-900">
              SIAM JOURNEY
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-xs font-medium text-stone-500">
            <span>จุดหมายปลายทาง</span>
            <span>คู่มือการเดินทาง</span>
            <span className="px-3 py-1.5 rounded-full bg-stone-900 text-white">
              สำรวจประเทศไทย
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Banner ภาพขนาดใหญ่สไตล์นิตยสารท่องเที่ยว */}
      <header className="max-w-6xl mx-auto w-full px-6 pt-8 pb-6">
        <div className="relative rounded-[2rem] overflow-hidden h-[380px] sm:h-[440px] shadow-[0_20px_50px_rgba(28,25,23,0.12)]">
          <img
            src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=85"
            alt="Thailand Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />

          <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end text-white max-w-2xl">
            <span className="inline-block w-fit px-3.5 py-1 mb-4 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md border border-white/25">
              ✨ Thailand Minimal Travel Guide
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-3">
              ออกเดินทางค้นพบความงดงามของเมืองไทย
            </h1>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              คัดสรรพิกัดแห่งแรงบันดาลใจ ตั้งแต่ยอดดอยสัมผัสสายหมอก ไปจนถึงหมู่เกาะกลางท้องทะเลอันดามัน
            </p>
          </div>
        </div>

        {/* แถบตัวกรองภูมิภาคและช่องค้นหา */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200/80">
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedRegion === region
                    ? "bg-stone-900 text-white shadow-sm"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200/80"
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="ค้นหาชื่อสถานที่ หรือจังหวัด..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-full text-sm bg-white border border-stone-200/80 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 shadow-2xs"
            />
            <span className="absolute right-3.5 top-2.5 text-stone-400 text-xs">
              🔍
            </span>
          </div>
        </div>
      </header>

      {/* รายการสถานที่ท่องเที่ยว */}
      <main className="max-w-6xl mx-auto w-full px-6 py-6 pb-20 flex-1">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-stone-800">
            พิกัดแนะนำ ({filteredPlaces.length} แห่ง)
          </h2>
          <span className="text-xs text-stone-400">
            คลิกที่การ์ดเพื่ออ่านข้อมูลเพิ่มเติม
          </span>
        </div>

        {filteredPlaces.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => (
              <PlaceCard
                key={place.id}
                place={place}
                onSelect={(item) => setSelectedPlace(item)}
              />
            ))}
          </section>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-stone-200/60 text-stone-400">
            ไม่พบสถานที่ท่องเที่ยวที่ตรงกับการค้นหา
          </div>
        )}
      </main>

      {/* หน้าต่าง Modal แสดงรายละเอียดเต็มเมื่อคลิกการ์ด */}
      {selectedPlace && (
        <div
          onClick={() => setSelectedPlace(null)}
          className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="relative h-64 sm:h-72">
              <img
                src={selectedPlace.imageUrl}
                alt={selectedPlace.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPlace(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-stone-800 flex items-center justify-center font-bold hover:bg-white cursor-pointer shadow"
              >
                ✕
              </button>
              <span className="absolute bottom-4 left-6 px-3 py-1 rounded-full text-xs font-medium bg-white/95 text-stone-800">
                {selectedPlace.tag} • {selectedPlace.region}
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <p className="text-xs font-semibold text-emerald-700 mb-1">
                  📍 {selectedPlace.province}
                </p>
                <h3 className="text-2xl font-bold text-stone-900">
                  {selectedPlace.title}
                </h3>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {selectedPlace.fullStory}
              </p>

              <div className="pt-2">
                <p className="text-xs font-semibold text-stone-800 mb-2">
                  ไฮไลต์ที่ไม่ควรพลาด:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedPlace.highlights.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs bg-stone-100 text-stone-700"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>ช่วงเวลาที่เหมาะแก่การท่องเที่ยว: {selectedPlace.bestTime}</span>
                <button
                  onClick={() => setSelectedPlace(null)}
                  className="px-4 py-2 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 cursor-pointer"
                >
                  ปิดหน้าต่าง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

{/* Footer */}
      <footer className="border-t border-stone-200/80 py-8 px-6 text-center text-xs sm:text-sm text-stone-600 space-y-1">
        <p className="font-medium text-stone-800">
          จัดทำโดย นางสาวน้ำฝน วรรณภักดี รหัสนักศึกษา 6714421003
        </p>
        <p className="text-stone-500">
          คณะวิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ สาขาเทคโนโลยีสารสนเทศ
        </p>
      </footer>
    </div>
  );
}