/* eslint-disable react/jsx-key */
import React, { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { ArrowUpRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import Image from "next/image";
import { Item3 } from "./HeroModel/Coins";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionHero = () => {

  return (
    <section className="hero">
      <div className="hero-background-element-small" />
      <div className="hero-background-element-grid-small" />
      <div className="hero-content">
        <div className="hero-content-row">
          <div className="hero-content-left">
            <div className="hero-textbox">
              <div className="hero-titlebox">
                <div className="hero-titlebox-gradient" />
                <h1 className="headline white" >Crafting Digital <br /> Masterpieces</h1>
              </div>
              <p className="big-description grey" >Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality</p>
            </div>
            <div className="hero-buttons-row">
              <button className="button button-transparent-border" >
                <div className="button-content">
                  <span className="small-description">See More</span>
                  <span className="small-description">See More</span>
                </div>
                <div className="button-circle" >
                  <ArrowUpRight className="button-icon button-icon-180" />
                </div>
              </button>
              <button className="button button-transparent-border" >
                <div className="button-content">
                  <span className="small-description">Get In Touch</span>
                  <span className="small-description">Get In Touch</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </button>
              </div>
          </div>
          <div className="hero-content-right" >
            <Canvas style={{ pointerEvents: 'auto', width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: 1 }} camera={{ position: [ 2, 0, 10], fov: 35 }}>
                <Float rotationIntensity={0.5} floatIntensity={2} speed={2}>
                <Suspense fallback >
                  <Item3 />
                </Suspense>
                </Float>
                <Environment preset="sunset" />
                <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} enableRotate={true} enablePan={false} />
            </Canvas>
          </div>
        </div>
        <div className="hero-content-bottom" >
          <Marquee className="hero-content-bottom-row" gradient={true} gradientColor="#010101" gradientWidth={250}>
            {[
              "/logos/adobe.webp", 
              "/logos/webflow.svg", 
              "/logos/stripe.svg", 
              "/logos/adobe.webp", 
              "/logos/webflow.svg", 
              "/logos/stripe.svg", 
              "/logos/adobe.webp", 
              "/logos/webflow.svg", 
              "/logos/stripe.svg", 
              "/logos/adobe.webp", 
              "/logos/webflow.svg", 
              "/logos/stripe.svg", 
              "/logos/adobe.webp", 
              "/logos/webflow.svg", 
              "/logos/stripe.svg", 
              "/logos/adobe.webp", 
              "/logos/webflow.svg", 
              "/logos/stripe.svg", 
            ].map((src, i) => (
              <div className="hero-content-bottom-item" key={i}>
                <Image width={100} height={100} src={src} alt={`Marquee item ${i + 1}`} className="hero-content-bottom-image" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};