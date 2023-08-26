// Header-top version mobile avec bouton fermer.
const btnClose = document.querySelector(".header_top_content_close");
const header = document.querySelector("header");
const mobileHeaderTop = document.querySelector(".header_top");
let headerTopClone = null;
btnClose.addEventListener("click", function() {
    headerTopClone = mobileHeaderTop.cloneNode(true);
    mobileHeaderTop.remove();
    header.style.gridTemplate = "0fr 1fr / 1fr 1fr 1fr 1fr 1fr 1fr";
    header.style.maxHeight = "53px";
});
window.addEventListener("resize", function() {
    if (window.innerWidth > 1024 && headerTopClone) header.appendChild(headerTopClone);
});

//# sourceMappingURL=index.4f492e9b.js.map
