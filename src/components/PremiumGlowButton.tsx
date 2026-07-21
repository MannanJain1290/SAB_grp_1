"use client";

import React, { useRef, useEffect } from 'react';
import './PremiumGlowButton.css';

interface PremiumGlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  href?: string;
}

export default function PremiumGlowButton({
  children,
  className = "",
  as: Component = "button",
  ...props
}: PremiumGlowButtonProps) {
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovering = false;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      isHovering = true;
      const rect = button.getBoundingClientRect();
      // Instantly set current to target to avoid the glow sliding in from 0,0
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      currentX = targetX;
      currentY = targetY;
      button.style.setProperty('--x', `${currentX}px`);
      button.style.setProperty('--y', `${currentY}px`);
      button.style.setProperty('--glow-opacity', '1');
    };

    const handleMouseLeave = () => {
      isHovering = false;
      button.style.setProperty('--glow-opacity', '0');
    };

    const animate = () => {
      if (isHovering) {
        // Lerp for smooth magnetic light effect
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;

        button.style.setProperty('--x', `${currentX}px`);
        button.style.setProperty('--y', `${currentY}px`);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Component
      ref={buttonRef}
      className={`premium-glow-button ${className}`}
      {...props}
    >
      <div className="premium-glow-bloom"></div>
      <div className="premium-glow-border"></div>
      <div className="premium-glow-inner">
        {children}
      </div>
    </Component>
  );
}
