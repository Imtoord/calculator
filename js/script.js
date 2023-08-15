let btns = document.querySelectorAll('button[data-num]');
let equal = document.getElementById('equal');
let c = document.getElementById('c');
let input = document.querySelector('input');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let valid = btn.dataset.num;
        input.value += valid;
    });
});


equal.addEventListener('click', function () {
    if (input.value.trim() == '') {
        input.value = ''
    } else {

        input.value = eval(input.value);
    }
});

c.addEventListener('click', function () {
    input.value = "";
});


