$(function () {
  // Smooth scrolling
  $(".nav_links").on("click", (e) => {
    e.preventDefault();

    if ($(e.target).hasClass("nav_link")) {
      let id = $(e.target).attr("href");
      $(`${id}`)[0].scrollIntoView({ behavior: "smooth" });
    }
  });

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
    rootMargin: `0px`,
  });

  homeObserver.observe($("#home")[0]);
});
