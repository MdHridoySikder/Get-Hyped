import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useLenis — initializes Lenis smooth scrolling and wires it to GSAP's
 * ScrollTrigger via the GSAP ticker so they share the same RAF loop.
 *
 * Call once at the top-level layout component.
 */
export function useLenis() {
  useEffect(() => {
    // ── 1. Create Lenis instance ──────────────────────────────────────────
    const lenis = new Lenis({
      duration: 1.2, // seconds per full scroll gesture
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    // ── 2. Sync Lenis position into ScrollTrigger ─────────────────────────
    lenis.on("scroll", ScrollTrigger.update);

    // ── 3. Drive Lenis from GSAP's global ticker (single RAF loop) ─────────
    const tickerCb = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0); // prevent GSAP catching up after tab blur

    return () => {
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);
}
