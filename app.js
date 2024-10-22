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
    left: 52,
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

  function cardHoverEffect(){
    document.querySelectorAll(".cnt")
    .forEach(function(cnt){
      let showingImage;
   
      cnt.addEventListener("mousemove", function(dets){
        document.querySelector(".cursor").children[dets.target.dataset.index].style.opacity = 1;
        showingImage = dets.target;
        document.querySelector(".cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
        showingImage.style.filter = "grayscale(1)";
   
        document.querySelector(".work").style.backgroundColor = "#" +  dets.target.dataset.color;
      });
      
      cnt.addEventListener("mouseleave", function(dets){
        document.querySelector(".cursor").children[showingImage.dataset.index].style.opacity = 0; 
        showingImage.style.filter = "grayscale(0)";

        document.querySelector(".work").style.backgroundColor = "#fff";
      });
    });
  }   

  locoInitialise();
  cardHoverEffect();

  
