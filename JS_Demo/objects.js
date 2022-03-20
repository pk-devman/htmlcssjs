let user = {
    id: 1,
    name: 'PK',
    location: 'Pune',
    email: 'prathamk25@gmail.com',
    cities: ['Pune', 'Mumbai', 'Bengaluru'],
    logCities: function(){
        console.log(this);
        //console.log(this.cities);
    },
    logThis: () => {
        console.log(this);
    }
}
// console.log(user);
// console.log(user.name);
// console.log(user['id']);
// user.id = 5;
// console.log(user);
// console.log(typeof user);
user.logCities();
//console.log(this);
user.logThis();
