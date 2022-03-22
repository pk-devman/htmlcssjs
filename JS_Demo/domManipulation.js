// const paragraph = document.querySelector('p');
// console.log(paragraph);

// const paraError = document.querySelector('.error');
// console.log(paraError);

// const paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);
// paragraphs.forEach(p => {
//     console.log(p);
// });

// const byId = document.getElementById('page-title');
// console.log(byId);

// const byClass = document.getElementsByClassName('error');

// console.log(byClass);

// const byName = document.getElementsByTagName('p');
// console.log(byName);

// const p1 = document.querySelector('p');
// p1.innerText = 'JS is Great!';

// const content = document.querySelector('.content');

// content.innerHTML += '<h2>Hey I just added this.</h2>';
// console.log(content.innerHTML);

// const link = document.querySelector('a');
// link.setAttribute('href', 'https://www.w3schools.com');

// const para = document.querySelector('.error');
// para.setAttribute('style', 'color: red');
//const h1 = document.querySelector('h1');
//h1.setAttribute('style', 'margin: 20px');
//h1.style.marginLeft = '20px';
//console.log(h1.style);

// const p = document.querySelector('p');
// console.log(p.innerText);
const paras = document.querySelectorAll('p');

paras.forEach(p => {
    console.log(p);
    // if(p.textContent.includes('success')){
    //     p.classList.add('success');
    // }
    // else if(p.textContent.includes('error')){
    //     p.classList.add('error');
    // }
})
