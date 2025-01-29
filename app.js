let crs = document.querySelector("#custom-crs");
let main = document.querySelector(".main");

window.addEventListener("mousemove", function(dets){
    crs.style.left = dets.clientX + "px";
    crs.style.top = dets.clientY + "px";
})

function revealToSpan() {
  document
    .querySelectorAll(".reveal")

    .forEach(function (elem) {
      let spanParent = document.createElement("span");
      let spanChild = document.createElement("span");

      spanParent.classList.add("parent");
      spanChild.classList.add("child");

      spanChild.innerHTML = elem.innerHTML;
      spanParent.appendChild(spanChild);

      elem.innerHTML = "";
      elem.appendChild(spanParent);
    });
}
revealToSpan();

let tl = gsap.timeline();
tl.from(".child span", {
  x: 100,
  stagger: 0.2,
  duration: 1.5,
  ease: Power3.easeInOut,
})

  .to(".parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut,
  })
  .to(".loader", {
    height: 0,
    duration: 1,
    ease: Circ.easeInOut,
  })
  .to(".green", {
    height: "100%",
    bottom: 100,
    duration: 1.5,
    delay: -10,
    ease: Circ.easeInOut,
  })
  .to(".green", {
    height: "0%",
    duration: 1.3,
    delay: -0.25,
    ease: Expo.easeInOut,
  })
  .from(".second-row h1", {
    top: -100,
    duration: 1.5,
    ease: Circ.easeInOut,
  })

  .to(".second-row .vs-ani", {
    bottom: 20,
    right: -60,
    duration: 0.9,
    delay: -3,
  })
  .to(".row h1", {
    left: "-160",
    duration: 0.9,
    delay: -3,
  })
  .to(".second-row h1", {
    fontSize: "12vw",
    duration: 0.9,
    delay: -3,
  })

  function locoInitialise(){
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
  });
  }

  locoInitialise();
  cardHoverEffect();

  
