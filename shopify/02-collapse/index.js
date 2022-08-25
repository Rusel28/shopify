const button = document.querySelector('.collapsible__button');
const visible = document.querySelector('.collapsible__action--visible');
const hidden = document.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');

const keyFrames =[
    {color: 'rgb(197, 197, 197)',  marginLeft: '100px' ,fontSize: '5px'},
    { fontSize: '25px' }
]

const textContent = content.children[0];

function start() {
    button.innerHTML = hidden.innerText;
    button.style.width = '160px';
    textContent.style.fontSize = '25px';
    textContent.style.display = 'none';
}

start();

button.addEventListener("click", switchingContent);

function switchingContent() {
    if (button.innerHTML === hidden.innerText) {
        button.innerHTML = visible.innerText;
        textContent.style.display = '';
        textContent.animate(keyFrames, 3000);
    } else {
        button.innerHTML = hidden.innerText;
        textContent.style.display = 'none';
    }
}

