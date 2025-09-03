"use client";

import { useRef } from "react";

export interface TiltEffectOptions {
  /**
   * The larger the value, the smaller the tilt effect.
   * This divisor scales the rotation based on cursor position.
   *
   * @default 8
   */
  sensitivity?: number;

  /**
   * The 3D perspective of the element in pixels.
   * Lower values create a stronger depth effect.
   *
   * @default 600
   */
  perspective?: number;
}

/**
 * React hook that adds a 3D tilt effect based on cursor position over an element.
 *
 * It sets the CSS variables `--rotate-x` and `--rotate-y`, which can be used
 * in a class like `.tilt-card`:
 *
 * ```css
 * .tilt-card {
 *   transform: perspective(var(--perspective, 600px))
 *     rotateX(var(--rotate-x, 0))
 *     rotateY(var(--rotate-y, 0));
 *   transition: transform 0.3s ease;
 * }
 * ```
 *
 * ### Usage
 * ```tsx
 * const tilt = useTiltEffect({ sensitivity: 10 });
 *
 * <div
 *   ref={tilt.ref}
 *   onMouseMove={tilt.onMouseMove}
 *   onMouseLeave={tilt.onMouseLeave}
 *   className="tilt-card"
 * />
 * ```
 */
export function useTiltEffect<T extends HTMLElement>(
  options: TiltEffectOptions = {}
) {
  const { sensitivity = 8, perspective = 600 } = options;
  const ref = useRef<T | null>(null);

  const setRotation = (rotateX: number, rotateY: number) => {
    if (!ref.current) return;
    ref.current.style.setProperty("--rotate-x", `${rotateX}deg`);
    ref.current.style.setProperty("--rotate-y", `${rotateY}deg`);
    ref.current.style.setProperty("--perspective", `${perspective}px`);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / sensitivity;
    const rotateY = (centerX - x) / sensitivity;

    setRotation(rotateX, rotateY);
  };

  const onMouseLeave = () => {
    setRotation(0, 0);
  };

  return { ref, onMouseMove, onMouseLeave };
}
