const breakpointScroll = 625;

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  document.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > breakpointScroll) {
      header.classList.add("header--fixed");
    } else {
      header.classList.remove("header--fixed");
    }
  });
});
