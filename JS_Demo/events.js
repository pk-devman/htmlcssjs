const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    console.log('You clicked me!!!');
});

const list = document.querySelectorAll('li');

list.forEach(li => {
    li.addEventListener('click', (e) => {
        console.log(e.target);
        e.target.style.backgroundColor = 'gray';
    })
})