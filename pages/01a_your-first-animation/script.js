gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 2,
  onComplete: () => {
    gsap.to(".card", {
      y: -20, // move up by 20 pixels
      repeat: -1, // infinite
      yoyo: true, // reverse on each repeat
      duration: 0.5
    });
  }
});