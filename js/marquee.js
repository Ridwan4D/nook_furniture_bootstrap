document.addEventListener("DOMContentLoaded", () => {
    const marqueeContainer = document.querySelector(".logos");
    const marqueeSlide = document.querySelector(".logos-slide");
  
    marqueeContainer.innerHTML += marqueeSlide.outerHTML;
  
    let currentPosition = 0;
    const speed = 10;
  
    function animateMarquee() {
      currentPosition -= speed;
      if (currentPosition <= -marqueeSlide.offsetWidth) {
        currentPosition = 0;
      }
      marqueeContainer.style.transform = `translateX(${currentPosition}px)`;
      requestAnimationFrame(animateMarquee);
    }
  
    animateMarquee();
  });
  