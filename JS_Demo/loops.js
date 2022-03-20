//For Loop

// for (let index = 0; index < 5; index++) {
//      console.log(index);    
// }

//While
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;    
// }

//Do... while
// let j =5;
// do {
//     console.log(j);
//     j++;
// } while (j<5);

//If .. Else

//let password = 'pass!';
// if(password.length >= 10){
//     console.log('Great!');
// }
// else if(password.length >= 6){
//     console.log('Okay');
// }
// else{
//     console.log('Weak');
// }

//Logical operators
// if(password.length >= 10 && password.includes('!')){
//     console.log('Great!');
// }
// else if(password.length >= 6 || password.includes('!') && password.length >=5){
//     console.log('Okay');
// }
// else{
//     console.log('Weak');
// }

//break and continue
// let scores =[0, 10, 40, 50, 100, 60, 70];
// for (let index = 0; index < scores.length; index++) {
//     console.log(scores[index]);
//     if(scores[index] == 100){
//         console.log('Congrats!');
//         break;
//     }    
// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let index = 0; index < nums.length; index++) {
//     if(nums[index] % 2 != 0){
//         continue;
//     }
//     console.log(nums[index]);
    
// }

//Switch
// let grade ='X';

// switch (grade) {
//     case 'A':
//         console.log('Your grade is ', grade);        
//         break;
//         case 'B':
//         console.log('Your grade is ', grade);        
//         break;
//         case 'C':
//         console.log('Your grade is ', grade);        
//         break;
//         case 'D':
//         console.log('Your grade is ', grade);        
//         break;

//     default:
//         console.log('Invalid grade!');
//         break;
// }

// Loose vs Strict comparision

let a = '1';

if(a === 1){
    console.log('First Condition');
}
else{
    console.log('Second Condition');
}

let b = 'PK';
console.log('PK' < 'ZP');
console.log('zp' < 'ZP');

