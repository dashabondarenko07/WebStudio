(() => {
  const refs = {
    openMobMenuBtn: document.querySelector("[data-mob-menu-open]"),
    closeMobMenuBtn: document.querySelector("[data-mob-menu-close]"),
    mobMenu: document.querySelector("[data-mob-menu]"),
  };

  refs.openMobMenuBtn.addEventListener("click", toggleMobMenu);
  refs.closeMobMenuBtn.addEventListener("click", toggleMobMenu);

  function toggleMobMenu() {
    refs.mobMenu.classList.toggle("is-hidden");
  }
})();
