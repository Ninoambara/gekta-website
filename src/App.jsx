import React, { useState, useEffect, useRef } from "react";
import {
  Instagram,
  Twitter,
  Phone,
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
    id: 101,
    title: "bymar.mar",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774792571/WhatsApp_Image_2026-03-29_at_21.50.48_1_ucbfyi.jpg",
    aspect: "aspect-[4/3]",
    delay: 0,
  },
  {
    id: 102,
    title: "bymar.mar",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774792572/WhatsApp_Image_2026-03-29_at_21.50.49_2_ifcxmf.jpg",
    aspect: "aspect-[4/3]",
    delay: 150,
  },
  {
    id: 103,
    title: "bymar.mar",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774792571/WhatsApp_Image_2026-03-29_at_21.50.48_uqt6p7.jpg",
    aspect: "aspect-[4/3]",
    delay: 300,
  },
  {
    id: 104,
    title: "bymar.mar",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774792571/WhatsApp_Image_2026-03-29_at_21.50.49_1_owum6h.jpg",
    aspect: "aspect-[4/3]",
    delay: 0,
  },
  {
    id: 105,
    title: "bymar.mar",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774792572/WhatsApp_Image_2026-03-29_at_21.50.49_kjel0s.jpg",
    aspect: "aspect-[4/3]",
    delay: 150,
  },
  {
    id: 1,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488144/WhatsApp_Image_2026-03-14_at_19.29.59_ezucsu.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 2,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488144/WhatsApp_Image_2026-03-14_at_19.29.59_13_y8qsoq.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 3,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488142/WhatsApp_Image_2026-03-14_at_19.29.59_7_ncqrhm.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },
  {
    id: 4,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488142/WhatsApp_Image_2026-03-14_at_19.29.59_11_rueaa1.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 5,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488141/WhatsApp_Image_2026-03-14_at_19.29.59_6_a6z8oa.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 6,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488141/WhatsApp_Image_2026-03-14_at_19.29.59_12_ssaerm.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 7,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488140/WhatsApp_Image_2026-03-14_at_19.29.59_10_jffws0.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 8,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488139/WhatsApp_Image_2026-03-14_at_19.29.59_5_rzpngv.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 9,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488140/WhatsApp_Image_2026-03-14_at_19.29.59_9_ntgkn6.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },
  {
    id: 10,
    title: "Balibee Beauty",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774792026/WhatsApp_Image_2026-03-29_at_21.46.37_1_puitak.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 11,
    title: "Balibee Beauty",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774792026/WhatsApp_Image_2026-03-29_at_21.46.37_2_ftsftg.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 12,
    title: "Balibee Beauty",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774792026/WhatsApp_Image_2026-03-29_at_21.46.37_3_h9byqu.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 13,
    title: "Balibee Beauty",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774792027/WhatsApp_Image_2026-03-29_at_21.46.37_4_he5fv1.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 14,
    title: "Priscill Pangestu",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774792027/WhatsApp_Image_2026-03-29_at_21.46.37_5_yl0fqa.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 15,
    title: "Priscill Pangestu",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774792027/WhatsApp_Image_2026-03-29_at_21.46.37_7_qyauwz.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },
  {
    id: 16,
    title: "Balibee Beauty",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774792029/WhatsApp_Image_2026-03-29_at_21.46.37_tkwmxo.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 17,
    title: "Balibee Beauty",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774792030/WhatsApp_Image_2026-03-29_at_21.46.37_6_ml4v2u.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 18,
    title: "Krisna Bali Makeup",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488153/WhatsApp_Image_2026-03-14_at_19.32.23_1_qq3mgs.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 19,
    title: "Krisna Bali Makeup",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488152/WhatsApp_Image_2026-03-14_at_19.32.22_2_iahvm4.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 20,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488146/WhatsApp_Image_2026-03-14_at_19.29.59_8_iv8cyq.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 21,
    title: "Krisna Bali Makeup",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488145/WhatsApp_Image_2026-03-14_at_19.32.22_kuiec2.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 22,
    title: "Krisna Bali Makeup",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488145/WhatsApp_Image_2026-03-14_at_19.32.22_1_cl8fhk.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 23,
    title: "Krisna Bali Makeup",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488138/WhatsApp_Image_2026-03-14_at_19.32.23_adndlp.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 24,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488138/WhatsApp_Image_2026-03-14_at_19.29.59_1_jl9qkv.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },

  {
    id: 26,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488137/WhatsApp_Image_2026-03-14_at_19.29.59_4_z0y9jz.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 28,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794916/WhatsApp_Image_2026-03-29_at_22.33.19_1_aviahl.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 29,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794917/WhatsApp_Image_2026-03-29_at_22.33.19_2_osakks.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 30,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794917/WhatsApp_Image_2026-03-29_at_22.33.19_3_wleqzq.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 31,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794918/WhatsApp_Image_2026-03-29_at_22.33.19_4_vssvzg.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 32,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794919/WhatsApp_Image_2026-03-29_at_22.33.20_1_xdw4ob.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 33,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794920/WhatsApp_Image_2026-03-29_at_22.33.19_a4motv.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },
  {
    id: 34,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794922/WhatsApp_Image_2026-03-29_at_22.33.20_xvyvig.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 27,
    title: "Trilokamuabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1773488137/WhatsApp_Image_2026-03-14_at_19.29.59_2_nxb21g.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 201,
    title: "roxzeacademy",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791842/WhatsApp_Image_2026-03-29_at_21.31.06_fq4vuo.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 202,
    title: "roxzeacademy",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791842/WhatsApp_Image_2026-03-29_at_21.31.05_xsc74k.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 203,
    title: "roxzeacademy",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791839/WhatsApp_Image_2026-03-29_at_21.31.06_1_iskgbx.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 204,
    title: "roxzeacademy",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791839/WhatsApp_Image_2026-03-29_at_21.31.05_1_myzz0b.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 205,
    title: "roxzeacademy",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791836/WhatsApp_Image_2026-03-29_at_21.30.36_1_ueiw9n.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 206,
    title: "roxzeacademy",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791835/WhatsApp_Image_2026-03-29_at_21.30.35_lvz5wj.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },
  {
    id: 207,
    title: "makeupbyayudevik",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791842/WhatsApp_Image_2026-03-29_at_21.31.13_gzibq9.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 208,
    title: "makeupbyayudevik",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791842/WhatsApp_Image_2026-03-29_at_21.31.12_sqgx1y.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 209,
    title: "makeupbyayudevik",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791842/WhatsApp_Image_2026-03-29_at_21.31.11_ae2pzv.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 210,
    title: "makeupbyayudevik",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791842/WhatsApp_Image_2026-03-29_at_21.31.10_d3zm3t.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 211,
    title: "makeupbyayudevik",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791841/WhatsApp_Image_2026-03-29_at_21.31.09_m14uor.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 212,
    title: "makeupbyayudevik",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791841/WhatsApp_Image_2026-03-29_at_21.31.09_1_w6q1qu.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },
  {
    id: 213,
    title: "firlamakeupart",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791840/WhatsApp_Image_2026-03-29_at_21.31.08_qdh3fs.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 214,
    title: "firlamakeupart",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791840/WhatsApp_Image_2026-03-29_at_21.31.07_vslbx2.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 215,
    title: "firlamakeupart",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791840/WhatsApp_Image_2026-03-29_at_21.31.07_1_smljeh.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 216,
    title: "firlamakeupart",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791836/WhatsApp_Image_2026-03-29_at_21.30.37_kz8yfz.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 217,
    title: "makeuupbywindanyargt",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791839/WhatsApp_Image_2026-03-29_at_21.31.01_1_ycoilj.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 218,
    title: "makeuupbywindanyargt",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791839/WhatsApp_Image_2026-03-29_at_21.31.02_u6prt0.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },
  {
    id: 219,
    title: "makeuupbywindanyargt",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791838/WhatsApp_Image_2026-03-29_at_21.31.02_1_dwve3f.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 220,
    title: "by.manobeaute",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791838/WhatsApp_Image_2026-03-29_at_21.31.01_gcmghd.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 221,
    title: "by.manobeaute",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791838/WhatsApp_Image_2026-03-29_at_21.31.00_1_dnpeum.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 222,
    title: "by.manobeaute",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791838/WhatsApp_Image_2026-03-29_at_21.31.00_z1sski.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 223,
    title: "Krisna Bali Makeup",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791838/WhatsApp_Image_2026-03-29_at_21.30.59_l1cffj.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 224,
    title: "Krisna Bali Makeup",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791836/WhatsApp_Image_2026-03-29_at_21.30.36_avd63a.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },
  {
    id: 225,
    title: "Krisna Bali Makeup",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791836/WhatsApp_Image_2026-03-29_at_21.30.33_fb3apc.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 226,
    title: "wulanmakeupbali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791837/WhatsApp_Image_2026-03-29_at_21.31.04_npgmai.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 227,
    title: "wulanmakeupbali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791835/WhatsApp_Image_2026-03-29_at_21.31.03_1_unfxay.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 228,
    title: "wulanmakeupbali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791836/WhatsApp_Image_2026-03-29_at_21.31.03_nmxmy7.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 229,
    title: "krishnaari.mua",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791837/WhatsApp_Image_2026-03-29_at_21.31.04_1_d2xnqb.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 230,
    title: "rubybeautymua",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774793271/WhatsApp_Image_2026-03-29_at_22.02.21_ppt8eh.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },
  {
    id: 231,
    title: "rubybeautymua",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774793271/WhatsApp_Image_2026-03-29_at_22.02.23_dks3ex.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 232,
    title: "rubybeautymua",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774793271/WhatsApp_Image_2026-03-29_at_22.02.24_1_upjikf.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 233,
    title: "rubybeautymua",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774793272/WhatsApp_Image_2026-03-29_at_22.02.25_1_wkq9kl.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 234,
    title: "rubybeautymua",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774793271/WhatsApp_Image_2026-03-29_at_22.02.22_cezwzo.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 235,
    title: "rubybeautymua",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774793272/WhatsApp_Image_2026-03-29_at_22.02.25_2_bge28f.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 236,
    title: "rubybeautymua",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774793272/WhatsApp_Image_2026-03-29_at_22.02.25_qwy1dn.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },
  {
    id: 237,
    title: "rubybeautymua",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774793272/WhatsApp_Image_2026-03-29_at_22.02.24_jtrpxl.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 238,
    title: "agrapanabeachvilla",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774793272/WhatsApp_Image_2026-03-29_at_22.04.26_fhh17d.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 239,
    title: "rahayuarth_makeup",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794034/WhatsApp_Image_2026-03-29_at_22.19.07_1_vvkxjm.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 240,
    title: "rahayuarth_makeup",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794035/WhatsApp_Image_2026-03-29_at_22.19.08_1_el2as9.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 241,
    title: "rahayuarth_makeup",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794035/WhatsApp_Image_2026-03-29_at_22.19.08_gbhrhl.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 242,
    title: "rahayuarth_makeup",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794036/WhatsApp_Image_2026-03-29_at_22.19.09_jnwgzr.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
  {
    id: 243,
    title: "jegegayumua",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794035/WhatsApp_Image_2026-03-29_at_22.19.06_1_fao1zd.jpg",
    aspect: "aspect-[4/5]",
    delay: 150,
  },
  {
    id: 244,
    title: "jegegayumua",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794034/WhatsApp_Image_2026-03-29_at_22.19.06_2_fehumg.jpg",
    aspect: "aspect-[3/4]",
    delay: 300,
  },
  {
    id: 245,
    title: "jegegayumua",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794034/WhatsApp_Image_2026-03-29_at_22.19.07_ziukux.jpg",
    aspect: "aspect-[4/5]",
    delay: 0,
  },
  {
    id: 246,
    title: "jegegayumua",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794034/WhatsApp_Image_2026-03-29_at_22.19.06_oefitm.jpg",
    aspect: "aspect-[3/4]",
    delay: 150,
  },
  {
    id: 247,
    title: "salonpunorabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794851/WhatsApp_Image_2026-03-29_at_22.22.53_1_h0cnkq.jpg",
    aspect: "aspect-[4/5]",
    delay: 300,
  },
  {
    id: 248,
    title: "salonpunorabali",
    img: "https://res.cloudinary.com/dccj9vlyq/image/upload/v1774794852/WhatsApp_Image_2026-03-29_at_22.22.53_nq7g2f.jpg",
    aspect: "aspect-[3/4]",
    delay: 0,
  },
];

const SERVICES = [
  {
    title: "Muse Makeup",
    desc: "Collaborative muse sessions for makeup artists who want expressive beauty visuals.",
  },
  {
    title: "Photoshoots",
    desc: "Studio and on-location shoots with adaptable mood, styling, and camera presence.",
  },
  {
    title: "Talent Collaboration",
    desc: "Open to work with photographers, stylists, MUAs, and creative teams across concepts.",
  },
  {
    title: "Upcoming Campaigns",
    desc: "Available for fresh campaign concepts with growing artistic vision and dedication.",
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

const slugifyTitle = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getProjectSlugFromHash = (hash) => {
  const cleanedHash = hash.replace(/^#/, "");
  if (!cleanedHash.startsWith("project/")) return "";
  return cleanedHash.slice("project/".length);
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeProjectSlug, setActiveProjectSlug] = useState(() =>
    getProjectSlugFromHash(window.location.hash),
  );
  const lastCatalogScrollY = useRef(0);
  const shouldRestoreCatalogScroll = useRef(false);

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

  useEffect(() => {
    const handleHashChange = () => {
      setActiveProjectSlug(getProjectSlugFromHash(window.location.hash));
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (activeProjectSlug) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    if (shouldRestoreCatalogScroll.current) {
      window.scrollTo({
        top: lastCatalogScrollY.current,
        left: 0,
        behavior: "auto",
      });
      shouldRestoreCatalogScroll.current = false;
    }
  }, [activeProjectSlug]);

  const activeProjectTitle =
    PORTFOLIO_DATA.find(
      (item) => slugifyTitle(item.title) === activeProjectSlug,
    )?.title || "";
  const activeProjectImages = activeProjectTitle
    ? PORTFOLIO_DATA.filter((item) => item.title === activeProjectTitle)
    : [];

  const openProject = (title) => {
    lastCatalogScrollY.current = window.scrollY;
    window.location.hash = `project/${slugifyTitle(title)}`;
  };

  const closeProject = () => {
    shouldRestoreCatalogScroll.current = true;
    window.location.hash = "portfolio";
  };

  if (activeProjectTitle) {
    return (
      <div className="font-sans text-stone-800 bg-[#FFFFFF] min-h-screen">
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <button
              onClick={closeProject}
              className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-pink-500 transition-colors mb-8"
            >
              <ChevronLeft size={18} />
              Back to Catalog
            </button>
            <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-3">
              {activeProjectTitle}
            </h1>
            <p className="text-stone-500 mb-10">
              {activeProjectImages.length} photo
              {activeProjectImages.length > 1 ? "s" : ""} in this project
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeProjectImages.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className={`relative overflow-hidden rounded-[2rem] shadow-lg ${item.aspect} bg-white p-2 border border-pink-50`}
                >
                  <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

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
                Luxury Presence, <br />
                <span className="italic text-pink-400 font-serif">
                  Magnetic Beauty
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
                <span>muse makeup</span>{" "}
                <span className="text-pink-300">•</span>
                <span>photoshoots</span>{" "}
                <span className="text-pink-300">•</span>
                <span>talent</span> <span className="text-pink-300">•</span>
                <span>upcoming campaigns</span>
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
                  src="https://res.cloudinary.com/dccj9vlyq/image/upload/v1774791843/WhatsApp_Image_2026-03-29_at_21.35.22_jxdycr.jpg"
                  alt="Gekta Hero"
                  className="w-full h-full object-cover "
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
                      BaliBee Beauty
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
                  onClick={() => openProject(item.title)}
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
                  Embodying Elegance & Confident
                </h2>
                <div className="glass-panel p-8 rounded-3xl mb-10 border-white/80 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                  <p className="text-stone-600 font-light leading-relaxed mb-6 text-lg relative z-10">
                    GEKTA is an emerging muse who started her journey through an
                    opportunity to model for a makeup project by Triloka MUA
                    Bali, allowing her to build her very first portfolio. What
                    began as a simple collaboration quickly grew into a passion
                    for expressing beauty, mood, and storytelling through
                    visuals.
                  </p>
                  <p className="text-stone-600 font-light leading-relaxed mb-6 text-lg relative z-10">
                    With a strong willingness to learn, she continuously
                    explores different muse styles, concepts, and creative
                    directions, developing her presence in front of the camera
                    with confidence and adaptability.
                  </p>
                  <p className="text-stone-600 font-light leading-relaxed text-lg relative z-10">
                    Open to collaborations, GEKTA is excited to work with
                    creatives from various backgrounds, bringing fresh energy,
                    dedication, and a growing artistic vision to every project.
                  </p>
                </div>

                <div className="flex flex-col items-start pl-4 border-l-2 border-pink-200">
                  <span className="font-script text-6xl text-stone-800 mb-1 transform -rotate-3">
                    Gekta
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-pink-400 font-bold">
                    Denpasar Selatan, Bali
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
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
                    Available for muse makeup, photoshoots, talent, and upcoming
                    campaigns.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-stone-600 hover:text-pink-500 transition-colors cursor-pointer group">
                      <div className="w-12 h-12 rounded-full bg-white border border-pink-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <Phone size={18} />
                      </div>
                      <span className="font-medium tracking-wide">
                        08873543230
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-stone-600 hover:text-pink-500 transition-colors cursor-pointer group">
                      <div className="w-12 h-12 rounded-full bg-white border border-pink-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <Instagram size={18} />
                      </div>
                      <span className="font-medium tracking-wide">
                        @desakkpuspita
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
            {[Instagram, Twitter, Phone].map((Icon, idx) => (
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
