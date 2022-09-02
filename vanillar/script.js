'use strict';
//const money = 0;
// if(money) {
//     console.log('dont spend all money');
// } else {
//  console.log('Get a job');
// }

// let height = 200;
// if(height){
//     console.log('yes height is fine')
// } else {
//     console.log('height is not define')
// }


// const age = 18;

// if(age === 18) console.log('yes you just get 18 (strict)');

// //this is not needed
// if(age === 18) console.log('yes you just get 18 (loose)')

// const favourite = Number(prompt('what is your number?'));
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite === 23 ){
//     console.log('yes  23 its amazing number')
// } else if(favourite === 9){
//     console.log('9 is also good number')
// } if (favourite === 9) {
//     console.log('9 is also good number')
// }

// if(favourite !== 23) console.log('why not 23?')


// const tailorHasCertificate = true;

// const iSExpirience = true;

// console.log(tailorHasCertificate && iSExpirience)

// console.log(tailorHasCertificate || iSExpirience)

// console.log(!tailorHasCertificate)

// if (tailorHasCertificate && iSExpirience) {
//     console.log('Applicant is expieienced to be hired')
// } else {
//     console.log('Applicant is not expirience, get some one else to be your tailor')
// }


// const isOcupied = false;
// console.log(tailorHasCertificate && iSExpirience && isOcupied)

// if (tailorHasCertificate && iSExpirience && !isOcupied) {
//     console.log('Applicant is able to be hired')
// } else {
//     console.log('Applicant is not able to work, get some one else to do your work')
// }

// ///////challenge 1
//  const scoreDolphines = (96 + 108 + 89) / 3;

//  const scoreKoalas = (88 + 100 + 110) / 3;

//  const isMinimumScore = 100;

//  console.log(scoreDolphines);
//  console.log(scoreKoalas);

//  if (scoreDolphines > scoreKoalas) {
//     console.log('scoreDolpnines has won');
//  } else if (scoreDolphines < scoreKoalas){
//     console.log('scoreKoalas has won');
//  } else if (scoreDolphines === scoreKoalas){
//     console.log('both team has draw');
//  }
 
 ///////challenge 1 calculation
//  const scoreDolphines = (97 + 112 + 101) / 2;

//  const scoreKoalas = (109 + 101 + 91) / 2;


//  console.log(scoreDolphines, scoreKoalas);

//  if (scoreDolphines > scoreKoalas && scoreDolphines >= 100) {
//     console.log('scoreDolpnines has won');
//  } else if (scoreKoalas > scoreDolphines  && scoreKoalas >= 100){
//     console.log('scoreKoalas has won');
//  } else if (scoreDolphines === scoreKoalas && scoreDolphines >= 100 && scoreKoalas >= 100){
//     console.log('both team has draw');
//  } else {
//     console.log('No one won')
//  }
 

//////////switch or equality
// const day = 'saturday';

// switch (day) {
//       case 'moday': // day === 'monday'
//       console.log('Plan course structure');
//       console.log('Go to coding meetup');
//      // break;
// case 'tuesday':
//       console.log('Prepare powerpoint');
//       break;
//       case 'wednesday':
//       console.log('Prepare powerpoint');
//       break;
// case 'thursday':
// case 'friday':
//       console.log('Learn coding')
//       break;
// case 'saturday':
// case 'sunday':
//       console.log('Sabbath and rest')
//       break;
//       default:
//       console.log('Not valid')
// }



// if (day === 'monday') {
//    console.log('Plan course structure');
//    console.log('Go to coding meetup');
// } else if (day === 'tuesday' || day === 'wednesday'){
//    console.log('Prepare powerpoint');
// } else if (day === 'thursday' || day === 'friday'){
//    console.log('Learn coding')
// } else if (day === 'saturday' || day === 'sunday'){
//    console.log('Sabbath and rest')
// } else {
//    console.log('Not valid');
// }

// const tailor = 'male';

// if (tailor ===  'kofi'){
//    console.log('Qualify for sewing')
// } else if (tailor === 'female'){
//    console.log('Look for another job')
// } else if (tailor === 'male'){
//    console.log('You are qualify')
// }

// const day = 'saturday';

// if(day === 'monday'){
//    console.log('plan a missinary work')
// } else if (day === 'saturday'){
//    console.log('celebrate sabbath at Kpau')
// }


//////

// 3 + 4 
// 1991
// true && false && !false

// if (23 > 10){
//    const str = '23 is bigger'
// }

// const me = 'simon';
// console.log(`${me} is ${2022 - 1977} years old`)


// ////////// conditional operators / if statement
// const age = 23;

// age >= 18 ? console.log('I will get baptise') : console.log('I remain at baptismal class')

////practice
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink)

// let drink2;
// if(age >= 18){
//     drink2 = 'wine'
// } else {
//     drink2 = 'water'
// }
// console.log(drink2)

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)



// const bill = 20;

// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill*0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)



//////////////////////////////////
// let tailorHasCertificate = false;
// const passTest = true;

// if (passTest) tailorHasCertificate = true;
// if (tailorHasCertificate) console.log('He can sew')


////////////////////////function////////////////////////

// function tailor (){
//     console.log('I sew dress as a tailor')
// }

// ///////calling, running, invoking function

// tailor();
// tailor();
// tailor();

// function tailorDress (kaki, gabadin){
//     console.log(kaki, gabadin)
//     const dress = console.log(`I sew dress with ${kaki} kaki and ${gabadin} gabadin`)
//   return dress;
// }

// const kakiDress = tailorDress(7, 9);
// console.log(kakiDress)

// const gabadinDress = tailorDress(9, 7);
// console.log(gabadinDress)


// function calcAge1(birthYear){
//     const age = 2022 - birthYear;
//     return age;
// }

// const age = calcAge1(1977)
// console.log(age)



// function per(number, per){
   
//     return (number/100 ) * per;
// }
// console.log(per(300 , 10))


// function per (num, per){
//     return (num/100) * per;
// }
// console.log(per(100, 10))





///function declaration / with this, you can call it before declare and it will work
// function fees(num, per){
//     return ( num/100) * per;
// }
// console.log(fees(8000, 10))


// function calcAge1(birthYear){
//     const age = 2022 - birthYear;
//     return age;
// }
// const age = calcAge1(1977)

// console.log(age)



// ///function expression // it will not work when you call the function before declaration

// const calcAge2 = function(birthYear){
//     const age2 = 2022 - birthYear;
//     return age2;
// }

// const age2 = calcAge2(1977)
// console.log(age2)

// const fes = (num, per) =>{

// return (num/100) * per;
// }
// console.log(fes(2000, 10))

// 

const day = 'default';

switch (day) {
      case 'moday': // day === 'monday'
      console.log('Plan course structure');
      console.log('Go to coding meetup');
     // break;
case 'tuesday':
      console.log('Prepare powerpoint');
      break;
      case 'wednesday':
      console.log('Prepare powerpoint');
      break;
case 'thursday':
case 'friday':
      console.log('Learn coding')
      break;
case 'saturday':

case 'sunday':
      console.log('Sabbath and rest')
      break;
      default:
      console.log('Not valid')
}
