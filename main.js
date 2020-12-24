$(window).on('beforeunload', function() {
  $('body').hide();
  $(window).scrollTop(0);
});

sectionHomeTitleImage = new TimelineMax ({});
HomeSectionSubtextDelayedSlideUp = new TimelineMax ({});
NavigationMenuLinkDelayedSlideRight = new TimelineMax ({});


sectionHomeTitleImage.from('.home-section-title-container', 1.25, {opacity:0, ease:Power4.easeOut})
.from('.home-section-landing-image', 1.25, {opacity:0, ease:Power4.easeOut})
HomeSectionSubtextDelayedSlideUp.from('.home-section-subtext-span',2.5, {y:"100%", ease:Power4.easeOut, delay: 2})
NavigationMenuLinkDelayedSlideRight.from('.navigation-menu-h1-link', 2.5, {x:"100%", ease:Power4.easeOut, delay: 3})

const scrollText = document.querySelector(".home-section-title");
var SectionInitativesHeight = document.getElementById("section-initiatives-id").offsetHeight




window.addEventListener("scroll", () => {
  scrollText.style.left = `${0.3 * scrollY}px`;
  if (scrollY > (SectionInitativesHeight * 2)) {
    NavigationMenuLinkDelayedSlideRight.to('.navigation-menu-h1-link', 1.5, {x:"100%", ease:Power4.easeOut});
  }   
});   





AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  //initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  //debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  //throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  //offset: 120, // offset (in px) from the original trigger point
 // delay: 0, // values from 0 to 3000, with step 50ms
  //duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-top', // defines which position of the element regarding to window should trigger the animation

});