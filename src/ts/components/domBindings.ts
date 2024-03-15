const shopWrapper = document.getElementById("shop-wrapper") as HTMLElement;
const shopExpandBtn = document.getElementById(
  "shop-expand-btn"
) as HTMLButtonElement;
shopExpandBtn.addEventListener("click", () => {
  shopWrapper.classList.toggle("hide");
  shopExpandBtn.classList.toggle("rotate");
});
