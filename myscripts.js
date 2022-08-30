let vh = window.innerHeight * 0.01;
// Then set the value in the --vh custom property to the root of the document.
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Listen to the resize event.
window.addEventListener('resize', () => {
  // Execute the same script as before.
  let vh = window.innerHeight * 0.01; document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Jquery script for the sticky navbar.
$(document).ready(function () {
  $(window).scroll(function () {
    var height = window.innerHeight;
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > height) {
      $('#navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < height + 1) {
      $('#navbar').removeClass('navbar-fixed');
    }
  });
});

// Function to apply animation classes to elements as they scroll into view.
const animator = (target, anim) => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add(anim);
      }
      else {
        entry.target.classList.add('none');
      }
    })
  })
  target.forEach(item => {
    observer.observe(item)
  })
}

const fadeTarget = document.querySelectorAll('.fade-target');
animator(fadeTarget, 'fade-animate');

const glowTarget = document.querySelectorAll('#adam');
animator(glowTarget, 'glow-animate');

const slideSideTarget = document.querySelectorAll('.slide-side-target');
animator(slideSideTarget, "slide-side-animate");

const left = document.querySelectorAll(".left");
animator(left, "slam-animate");

const slideUpTarget = document.querySelectorAll(".slide-up-target");
animator(slideUpTarget, "slide-up-animate");

const swingUpTarget = document.querySelectorAll(".swing-up-target");
animator(swingUpTarget, "swing-up-anim");

const scaleUpTarget = document.querySelectorAll("#scale-up-target");
animator(scaleUpTarget, "scale-up-anim");


const emptyChecker = () => {
  let name = document.getElementById("name").value;
  let comment = document.getElementById("comment").value;
  if (comment == "" || name == "") {
    alert("Please enter your name and a message");
    return false;
  };
}