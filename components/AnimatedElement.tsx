"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  animation: string;
  delay?: number;
  threshold?: number;
  className?: string;
}

export default function AnimatedElement({
  children,
  animation,
  delay = 0,
  threshold = 0.15,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            setVisible(true);
            observer.unobserve(el);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        visible ? `animate__animated animate__${animation}` : "opacity-0"
      }`}
      style={visible ? { animationDuration: "0.7s" } : undefined}
    >
      {children}
    </div>
  );
}
