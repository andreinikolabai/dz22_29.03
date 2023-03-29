function focus () {
    const input = document.querySelector('#input');
    input.value = "<div>";
}

function blur () {
    const input = document.querySelector('#input');
    input.value = "";
}

const action = document.querySelector('#input');

action.addEventListener('focus', focus);
action.addEventListener('blur', blur);

