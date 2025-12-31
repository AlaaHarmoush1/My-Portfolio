import { FONT_WEIGHTS } from "#constants";
import gsap from "gsap";

export const setupTextHover = (container, type) => {
    if (!container) return;

    const letters = container.querySelectorAll("span")
    const { min, max, default: base } = FONT_WEIGHTS[type];

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, { duration, ease: 'power2.out', fontVariationSettings: `'wght ${weight}` })
    }

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left

        letters.forEach((letter) => {
            const { left: l, width: w } = container.getBoundingClientRect();
            const distance = Math.abs(mouseX - ( l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 2000)

            animateLetter(letter, min + ( max - min) * intensity)
        })
    }

    container.addEventListener("mousemove", handleMouseMove)
}