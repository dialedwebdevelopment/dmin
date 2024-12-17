import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Instagram, Linkedin, Twitter } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionFooter = () => {

  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src="/images/dwlogonew2.webp" className="footer-logo" alt="" />
          <h1 className="subheadline white" >Dialedweb</h1>
          <p className="description grey"  >Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality</p>
        </div>
        <div className="footer-content-right"  >
          <div className="footer-content-right-column">
            <h2 className="description white" >Company</h2>
            <div className="footer-column-contents">
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Home</p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >About</p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Projects</p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Get In Touch</p>
              </div>
            </div>
          </div>
          <div className="footer-content-right-column" >
            <h2 className="description white" >Legal</h2>
            <div className="footer-column-contents">
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Terms of Service</p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Privacy Policy</p>
              </div>
              <div className="footer-column-contents-item">
                <p className="description grey hover-text-grey" >Cookie Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider"/>
      <div className="footer-content-bottom">
        <p className="small-description grey" >© 2024 Dialedweb All Rights Reserved</p>
        <div className="footer-socials">
          <Instagram strokeWidth={1.25} className="footer-socials-icon" />
          <Twitter strokeWidth={1.25} className="footer-socials-icon" />
          <Linkedin strokeWidth={1.25} className="footer-socials-icon" />
        </div>
      </div>
    </section>
  );
};