const image_container_array = document.getElementsByClassName("image_container")
const image_select_array = document.getElementsByClassName("image_select")
const carousel_size = 6

for (var i = 0; i < image_container_array.length; i++) {
    image_select_array[i].addEventListener("click", selectImage);

    image_container_array[i].style.order = i;
    if (parseInt(image_container_array[i].style.order) < carousel_size) {
        image_container_array[i].style.display = "flex";
    }
}

function carouselNext() {
    for (var i = 0; i < image_container_array.length; i++) {
        if (image_container_array[i].style.order < (carousel_size - 1)) {
            image_container_array[i].style.order = image_container_array.length - (carousel_size - 1) + parseInt(image_container_array[i].style.order)
        }
        else {
            image_container_array[i].style.order = image_container_array[i].style.order - (carousel_size - 1)
        }

        if (parseInt(image_container_array[i].style.order) < carousel_size) {
            image_container_array[i].style.display = "flex";
        }
        else {
            image_container_array[i].style.display = "none";   
        }
    } 
}

function carouselPrev() {
    for (var i = 0; i < image_container_array.length; i++) {
        if (image_container_array[i].style.order > image_container_array.length - carousel_size) {
            image_container_array[i].style.order = parseInt(image_container_array[i].style.order) - (image_container_array.length - (carousel_size - 1))
        }
        else {
            image_container_array[i].style.order = parseInt(image_container_array[i].style.order) + (carousel_size - 1)
        }

        if (parseInt(image_container_array[i].style.order) < carousel_size) {
            image_container_array[i].style.display = "flex";
        }
        else {
            image_container_array[i].style.display = "none";   
        }
    } 
}

function selectImage() {
    for (var i = image_select_array.length - 1; i >= 0; i--) {
        image_select_array[i].children[0].style.border = "none"
    }
    this.children[0].style.border = "2px solid rgba(230,230,230,.6)"

    document.getElementById("display_container").children[0].src = this.children[0].src

}