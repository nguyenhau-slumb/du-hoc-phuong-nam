import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: "/images/slide1.jpg", title: "Tư vấn lộ trình du học chuyên sâu" },
    { url: "/images/slide2.jpg", title: "Lớp học tiếng Hàn năng động" },
    { url: "/images/slide3.jpg", title: "Hội thảo định hướng nghề nghiệp" },
    { url: "/images/slide4.jpg", title: "Hoạt động ngoại khóa hè Thụy Sĩ" },
    { url: "/images/slide5.jpg", title: "Lễ chia tay và dặn dò du học sinh" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="overflow-x-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dee402?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="University Background" 
            className="w-full h-full object-cover opacity-30 blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A531B]/80 via-slate-950/90 to-slate-950"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F37021]/10 rounded-full blur-[120px] animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 text-center lg:text-left">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-8 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#F37021] mr-3 animate-ping"></span>
              Đơn vị tư vấn du học tận tâm
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.05]">
              Kiến tạo tương lai <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F37021] via-orange-400 to-[#F37021]">
                vươn tầm thế giới
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-light">
              Phương Nam Education đồng hành cùng học sinh Việt Nam hiện thực hóa giấc mơ du học tại Hàn Quốc, Thụy Sĩ và các quốc gia hàng đầu.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
