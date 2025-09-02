const burgerBtnNode = document.querySelector(".header__burger"),
    headerNavNode = document.querySelector(".header__nav");

const handleClass = (el, classText) =>{
    el.classList.toggle(classText);
}

burgerBtnNode.addEventListener("click", ()=> {
    if(window.innerWidth > 480) return;

    handleClass(headerNavNode, "is-open");
})