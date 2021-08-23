var likes = [9, 12, 9];
var Likescount = [
    document.querySelector('#neil'),
    document.querySelector('#nichole'),
    document.querySelector('#jim')
]

function addLike(id) {
    likes[id]++;
    Likescount[id].innerHTML = likes[id] + 'like(s)';
}