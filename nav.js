(function () {

  const NAV_HTML = `
    <div class="nav">
      <div class="container">

        <div class="nav-inner">

          <!-- Logo -->
          <a class="brand" href="index.html">
            THz Electrodynamics Lab @ CAS-Air
          </a>

          <!-- Navigation -->
          <div class="menu">

            <a href="index.html"
               data-nav="index">
              Home
            </a>

            <a href="research.html"
               data-nav="research">
              Research
            </a>

            <a href="people.html"
               data-nav="people">
              People
            </a>

            <a href="publications.html"
               data-nav="publications">
              Publications
            </a>

            <a href="news.html"
               data-nav="news">
              News
            </a>

            <a href="gallery.html"
               data-nav="gallery">
              Gallery
            </a>

            <a href="join.html"
               data-nav="join">
              Join
            </a>

            <a class="cta"
               href="contact.html"
               data-nav="contact">
              Contact
            </a>

          </div>

        </div>

      </div>
    </div>
  `;

  // Navigation placeholder
  const mount = document.getElementById("site-nav");

  if (!mount) return;

  mount.innerHTML = NAV_HTML;

  // Highlight current page
  const page = document.body.dataset.page;

  if (page) {

    const current =
      mount.querySelector(`[data-nav="${page}"]`);

    if (current) {
      current.classList.add("active");
      current.setAttribute("aria-current", "page");
    }

  }

})();
