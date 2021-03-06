$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});

$(function () {
  // Force scroll to top on page reload

  // Smooth scrolling
  $(".nav_links").on("click", (e) => {
    e.preventDefault();

    if ($(e.target).hasClass("nav_link")) {
      let id = $(e.target).attr("href");
      $(`${id}`)[0].scrollIntoView({ behavior: "smooth" });
    }
  });
  ////////////////////////////////////////////////////////
  // Sticky nav bar
  const stickyNav = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      $(".nav-sticky").removeClass("hidden");
    } else {
      $(".nav-sticky").addClass("hidden");
    }
  };

  const homeObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-1px`,
  });

  homeObserver.observe($("#home")[0]);

  ///////////////////////////////////////////////////////
  // Reveal sections
  const hiddenSections = document.querySelectorAll(".section--hidden");

  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  hiddenSections.forEach((section) => {
    console.log(section);
    sectionObserver.observe(section);
  });

  ///////////////////////////////////////////////////////
  // Nav fade animation
  // const handleHover = function (e) {
  //   if ($(e.target).hasClass("nav_link")) {
  //     const siblings = e.target.closest("nav").querySelectorAll(".nav_link");

  //     siblings.forEach((el) => {
  //       if (el !== e.target) el.style.opacity = this;
  //     });
  //     // $(e.target)
  //     //   .closest(".nav_link")
  //     //   .each(function () {
  //     //     console.log(e.target, this);
  //     //   });
  //   }
  // };

  // $(".nav").on("mouseover", handleHover.bind(0.5));
  // $(".nav").on("mouseout", handleHover.bind(1));
});
