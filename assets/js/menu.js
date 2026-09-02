document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const closeSidebar = document.getElementById("close-sidebar");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  const filterBtns = document.querySelectorAll(".filter-btn");

  function openMenu() {
    sidebar.classList.add("open");
    backdrop.classList.add("active");
  }

  function closeMenu() {
    sidebar.classList.remove("open");
    backdrop.classList.remove("active");
  }

  if (menuToggle) menuToggle.addEventListener("click", openMenu);
  if (closeSidebar) closeSidebar.addEventListener("click", closeMenu);
  if (backdrop) backdrop.addEventListener("click", closeMenu);

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });
});