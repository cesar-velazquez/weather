function loader() {
    setTimeout(function () {
        document
            .querySelector(".content__loader")
            .classList.add("content__loader__hidden");        
    }, 500);
}

window.addEventListener("load", function () {
    loader();
});
