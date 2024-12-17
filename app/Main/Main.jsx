"use client";
import { ReactLenis, useLenis } from 'lenis/react'
import { SectionHero } from "./SectionHero";
import { SectionFooter } from "./SectionFooter";
import "./main.css";

const Main = () => {

  return (
    <ReactLenis root>
      <SectionHero />
      <SectionFooter />
    </ReactLenis>
  );
};

export default Main;
