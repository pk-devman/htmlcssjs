function getSomething(val){
    return new Promise((resolve, reject) => {
        if(val === 0){
            resolve('This is success!');
        }
        else{
            reject('There was an error!');
        }
    })
}

// getSomething(1).then(data => {
//     console.log(data);
// }, error => {
//     console.log(error);
// });

// getSomething(1).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);

// });

fetch('data.json').then(res => {
    return res.json();
}).then(data => {
    console.log(data);
}).catch(error => {
    
});

