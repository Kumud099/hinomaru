gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const lenis = new Lenis();

gsap.from("#header span", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 20,
  stagger: 0.5,
});

gsap.to(".absolute.inset-0", {
  yPercent: 30,
  ease: "none",
  scrollTrigger: {
    trigger: "section",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

var videoContainer = document.getElementById("videoContainer");
var navbarItems = document.querySelector("nav");
var aboutUsContainer = document.querySelector("#aboutUsContainer");

// our services section animation
if (window.matchMedia("(min-width: 1024px)").matches) {
  // Runs only on large screens
  gsap.registerPlugin(ScrollTrigger);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
      start: "top top",
      end: "+=1000",
      scrub: true,
      pin: true,
    },
  });

  gsap.utils.toArray(".card").forEach((card, index) => {
    timeline.from(card, {
      x: 200,
      opacity: 0,
      duration: 1,
      delay: index * 0.5,
    });
  });
}
//
gsap.to("#videoContainer1", {
  width: "40%",
  height: "50%",
  scrollTrigger: {
    trigger: "#videoContainer",
    scrub: true,
    start: "top top",
    end: "bottom top",
  },
});

gsap.from(".about-us", {
  opacity: 0,
  y: 20,
  scrollTrigger: {
    trigger: "#hero",
    start: "bottom 60%",
    stagger: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  let scrollingText = document.getElementById("scrollingText");
  
  // Duplicate the content to make it appear seamless
  let duplicateContent = scrollingText.innerHTML;
  scrollingText.innerHTML += duplicateContent + duplicateContent; // Tripled for a smoother loop

  let textWidth = scrollingText.scrollWidth / 2; // Since we tripled it

  gsap.to(scrollingText, {
    x: -textWidth, // Moves left by one segment
    duration: 10, // Adjust speed (higher = slower)
    ease: "linear",
    repeat: -1, // Infinite loop
    modifiers: {
      x: gsap.utils.wrap(-textWidth, 0), // Ensures seamless loop
    },
  });
});


// lenis
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
ScrollTrigger.refresh();

//==============================FORM HOME_PAGE==========================================

// About us and after about us click me section
// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  var textElement = document.getElementById("header");
  // Set timeout to show text after 3 seconds
  setTimeout(function () {
    // Remove opacity-0 to show text after 3 seconds
    textElement.classList.remove("opacity-0");
    textElement.classList.add("opacity-100");
  }, 100);
});

document.addEventListener("DOMContentLoaded", function () {
  const blogContainer = document.getElementById("blog-container");
  const scrollLeftButton = document.getElementById("scroll-left");
  const scrollRightButton = document.getElementById("scroll-right");

  // Scroll left
  scrollLeftButton.addEventListener("click", () => {
    blogContainer.scrollBy({
      left: 525,
      behavior: "smooth",
    });
  });

  // Scroll right
  scrollRightButton.addEventListener("click", () => {
    blogContainer.scrollBy({
      left: 525,
      behavior: "smooth",
    });
  });
});

const sections = document.querySelectorAll("section"); // All sections on the page

window.addEventListener("scroll", () => {
  let inHeroSection = false; // This will track if the user is currently in the Hero section

  sections.forEach((section) => {
    const sectionTop = section.offsetTop; // Distance from top of the section to the top of the page
    const sectionHeight = section.clientHeight; // Height of the section

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      if (section.id === "hero") {
        inHeroSection = true; // User is currently within the Hero section
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const aboutUsSection = document.getElementById("aboutUsContainer");
  const animatedCircle = document.querySelector(".animate-circle");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove the class and re-add it to restart the animation
          animatedCircle.classList.remove("animate-circle");
          void animatedCircle.offsetWidth; // Force reflow
          animatedCircle.classList.add("animate-circle");
        }
      });
    },
    { threshold: 0.5 } // Adjust threshold if needed
  );

  observer.observe(aboutUsSection);
});
// Create custom cursor
const cursor = document.createElement("div");

document.body.appendChild(cursor);

const servicesSection = document.querySelector("#services");





