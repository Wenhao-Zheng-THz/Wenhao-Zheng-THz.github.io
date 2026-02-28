(function () {
  const NAV_HTML = `
    <div class="nav">
      <div class="container">
        <div class="nav-inner">
          <div class="brand">THz Electrodynamics Lab @ CAS-Air</div>
          <div class="menu">
            <a href="index.html" data-nav="index">Home</a>
            <a href="research.html" data-nav="research">Research</a>
            <a href="people.html" data-nav="people">People</a>
            <a href="publications.html" data-nav="publications">Publications</a>
            <a href="news.html" data-nav="news">News</a>
            <a href="join.html" data-nav="join">Join</a>
            <a class="cta" href="contact.html" data-nav="contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  `;

  // 你在每个页面的 <body> 最上面放一个占位：
  // <div id="site-nav"></div>
  const mount = document.getElementById("site-nav");
  if (!mount) return;

  mount.innerHTML = NAV_HTML;

  // 自动高亮当前页
  const page = document.body.getAttribute("data-page") || "";
  if (page) {
    const a = mount.querySelector(`[data-nav="${page}"]`);
    if (a) a.classList.add("active");
  }
})();
