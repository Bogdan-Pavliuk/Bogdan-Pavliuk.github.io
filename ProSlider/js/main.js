window.onload = function () {
    let count = 4;
    let nextbtn = document.querySelector("#next");
    let prevbtn = document.querySelector("#prev");
    let ind = 0;

    document.querySelector(".slider")
        .style.width = `${250 * count}px`;
    let itemSlider = document.
        querySelectorAll(".slider .slider_photos .slider_photo");
    let itemSliderFirst = document.
        querySelector(".slider .slider_photos .slider_photo.first1");

    let itemSliderLasts = itemLasts
        (count, itemSliderFirst.nextElementSibling);


    resStart(itemSlider, count, itemSliderLasts, itemSliderFirst);

    nextbtn.onclick = nextBtn;
    prevbtn.onclick = prevBtn;

    function nextBtn() {
        if (ind >= itemSlider.length - count - 1) {
            nextbtn.classList = "slider_btn des";
        }
        if (ind >= itemSlider.length - count) {
            return 0;
        }
        if (ind == 0) {
            prevbtn.classList = "slider_btn";
        }
        itemSliderFirst.classList = "slider_photo";
        itemSliderFirst = itemSliderFirst.nextElementSibling;
        itemSliderFirst.classList = "slider_photo first1";
        bothBtn();
        ind++;
    }

    function prevBtn() {
        if (ind < 2) {
            prevbtn.classList = "slider_btn des";
        }
        if (ind < 1) {
            return 0;
        }
        if (ind == itemSlider.length - count) {
            nextbtn.classList = "slider_btn";
        }
        itemSliderFirst.classList = "slider_photo";
        itemSliderFirst = itemSliderFirst.previousElementSibling;
        itemSliderFirst.classList = "slider_photo first1";
        bothBtn();
        ind--;
    }

    function bothBtn() {
        indFirst(itemSliderFirst);
        itemSliderLasts = itemLasts
            (count, itemSliderFirst.nextElementSibling);
        resStart(itemSlider, count, itemSliderLasts, itemSliderFirst);
    }


    // slider count

    document.querySelector('.slider-btn').onclick = function () {
        let inp = document.querySelector('.slider-inp').value;
        if (inp > 0 && inp < 6){
            count = inp;
            ind = 0;
            document.querySelector(".slider").style.width = `${250 * count}px`;
            itemSlider = document.querySelectorAll(".slider .slider_photos .slider_photo");
            itemSliderFirst = document.querySelector("#slider_photo_first");
            itemSliderLasts = itemLasts(count, itemSliderFirst.nextElementSibling);
            resStart(itemSlider, count, itemSliderLasts, itemSliderFirst);
            nextBtn();
            prevBtn();
            prevbtn.classList = "slider_btn des";
            nextbtn.classList = "slider_btn";
        }
        document.querySelector('.slider-inp').value = '';
    }

}

function itemLasts(cou, first) {
    let items = [];
    let item = first;
    for (let i = 0; i < cou - 1; i++) {
        items.push(item);
        item = item.nextElementSibling;
    }
    return items;
}

function itemIndex(cou, items) {
    let left = 250;
    for (let i = 0; i < cou - 1; i++) {
        items[i].style.left = `${left}px`;
        left += 250;
    }
}

function resStart(itemSlider, count, itemSliderLasts, first) {
    for (let i = 0; i < itemSlider.length; i++) {
        if (itemSlider[i] == first) {
            continue;
        }
        itemSlider[i].style.left = `${250 * count}px`;
    }
    itemIndex(count, itemSliderLasts);
}

function indFirst(first) {
    first.style.left = "0px";
}



