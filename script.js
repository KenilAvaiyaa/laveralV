function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotiveAnimation();


function mouseeffect(){
  
  if (window.innerWidth > 768) {
    Shery.mouseFollower({
      skew: true,
      ease: "cubic-bezier(0.87, 0, 0.13, 1)",
      duration: 1,
    });
  }
  
  Shery.makeMagnet(".logo svg,.b_f_text");
}
mouseeffect()

function navservice() {
  const nav = document.querySelector(".service");
  nav.addEventListener("mouseenter", () => {
    let t2 = gsap.timeline();
    t2.to(".nav_bottom", {
      height: "20vh",
      duration: 0.15,
    });
    t2.to(".nav-elem h5", {
      display: "block",
      duration: 0.2,
    });
    t2.from(".nav-elem h5 span", {
      y: 25,
      stagger: 0.09,
    });
  });
  nav.addEventListener("mouseleave", () => {
    let t2 = gsap.timeline();
    t2.to(".nav_bottom", {
      height: "0vh",
      duration: 0,
    });
    t2.to(".nav-elem h5", {
      display: "none",
    });
  });
}
navservice();

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".home", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  });
  tl.from(".home", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration: 2,
    ease: "expo.out",
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });
  tl.from(".head_text,.support_text,.highlight_text, .home div", {
    y: "100%",
    duration: 2,
    opacity: 0,
    stagger: {
      amount: 0.5,
    },
  });
}
loadingAnimation();

function buttoneffect() {
  let button = document.querySelector(".contect");
  button.addEventListener("mouseenter", () => {
    let t3 = gsap.timeline();
    t3.to(".over", {
      x: "100%",
      duration: 0.5,
      ease: "power4.inOut",
    });
  });
  button.addEventListener("mouseleave", () => {
    let t3 = gsap.timeline();
    t3.to(".over", {
      x: 0,
      duration: 0.5,
    });
  });

  let homebutton = document.querySelector(".head_text svg");
  homebutton.addEventListener("mouseenter", () => {
    console.log("hey");
    let t4 = gsap.timeline();
    t4.to(".head_text svg", {
      scale: 0.8,
      rotation: -30,
      duration: 0.5,
      ease: "power4.inOut",
    });
  });
  homebutton.addEventListener("mouseleave", () => {
    let t4 = gsap.timeline();
    t4.to(".head_text svg", {
      scale: 1,
      rotation: 0,
      duration: 0.5,
      ease: "power4.inOut",
    });
  });
}
buttoneffect();

function navline() {
  let t4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".nav_bottom",
      scrollBy: "body",
      start: "top 10%",
      // markers:true,
      scrub: 0.5,
      duration: 1,
    },
  });
  t4.to("nav", {
    height: "8vh",
    padding: "1vw 4vw",
    ease: "power4.out",
  });
}
navline();

function imginintro() {
  var rightElem = document.querySelectorAll(".elem_conte");

  rightElem.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      gsap.to(elem.childNodes[1], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.childNodes[1], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", (dets) => {
      gsap.to(elem.childNodes[1], {
        x: dets.x - elem.getBoundingClientRect().x - 20,
        y: dets.y - elem.getBoundingClientRect().y - 50,
      });
    });
  });
}
imginintro();

function elemicon() {
  var rightElem = document.querySelectorAll(".elem_conte");

  rightElem.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      // console.log(elem.childNodes[5].childNodes[3].childNodes[1])
      gsap.to(elem.childNodes[5].childNodes[3].childNodes[1], {
        opacity: 0,
        top: "-50%",
        right: "-50%",
      });
      gsap.to(elem.childNodes[5].childNodes[3].childNodes[3], {
        opacity: 1,
        top: "0%",
        right: "0%",
      });
    });
    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.childNodes[5].childNodes[3].childNodes[1], {
        opacity: 1,
        top: "0%",
        right: "0%",
      });
      gsap.to(elem.childNodes[5].childNodes[3].childNodes[3], {
        opacity: 0,
        top: "50%",
        right: "50%",
      });
    });
  });
}
elemicon();

function videoplay() {
  var videodivCenter = document.querySelector(".playbutton");
  var video = document.querySelector(".videodiv video");

  videodivCenter.addEventListener("click", () => {
    video.play(),
      gsap.to("video", {
        opacity: 1,
        transform: "scaleX(1) scaleY(1)",
        borderRadius: "0px",
      });
  });
  video.addEventListener("click", () => {
    video.pause(),
      gsap.to("video", {
        opacity: 0,
        transform: "scaleX(0.7) scaleY(0)",
        borderRadius: "30px",
      });
  });

  var casevideo = document.querySelectorAll(".case_right");

  casevideo.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", () => {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].lode();
    });
  });

  var smallright = document.querySelectorAll(".small");

  smallright.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      // console.log(elem.childNodes[1].childNodes[3].childNodes[1])
      elem.childNodes[3].style.opacity = "0";
      elem.childNodes[5].childNodes[3].play();
      elem.childNodes[5].childNodes[3].style.top = "-70%";
      elem.childNodes[5].childNodes[3].style.display = "inline";
    });
    elem.addEventListener("mouseleave", () => {
      elem.childNodes[3].style.opacity = "1";
      elem.childNodes[5].childNodes[3].style.top = "0%";
      elem.childNodes[5].childNodes[3].style.display = "none";
      elem.childNodes[5].childNodes[3].lode();
    });
    elem.addEventListener("mouseenter", () => {
      // console.log(elem.childNodes[1].childNodes[3].childNodes[1])
      gsap.to(elem.childNodes[1].childNodes[3].childNodes[1], {
        opacity: 0,
        top: "-100%",
        right: "-100%",
      });
      gsap.to(elem.childNodes[1].childNodes[3].childNodes[3], {
        opacity: 1,
        top: "0%",
        right: "0%",
      });
    });
    elem.addEventListener("mouseleave", () => {
      // console.log(elem.childNodes[1].childNodes[3].childNodes[1])
      gsap.to(elem.childNodes[1].childNodes[3].childNodes[1], {
        opacity: 1,
        top: "0%",
        right: "0%",
      });
      gsap.to(elem.childNodes[1].childNodes[3].childNodes[3], {
        opacity: 0,
        top: "100%",
        right: "100%",
      });
    });
  });
}
videoplay();

function button() {
  var cbut = document.querySelector(".case_button");

  cbut.addEventListener("mouseenter", () => {
    console.log("heloo");
    gsap.to(".case_button", {
      padding: "0.6vw 2vw",
    });
    gsap.to(".case_button1", {
      opacity: 0,
      top: "-50%",
      right: "-50%",
    });
    gsap.to(".case_button2", {
      opacity: 1,
      top: "10%",
      right: "10%",
    });
  });
  cbut.addEventListener("mouseleave", () => {
    gsap.to(".case_button", {
      padding: "0.5vw 1vw",
    });
    gsap.to(".case_button1", {
      opacity: 1,
      top: "10%",
      right: "10%",
    });
    gsap.to(".case_button2", {
      opacity: 0,
      top: "50%",
      right: "50%",
    });
  });

  var casestude = document.querySelectorAll(".case_left");

  casestude.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      // console.log(elem.childNodes[1].childNodes[3].childNodes[1])
      gsap.to(elem.childNodes[1].childNodes[3].childNodes[1], {
        opacity: 0,
        top: "-100%",
        right: "-100%",
      });
      gsap.to(elem.childNodes[1].childNodes[3].childNodes[3], {
        opacity: 1,
        top: "0%",
        right: "0%",
      });
    });
    elem.addEventListener("mouseleave", () => {
      // console.log(elem.childNodes[1].childNodes[3].childNodes[1])
      gsap.to(elem.childNodes[1].childNodes[3].childNodes[1], {
        opacity: 1,
        top: "0%",
        right: "0%",
      });
      gsap.to(elem.childNodes[1].childNodes[3].childNodes[3], {
        opacity: 0,
        top: "100%",
        right: "100%",
      });
    });
  });

  var uibutton = document.querySelector(".series_button");
  uibutton.addEventListener("mouseenter", () => {
    console.log("heloo");
    gsap.to(".series_button", {
      padding: "0.6vw 2vw",
    });
    gsap.to(".case_button1", {
      opacity: 0,
      top: "-50%",
      right: "-50%",
    });
    gsap.to(".case_button2", {
      opacity: 1,
      top: "10%",
      right: "10%",
    });
  });
  uibutton.addEventListener("mouseleave", () => {
    gsap.to(".series_button", {
      padding: "0.5vw 1vw",
    });
    gsap.to(".case_button1", {
      opacity: 1,
      top: "10%",
      right: "10%",
    });
    gsap.to(".case_button2", {
      opacity: 0,
      top: "50%",
      right: "50%",
    });
  });
}
button();

function uihovereffect() {
  var uieffect = document.querySelectorAll(".ui_info_con");

  uieffect.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      // console.log(elem.childNodes[5].childNodes[1])
      gsap.to(elem.childNodes[1], {
        top: "0%",
      });
      gsap.to(elem.childNodes[5].childNodes[1], {
        opacity: 0,
        top: "-50%",
        right: "-50%",
      });
      gsap.to(elem.childNodes[5].childNodes[3], {
        opacity: 1,
        top: "0%",
        right: "0%",
      });
    });
    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.childNodes[1], {
        top: "-100%",
      });

      gsap.to(elem.childNodes[5].childNodes[1], {
        opacity: 1,
        top: "0%",
        right: "0%",
      });
      gsap.to(elem.childNodes[5].childNodes[3], {
        opacity: 0,
        top: "50%",
        right: "50%",
      });
    });
  });
}
uihovereffect();

function uiclick() {
  var addclick = document.querySelector(".uiux");
  let flage = 0;

  addclick.addEventListener("click", () => {
    let t10 = gsap.timeline();
    if (flage === 0) {
      addclick.style.height = "80vh";
      t10.to(
        ".drop_icon",
        {
          rotation: 180,
        },
        "hello"
      );
      t10.to(
        ".ui_info_con",
        {
          opacity: 1,
          ease: "power4.inOut",
          duration: 1,
        },
        "hello"
      );
      flage = 1;
    } else {
      addclick.style.height = "20vh";
      t10.to(
        ".ui_info_con",
        {
          opacity: 0,
          ease: "power4.inOut",
          duration: 0.5,
          delay: 0,
        },
        "hello"
      );
      t10.to(
        ".drop_icon",
        {
          rotation: 0,
          delay: 0.3,
        },
        "hello"
      );
      flage = 0;
    }
  });
}
uiclick();

function footericon() {
  var footer = document.querySelector("footer");

  footer.addEventListener("mousemove", () => {
    console.log("he");
    gsap.to(".icon1", {
      opacity: 0,
      rotation: 180,
      duration: 1,
    });
    gsap.to(".icon2", {
      opacity: 1,
      rotation: 360,
      duration: 1,
    });
  });
  footer.addEventListener("mouseleave", () => {
    console.log("he");
    gsap.to(".icon1", {
      opacity: 1,
      rotation: 0,
      duration: 1,
    });
    gsap.to(".icon2", {
      opacity: 0,
      rotation: 270,
      duration: 1,
    });
  });
}
footericon();
