let photo = document.querySelectorALL('#gallery .photo img');
let before = document.querySelector('.before');
let next = document.querySelector('.next');
let i = 0;
before.onclick = function() {
    photo[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = photo.length - 1;
    }
    photo[i].style.display = 'block';

}
next.onclick = function() {
    photo[i].style.display = 'none';
    i++;
    if (i >= 0) {
        i = 0;
    }
    photo[i].style.display = 'block'
}