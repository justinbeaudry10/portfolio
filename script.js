$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});

$(function () {
  // Side scrolling skills
  $("#skills").mousemove(function (e) {
    let containerWidth = $("#skills").innerWidth();
    let containerStart = $("#skills").offset().left;
    let scroller = $("#scroller");
    let scrollerWidth = scroller.outerWidth();

    scroller.css({
      left:
        (containerWidth - scrollerWidth) *
        ((e.pageX - containerStart) / containerWidth),
    });
  });

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
    sectionObserver.observe(section);
  });
});
