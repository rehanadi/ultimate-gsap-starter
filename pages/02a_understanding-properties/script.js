import gsap from "gsap";

gsap.to(".box", {
  x: 50,
  y: 50,
  opacity: 1,
  rotation: 360,
  background: "#ff6f61",
  borderRadius: "50%",
  scale: 1.25,
  duration: 2,
  delay: 0.5, // Delay before the animation starts
  ease: "power1.inOut", // Easing function for smooth animation
  repeat: -1, // Number of times to repeat the animation
  yoyo: true, // Enable yoyo effect for smooth back-and-forth animation
  repeatDelay: 0.25, // Delay between repeats
  // paused: true, // Pause all the animations initially
  stagger: 1, // Apply the offset timing for each element of boxes
});