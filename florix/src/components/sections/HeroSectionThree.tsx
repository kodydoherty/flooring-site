"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import Image from "next/image";
import sliderImg31 from "@/assets/img/slider/3-1.jpg";
import sliderImg32 from "@/assets/img/slider/3-2.jpg";
import sliderImg33 from "@/assets/img/slider/3-3.jpg";
import Link from "next/link";

export default function HeroSectionThree() {
    return (
        <div id="home-3" className="hero-area">
            <div className="row hero-area-inner align-items-center">
                <div className="col-xl-7 col-lg-7">
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        speed={3000}
                        slidesPerView={1}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        className="hero-slider-wrap owl-carousel"
                    >
                        <SwiperSlide className="single-slider-item">
                            <Image src={sliderImg31} alt="" className="h-auto"/>
                        </SwiperSlide>
                        <SwiperSlide className="single-slider-item">
                            <Image src={sliderImg32} alt="" className="h-auto"/>
                        </SwiperSlide>
                        <SwiperSlide className="single-slider-item">
                            <Image src={sliderImg33} alt="" className="h-auto"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="col-xl-5 col-lg-5">
                    <div className="hero-content-wrap">
                        <div className="section-title">
                            <h2 className="visible-slowly-right">Strong, Stylish, Durable, Perfect Floors!</h2>
                        </div>
                        <p className="wow fadeInUp animated" data-wow-delay="400ms">Transform your space with floors
                            that combine strength, style, and durability. Our flooring solutions are designed to
                            withstand daily wear while enhancing the beauty of your home or business, providing comfort
                            and elegance for years to come.</p>
                        <Link href="/about" className="bordered-btn mt-30 wow fadeInDown animated"
                           data-wow-delay="600ms">Learn More<i className="fa-light fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}