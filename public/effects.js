(function () {
  function ready(fn) {
    if (window.jQuery) {
      fn(window.jQuery);
      return;
    }
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      if (window.jQuery) {
        clearInterval(timer);
        fn(window.jQuery);
      } else if (tries > 50) {
        clearInterval(timer);
      }
    }, 50);
  }

  function syncThemeIcons() {
    var isDark = document.documentElement.classList.contains("dark");
    var sun = document.querySelector(".icon-sun");
    var moon = document.querySelector(".icon-moon");
    if (!sun || !moon) return;
    sun.classList.toggle("hidden", !isDark);
    moon.classList.toggle("hidden", isDark);
  }

  function setTheme(theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
    syncThemeIcons();
  }

  document.addEventListener("DOMContentLoaded", function () {
    syncThemeIcons();
    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var next = document.documentElement.classList.contains("dark")
          ? "light"
          : "dark";
        setTheme(next);
      });
    }
  });

  ready(function ($) {
    var $header = $("#site-header");
    var reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    $(window).on("scroll", function () {
      $header.toggleClass("is-scrolled", $(window).scrollTop() > 12);
    });

    $('a[href^="#"]').on("click", function (e) {
      var href = $(this).attr("href");
      if (!href || href === "#") return;
      var $target = $(href);
      if (!$target.length) return;
      e.preventDefault();
      $("html, body").stop().animate(
        { scrollTop: $target.offset().top - 72 },
        reduceMotion ? 0 : 650,
        "swing",
      );
    });

    if (!reduceMotion && "IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              $(entry.target).addClass("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );

      $(".reveal").each(function () {
        observer.observe(this);
      });
    } else {
      $(".reveal").addClass("is-visible");
    }

    var sectionIds = $("[id]")
      .map(function () {
        return this.id;
      })
      .get()
      .filter(Boolean);

    function updateActiveNav() {
      var scrollPos = $(window).scrollTop() + 100;
      var current = "";
      sectionIds.forEach(function (id) {
        var $section = $("#" + id);
        if ($section.length && $section.offset().top <= scrollPos) {
          current = "#" + id;
        }
      });
      $(".nav-link").removeClass("is-active");
      if (current) {
        $('.nav-link[data-nav="' + current + '"]').addClass("is-active");
      }
    }

    $(window).on("scroll", updateActiveNav);
    updateActiveNav();

    if (!reduceMotion) {
      $(".card").on("mousemove", function (e) {
        var $card = $(this);
        var rect = this.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var rotateY = ((x / rect.width) - 0.5) * 8;
        var rotateX = (0.5 - y / rect.height) * 8;
        $card.css({
          transform:
            "perspective(900px) rotateX(" +
            rotateX.toFixed(2) +
            "deg) rotateY(" +
            rotateY.toFixed(2) +
            "deg) translateY(-4px)",
        });
      });

      $(".card").on("mouseleave", function () {
        $(this).css({ transform: "" });
      });

      $(".profile-orb").on("mousemove", function (e) {
        var rect = this.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
        var y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
        $(this)
          .find(".profile-photo")
          .css({
            transform:
              "scale(1.05) translate(" + x.toFixed(1) + "px, " + y.toFixed(1) + "px)",
          });
      });

      $(".profile-orb").on("mouseleave", function () {
        $(this).find(".profile-photo").css({ transform: "" });
      });
    }

    $(".btn-primary, .btn-outline").on("mousedown", function () {
      $(this).css("transform", "scale(0.97)");
    });
    $(".btn-primary, .btn-outline").on("mouseup mouseleave", function () {
      $(this).css("transform", "");
    });
  });
})();
