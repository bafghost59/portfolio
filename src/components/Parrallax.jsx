
"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ParallaxItem({ item }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 150);

  return (
    <section className="img-container">
      <div ref={ref}>
        <img
          src={item.image}
          alt={item.title}
        />
      </div>
      <motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >
        {item.title}
      </motion.h2>
    </section>
  );
}

export default function Parallax({ items }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="example">
      {items.map((item) => (
        <ParallaxItem key={item.id} item={item} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      <StyleSheet />
    </div>
  );
}

function StyleSheet() {
  return (
    <style>{`
      html {
        scroll-snap-type: y mandatory;
      }

      .img-container {
        height: 100vh;
        scroll-snap-align: start;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }

      .img-container > div {
        width: 300px;
        height: 400px;
        margin: 20px;
        background: #1e1e2f;
        overflow: hidden;
        border-radius: 24px;
        box-shadow: 0 18px 45px rgba(0,0,0,0.7);
      }

      .img-container img {
        width: 300px;
        height: 400px;
        object-fit: cover;
      }

      @media (max-width: 500px) {
        .img-container > div {
          width: 200px;
          height: 260px;
        }

        .img-container img {
          width: 200px;
          height: 260px;
        }
      }

      .img-container h2 {
        color: #e0aaff;
        margin: 0;
        font-family: "Inter", system-ui, sans-serif;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        position: absolute;
        top: calc(50% - 12px);
        left: calc(50% + 140px);
      }

      .progress {
        position: fixed;
        left: 0;
        right: 0;
        height: 4px;
        background: #10002B;
        bottom: 32px;
        transform: scaleX(0);
        transform-origin: 0 50%;
      }
    `}</style>
  );
}
