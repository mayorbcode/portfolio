import { gsap } from 'gsap';

const animation = gsap.timeline();

const animations = {
  homeIn: () => {
    return  (
      animation
        // .from('.selfie', {scale: 0, delay: 1, ease: 'back', duration: 1})
        .from('.top div:first-child', {xPercent: -100, ease: 'back', duration: 0.5}, '-=0.5')
        .from('.top div:nth-child(2)', {yPercent: -400, ease: 'back', duration: 0.5}, '-=0.25')
        .from('.top div:last-child', {xPercent: 100, ease: 'back', duration: 0.5}, '-=0.25')
        .from('.bottom a', {yPercent: 400, ease: 'back', duration: 0.5}, '-=0.25')
        .from('.home .svg', {yPercent: 150, ease: 'back', duration: 0.5}, '<')
        .fromTo('.home .svg', { y: 0 }, {y: 30, repeat: -1, ease: 'linear', duration: 2, yoyo: true, delay: .4})
    )
  },
  homeOut: () => {
    return (
      animation
        .fromTo('.selfie', {scale: 1}, {scale: 0, delay: 0, duration: 0.5})
        .to('.top div:first-child', {xPercent: -100, duration: 0.5}, '<')
        .to('.top div:nth-child(2)', {yPercent: -400, duration: 0.5}, '<')
        .to('.top div:last-child', {xPercent: 100, duration: 0.5}, '<')
        .to('.bottom a', {yPercent: 400, duration: 0.5}, '<')
        .to('.home .svg', {yPercent: -500, opacity: 0, duration: 0.5}, '<')
    )
  },
  aboutIn: () => {
    return (
      animation
      .from('.about .svg', {yPercent: 150, ease: 'back', duration: 0.5, delay: 1}, '<')
      .fromTo('.about .svg', { y: 0 }, {y: 30, repeat: -1, ease: 'linear', duration: 2, yoyo: true, delay: .4})
    )
  },
  aboutOut: () => {
    return (
      animation
      .to('.about .svg', {yPercent: -1000, delay: 0, duration: 0.5})
    )
  }
}

export default animations;