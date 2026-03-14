import React, { useState, useEffect, useRef } from "react";
import {
  Instagram,
  Twitter,
  Mail,
  ArrowRight,
  Star,
  Play,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// --- CUSTOM HOOKS ---
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (options.triggerOnce) observer.unobserve(entry.target);
        } else if (!options.triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold: 0.1, ...options },
    );

    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [options.triggerOnce]);

  return [targetRef, isIntersecting];
};

// --- ANIMATION COMPONENTS ---
const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const baseClasses = "transition-all duration-1000 ease-out";
  const directionClasses = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12",
    none: "scale-95",
  };

  const hiddenClasses = `opacity-0 ${directionClasses[direction]}`;
  const visibleClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${isVisible ? visibleClasses : hiddenClasses} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- DATA ---
const PORTFOLIO_DATA = [
  {
    id: 1,
    title: "Vogue Paris",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488153/WhatsApp_Image_2026-03-14_at_19.32.23_1_qq3mgs.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 2,
    title: "Summer Collection",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488152/WhatsApp_Image_2026-03-14_at_19.32.22_2_iahvm4.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 3,
    title: "Chanel Beauty",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488146/WhatsApp_Image_2026-03-14_at_19.29.59_8_iv8cyq.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },
  {
    id: 4,
    title: "Urban Elegance",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488145/WhatsApp_Image_2026-03-14_at_19.32.22_kuiec2.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 5,
    title: "Neon Dreams",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488145/WhatsApp_Image_2026-03-14_at_19.32.22_1_cl8fhk.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 6,
    title: "Silk & Shadows",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488144/WhatsApp_Image_2026-03-14_at_19.29.59_ezucsu.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 7,
    title: "Studio Session I",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488144/WhatsApp_Image_2026-03-14_at_19.29.59_13_y8qsoq.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 8,
    title: "Studio Session II",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488142/WhatsApp_Image_2026-03-14_at_19.29.59_7_ncqrhm.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 9,
    title: "Studio Session III",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488142/WhatsApp_Image_2026-03-14_at_19.29.59_11_rueaa1.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },
  {
    id: 10,
    title: "Studio Session IV",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488141/WhatsApp_Image_2026-03-14_at_19.29.59_12_ssaerm.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 11,
    title: "Studio Session V",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488140/WhatsApp_Image_2026-03-14_at_19.29.59_10_jffws0.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 12,
    title: "Studio Session VI",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488140/WhatsApp_Image_2026-03-14_at_19.29.59_9_ntgkn6.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 13,
    title: "Studio Session VII",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488139/WhatsApp_Image_2026-03-14_at_19.29.59_5_rzpngv.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 14,
    title: "Studio Session VIII",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488138/WhatsApp_Image_2026-03-14_at_19.32.23_adndlp.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 15,
    title: "Studio Session IX",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488138/WhatsApp_Image_2026-03-14_at_19.29.59_1_jl9qkv.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },
  {
    id: 16,
    title: "Studio Session X",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488137/WhatsApp_Image_2026-03-14_at_19.29.59_3_emauna.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 17,
    title: "Studio Session XI",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488137/WhatsApp_Image_2026-03-14_at_19.29.59_4_z0y9jz.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 18,
    title: "Studio Session XII",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488137/WhatsApp_Image_2026-03-14_at_19.29.59_2_nxb21g.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
];

const SERVICES = [
  {
    title: "Fashion Modeling",
    desc: "Runway, editorial, and lookbook modeling with a distinctive, adaptable presence.",
  },
  {
    title: "Brand Ambassador",
    desc: "Authentic representation and luxurious alignment for premium fashion and beauty brands.",
  },
  {
    title: "Commercial Campaign",
    desc: "High-impact visual storytelling for global campaigns and digital media.",
  },
  {
    title: "Event Appearance",
    desc: "Elevating high-profile events with undeniable grace and professional charm.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "A sheer force of elegance. GEKTA transforms every single garment into a breathtaking masterpiece.",
    author: "Vogue Paris",
  },
  {
    quote:
      "The perfect embodiment of modern luxury. Working with her elevated our entire campaign.",
    author: "Chanel Beauty",
  },
  {
    quote:
      "Professional, radiant, and intuitively understands the camera. A true modern muse.",
    author: "Mario Testino",
  },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Handle Navbar Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Testimonial Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans text-stone-800 bg-[#FFFFFF] overflow-x-hidden selection:bg-pink-200 selection:text-pink-900">
      {/* GLOBAL STYLES & FONTS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Montserrat:wght@200;300;400;500;600&family=Pinyon+Script&display=swap');

        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Montserrat', sans-serif; }
        .font-script { font-family: 'Pinyon Script', cursive; }

        /* 3D & Motion Utilities */
        .glass-panel {
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 32px 0 rgba(244, 114, 182, 0.07);
        }

        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }

        @keyframes float-3d {
          0%, 100% { transform: rotateY(-5deg) rotateX(2deg) translateY(0px); }
          50% { transform: rotateY(5deg) rotateX(-2deg) translateY(-15px); }
        }
        .animate-float-3d {
          animation: float-3d 8s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 10s ease-in-out infinite 2s;
        }

        /* Ambient Glows */
        .glow-pink {
          background: radial-gradient(circle, rgba(251,207,232,0.8) 0%, rgba(255,255,255,0) 70%);
        }
        .glow-rose {
          background: radial-gradient(circle, rgba(255,228,230,0.8) 0%, rgba(255,255,255,0) 70%);
        }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #FFFFFF; }
        ::-webkit-scrollbar-thumb { background: #fbcfe8; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #f472b6; }
      `,
        }}
      />

      {/* FIXED AMBIENT BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#FAFAFA]">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full glow-pink blur-[80px] animate-float opacity-60"></div>
        <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full glow-rose blur-[100px] animate-float-delayed opacity-50"></div>
        {/* Subtle noise texture for premium feel */}
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          }}
        ></div>
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "glass-panel py-4" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-serif tracking-widest font-bold text-stone-900 cursor-pointer drop-shadow-sm">
            GEKTA<span className="text-pink-400">.</span>
          </div>
          <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.15em] text-stone-600 font-medium">
            {["About", "Portfolio", "Services", "Schedule", "Testimonials"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-pink-500 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              ),
            )}
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-stone-900 text-white rounded-full text-xs uppercase tracking-widest hover:bg-pink-500 transition-colors duration-500 shadow-lg shadow-pink-500/20">
            Book Now
          </button>
          <button className="md:hidden text-stone-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* HERO SECTION - 3D & High Conversion */}
      <section className="relative min-h-screen w-full flex items-center pt-24 pb-12 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Hero Left: Text & CTAs */}
          <div className="flex flex-col items-start z-20 order-2 lg:order-1 mt-10 lg:mt-0">
            <FadeIn delay={100} direction="up">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel border-pink-200/50 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
                <span className="text-pink-500 uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold">
                  Professional Muse & Talent
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={300} direction="up">
              <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] font-serif text-stone-900 mb-6 drop-shadow-sm">
                GEKTA
              </h1>
            </FadeIn>

            <FadeIn delay={500} direction="up">
              <p className="text-xl md:text-3xl font-light text-stone-600 mb-10 max-w-lg leading-relaxed">
                Luxury presence. <br />
                <span className="italic text-pink-400 font-serif">
                  Editorial energy.
                </span>
              </p>
            </FadeIn>

            <FadeIn
              delay={700}
              direction="up"
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full uppercase tracking-widest text-xs font-semibold hover:from-pink-500 hover:to-rose-500 transition-all duration-500 shadow-[0_10px_30px_rgba(244,114,182,0.4)] hover:shadow-[0_15px_40px_rgba(244,114,182,0.6)] hover:-translate-y-1 flex justify-center items-center gap-2">
                Book GEKTA <ArrowRight size={16} />
              </button>
              <button className="px-8 py-4 glass-panel text-stone-900 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-white/80 transition-all duration-500 shadow-sm hover:shadow-md flex justify-center items-center">
                View Portfolio
              </button>
            </FadeIn>

            <FadeIn
              delay={900}
              direction="up"
              className="mt-12 pt-8 border-t border-pink-100 w-full lg:max-w-md"
            >
              <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400 font-semibold mb-3">
                Available For
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-stone-600 font-serif italic">
                <span>Fashion</span> <span className="text-pink-300">•</span>
                <span>Commercial</span> <span className="text-pink-300">•</span>
                <span>Events</span> <span className="text-pink-300">•</span>
                <span>Editorial</span>
              </div>
            </FadeIn>
          </div>

          {/* Hero Right: 3D Visual Centerpiece */}
          <div className="relative z-10 perspective-1000 order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full flex items-center justify-center mt-10 lg:mt-0">
            {/* 3D Floating Container */}
            <div className="relative w-full max-w-md aspect-[3/4] preserve-3d animate-float-3d mx-auto">
              {/* Back Glow */}
              <div className="absolute -inset-10 bg-gradient-to-br from-pink-300/40 to-white/0 rounded-[3rem] blur-2xl transform -translate-z-12"></div>

              {/* Main Image */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[6px] border-white/80 bg-white">
                <img
                  src="https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488144/WhatsApp_Image_2026-03-14_at_19.29.59_13_y8qsoq.jpg"
                  alt="Gekta Hero"
                  className="w-full h-full object-cover object-[70%_30%] scale-150"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent mix-blend-overlay"></div>
              </div>

              {/* Floating Glass Element 1 (Top Right) */}
              <div className="absolute -top-8 -right-8 w-32 h-32 glass-panel rounded-full flex items-center justify-center transform translate-z-[40px] shadow-xl animate-float-delayed backdrop-blur-xl border-white">
                <div className="w-24 h-24 rounded-full border border-pink-200/50 flex items-center justify-center">
                  <Star
                    className="text-pink-400 w-8 h-8 drop-shadow-md"
                    fill="currentColor"
                  />
                </div>
              </div>

              {/* Floating Glass Element 2 (Bottom Left) */}
              <div className="absolute -bottom-10 -left-6 lg:-left-12 glass-panel p-5 rounded-2xl transform translate-z-[60px] shadow-2xl animate-float backdrop-blur-xl border-white w-48">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488152/WhatsApp_Image_2026-03-14_at_19.32.22_2_iahvm4.jpg"
                      className="w-full h-full object-cover"
                      alt="Vogue"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold">
                      Featured
                    </p>
                    <p className="text-xs font-serif font-bold text-stone-800">
                      Vogue Paris
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-pink-300 to-transparent"></div>
        </div>
      </section>

      <section
        id="jadwal"
        className="py-32 relative z-10 overflow-hidden bg-white/40 backdrop-blur-sm border-y border-pink-50/50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h4 className="text-pink-400 uppercase tracking-[0.2em] text-xs font-bold mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-[2px] bg-pink-300"></span>
              Schedule Availability
              <span className="w-8 h-[2px] bg-pink-300"></span>
            </h4>
            <h2 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">
              GEKTA's <span className="italic text-pink-400">Schedule</span>
            </h2>
            <p className="text-stone-500 font-light max-w-2xl mx-auto text-lg mb-12">
              View GEKTA's availability for photoshoots, muse appearances, and
              upcoming campaigns.
            </p>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <div className="glass-panel p-2 md:p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(244,114,182,0.1)] relative overflow-hidden border-2 border-white max-w-5xl mx-auto">
              {/* Decorative blob inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none"></div>

              <div className="relative rounded-[1.5rem] overflow-hidden shadow-inner bg-white/80 w-full h-[500px] md:h-[600px] border border-pink-100">
                {/* Embed Google Calendar */}
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=ninoambara1%40gmail.com&ctz=Asia%2FMakassar&color=%23F472B6"
                  style={{ borderWidth: 0, width: "100%", height: "100%" }}
                  frameBorder="0"
                  scrolling="no"
                  title="GEKTA Google Calendar Schedule"
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FEATURED PORTFOLIO */}
      <section
        id="portfolio"
        className="py-32 relative z-10 bg-white/50 backdrop-blur-3xl border-y border-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif text-stone-900 leading-tight">
                Selected <span className="italic text-pink-400">Works</span>
              </h2>
            </div>
            <button className="group flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold text-stone-600 hover:text-pink-500 transition-colors">
              Explore Full Archive
              <span className="w-8 h-[1px] bg-pink-300 group-hover:w-12 group-hover:bg-pink-500 transition-all duration-300"></span>
            </button>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.map((item) => (
              <FadeIn key={item.id} delay={item.delay} direction="up">
                <div
                  className={`relative group overflow-hidden rounded-[2rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 ${item.aspect} bg-white p-2 border border-pink-50`}
                >
                  <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Glassmorphism Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-100/90 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col justify-end p-8">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <span className="inline-block px-3 py-1 mb-3 text-[10px] uppercase tracking-widest text-pink-600 bg-white/80 backdrop-blur-md rounded-full font-bold shadow-sm">
                          View Project
                        </span>
                        <h3 className="text-stone-900 text-3xl font-serif drop-shadow-md">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT GEKTA (Split Layout) */}
      <section id="about" className="py-32 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <FadeIn direction="right">
                <div className="relative">
                  {/* 3D Offset Background Card */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-rose-100 rounded-[3rem] transform translate-x-6 translate-y-6 rotate-3"></div>

                  {/* Main Portrait */}
                  <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white glass-panel p-2">
                    <img
                      src="https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488138/WhatsApp_Image_2026-03-14_at_19.32.23_adndlp.jpg"
                      alt="Gekta About"
                      className="w-full h-full object-cover rounded-[2.5rem]"
                    />
                  </div>

                  {/* Floating Play Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 glass-panel rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.5)] group">
                    <Play
                      className="text-stone-800 ml-1 group-hover:text-pink-500 transition-colors"
                      size={24}
                      fill="currentColor"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="w-full lg:w-1/2 relative z-20">
              <FadeIn direction="left">
                <h4 className="text-pink-400 uppercase tracking-[0.2em] text-xs font-bold mb-4 flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-pink-300"></span>
                  The Artist
                </h4>
                <h2 className="text-5xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">
                  Embodying{" "}
                  <span className="italic text-pink-400">Elegance</span> <br />&
                  Grace.
                </h2>
                <div className="glass-panel p-8 rounded-3xl mb-10 border-white/80 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                  <p className="text-stone-600 font-light leading-relaxed mb-6 text-lg relative z-10">
                    Based in the fashion capitals of the world, GEKTA brings
                    more than just a striking appearance to the lens. With a
                    background in classical dance and an innate understanding of
                    high-fashion storytelling, she breathes life into every
                    concept.
                  </p>
                  <p className="text-stone-600 font-light leading-relaxed text-lg relative z-10">
                    Her work bridges the gap between commercial appeal and
                    avant-garde editorial, making her a sought-after muse
                    globally.
                  </p>
                </div>

                <div className="flex flex-col items-start pl-4 border-l-2 border-pink-200">
                  <span className="font-script text-6xl text-stone-800 mb-1 transform -rotate-3">
                    Gekta
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-pink-400 font-bold">
                    Paris • Milan • NY
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - Glass Cards */}
      <section
        id="services"
        className="py-32 relative z-10 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">
              Elevating <span className="italic text-pink-400">Brands</span> to
              Art
            </h2>
            <p className="text-stone-500 font-light max-w-2xl mx-auto text-lg">
              Offering a versatile range of modeling and brand representation
              services designed for the highest echelon of the fashion and
              lifestyle industries.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {SERVICES.map((service, index) => (
              <FadeIn key={index} delay={index * 150} direction="up">
                <div className="group h-full glass-panel p-10 md:p-12 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(244,114,182,0.15)] relative overflow-hidden border-2 border-transparent hover:border-pink-100">
                  {/* Subtle Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

                  <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-pink-400 mb-8 group-hover:scale-110 group-hover:bg-pink-400 group-hover:text-white transition-all duration-500 border border-pink-100">
                    <Star size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif text-stone-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-stone-500 font-light text-base leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-pink-500 font-bold group-hover:text-stone-900 transition-colors"
                  >
                    Inquire <ArrowRight size={14} />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section
        id="testimonials"
        className="py-32 relative z-10 overflow-hidden"
      >
        {/* Background Decorative Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-pink-100 opacity-50 -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-pink-200/50 opacity-50 -z-10"></div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-20">
          <FadeIn>
            <Quote
              className="text-pink-200 w-16 h-16 mx-auto mb-10"
              fill="currentColor"
            />

            <div className="relative h-48 md:h-40">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === activeTestimonial ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95 pointer-events-none"}`}
                >
                  <p className="text-2xl md:text-4xl font-serif text-stone-800 leading-snug mb-8">
                    "{t.quote}"
                  </p>
                  <p className="text-sm uppercase tracking-[0.2em] font-bold text-pink-400">
                    — {t.author}
                  </p>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-6 mt-12">
              <button
                onClick={() =>
                  setActiveTestimonial((prev) =>
                    prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
                  )
                }
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-stone-500 hover:text-pink-500 hover:bg-white transition-all shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeTestimonial ? "bg-pink-500 w-6" : "bg-pink-200"}`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setActiveTestimonial(
                    (prev) => (prev + 1) % TESTIMONIALS.length,
                  )
                }
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-stone-500 hover:text-pink-500 hover:bg-white transition-all shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT SECTION - Premium Form */}
      <section id="contact" className="py-32 relative z-10 bg-white">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-50/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <div className="glass-panel rounded-[3rem] p-8 md:p-16 border-2 border-white shadow-[0_20px_50px_rgba(244,114,182,0.05)] overflow-hidden relative">
            {/* Form Bg Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-pink-200/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 relative z-10">
              <div className="lg:col-span-2 flex flex-col justify-between">
                <FadeIn direction="right">
                  <h2 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">
                    Let's Create <br />
                    <span className="italic text-pink-400">Magic.</span>
                  </h2>
                  <p className="text-stone-500 font-light text-lg mb-12">
                    Available for worldwide bookings, editorial shoots, and
                    high-end brand campaigns.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-stone-600 hover:text-pink-500 transition-colors cursor-pointer group">
                      <div className="w-12 h-12 rounded-full bg-white border border-pink-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <Mail size={18} />
                      </div>
                      <span className="font-medium tracking-wide">
                        booking@gekta-muse.com
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-stone-600 hover:text-pink-500 transition-colors cursor-pointer group">
                      <div className="w-12 h-12 rounded-full bg-white border border-pink-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <Instagram size={18} />
                      </div>
                      <span className="font-medium tracking-wide">
                        @gekta_official
                      </span>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-3">
                <FadeIn
                  direction="up"
                  delay={200}
                  className="bg-white/60 backdrop-blur-md border border-white p-8 md:p-10 rounded-3xl shadow-sm"
                >
                  <form
                    className="space-y-8"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-pink-400 transition-colors font-medium text-sm"
                        />
                      </div>
                      <div className="relative group">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-pink-400 transition-colors font-medium text-sm"
                        />
                      </div>
                    </div>
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="Agency / Brand (Optional)"
                        className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-pink-400 transition-colors font-medium text-sm"
                      />
                    </div>
                    <div className="relative group">
                      <textarea
                        rows="4"
                        placeholder="Project Details"
                        className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-pink-400 transition-colors font-medium text-sm resize-none"
                      ></textarea>
                    </div>
                    <button className="w-full py-4 mt-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full text-white uppercase tracking-widest text-xs font-bold hover:from-pink-500 hover:to-rose-500 shadow-[0_10px_20px_rgba(244,114,182,0.3)] hover:shadow-[0_15px_30px_rgba(244,114,182,0.5)] transition-all duration-300 hover:-translate-y-1">
                      Send Inquiry
                    </button>
                  </form>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 text-center relative z-10 border-t border-pink-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="text-3xl font-serif tracking-widest text-stone-900 font-bold mb-6 drop-shadow-sm">
            GEKTA<span className="text-pink-400">.</span>
          </div>
          <div className="flex space-x-6 mb-8">
            {[Instagram, Twitter, Mail].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 rounded-full bg-stone-50 text-stone-400 flex items-center justify-center hover:bg-pink-50 hover:text-pink-500 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-stone-400 text-[10px] font-bold tracking-[0.2em] uppercase">
            &copy; {new Date().getFullYear()} GEKTA Muse. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
