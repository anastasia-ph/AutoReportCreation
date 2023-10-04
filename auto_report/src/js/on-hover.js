let elements = document.getElementsByClassName("data_percentage__button-container")
for (element of elements) {


    element.addEventListener("mouseover", function (e) {
        if (e.target.localName === "label") {
            e.target.classList.add("label__text_underscored")
        }

    })
    element.addEventListener("mouseout", function (e) {
        if (e.target.localName === "label") {
            e.target.classList.remove("label__text_underscored")
        }

    })
}

