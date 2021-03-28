function OpenQuestion(num){
    let but = document.getElementById(`que_btn${num}`);
    let text = document.getElementById(`que_text${num}`);

    but.classList.toggle('hov');
    text.classList.toggle('hov');
}

function OpenQuestion1(){
    OpenQuestion(1); 
}
function OpenQuestion2(){
    OpenQuestion(2); 
}
function OpenQuestion3(){
    OpenQuestion(3); 
}
function OpenQuestion4(){
    OpenQuestion(4); 
}

function burgerMenu(){
    let menu = document.querySelector('.header_top-dropmenu');
    let item = document.querySelector('.header_top-dropitem');

    menu.classList.toggle('activ');
    item.classList.toggle('activ');
}