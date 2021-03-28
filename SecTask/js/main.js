let BD = [];

function MyDrop(i){
    let inf = document.getElementById(`info${i}`);
    
    inf.classList.toggle('act');  
}

function MySel(i, el){
    let inf = document.getElementById(`info${i}`);
    let inp = document.getElementById(`inp${i}`);
    let item = document.getElementById(`el${el}`);
    inp.innerHTML = item.innerHTML;    
    inf.classList.toggle('act');
}

function MyRes(){
    let el1 = document.getElementById(`in1`);
    let el2 = document.getElementById(`inp1`);
    let el3 = document.getElementById(`in2`);
    let el4 = document.getElementById(`inp2`);
    let el5 = document.getElementById(`in5`);
    let el6 = document.getElementById(`in6`);

    str = `Thanks!
Your name: ${el1.value}
Your category: ${el2.innerHTML.trim()}    
Your phone: ${el3.value}
Your city: ${el4.innerHTML.trim()}    
Your E-mail: ${el5.value}
Your Massage: ${el6.value}`;

    let db = confirm(str);

    db ? BD.push(str) : alert('Not write');
}

let next_btn = document.querySelector('#next');
let prev_btn = document.querySelector('#prev');
let slider_photos = document.querySelectorAll('.slider_photo');
let i = 0;

next_btn.onclick = function(){
    if(i == slider_photos.length - 5){
        next_btn.classList = "slider_btn dec";
        return 0;
    }
    if(i == 0){
        prev_btn.classList = "slider_btn";
    }
    next_btn.classList = "slider_btn";
    i = slikSlider(i, true) - 4;
}

prev_btn.onclick = function(){
    if(i == 0){
        prev_btn.classList = "slider_btn dec";
        return 0;
    }
    if(i != 0){
        next_btn.classList = "slider_btn";
    }
    prev_btn.classList = "slider_btn";
    i = slikSlider(i - 1, false) - 5;    
}

function slikSlider(i, el){
    if(el){
        slider_photos[i++].classList = "slider_photo";
    }
    slider_photos[i++].classList = "slider_photo ac1";
    slider_photos[i++].classList = "slider_photo ac2";
    slider_photos[i++].classList = "slider_photo ac3";
    slider_photos[i++].classList = "slider_photo ac4";
    slider_photos[i].classList = "slider_photo ac5";
    if(!el){
        slider_photos[++i].classList = "slider_photo";
    }
    return i;
}