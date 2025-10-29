gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 2,
  onComplete: () => {
    gsap.to(".card", {
      boxShadow: "0 20px 80px rgba(29, 209, 161, 0.6)", // glow effect
      repeat: -1, // infinite
      yoyo: true, // reverse on each repeat
      duration: 1
    });
  }
});