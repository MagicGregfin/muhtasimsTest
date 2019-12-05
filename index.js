//this is just a comment line

//const interestRate = 0.3;  
/* amra jodi constant er jaygay let ba var ditam and let ba var e interestRate diye pore abar interestRate er arekta value
dile tokhon setai interestRate er updated value....jar fole output e kokhono ager details show hobe na.
Ar ejonnoi const use kora hoy jeno value er kono change na hoy

/*let selecedColor = ['red','green', 1,'hunter','goal', 3, 4, 'game'];
selecedColor[10] = 'amazing stuffs'
console.log(selecedColor);*/
/*function greet(name, question, text) {
    console.log('Hello ' + name + ',' + question + '' + text);
}
greet('mugdho' , 'How are you?' + 'You are looking good!');*/


/*function square(number) {
    return 'Error';             //in output of consol it will always show Error output
}
console.log(square(2));*/

/*let firstName = 'dylan'
let lastName = 'Irish'*/

//console.log(firstName + ' ' + lastName);
//console.log(`${firstName} ${lastName}`.split(''));
//console.log(`${firstName} ${lastName}`.toUpperCase(''));
//console.log(`${firstName} ${lastName}`.toLowerCase(''));
//console.log(`${firstName} ${lastName}`.trim().length);

/*let name = 7.34
console.log(parseFloat(name)); //output= 7.34

let name = 7.34
console.log(parseInt(name)); //output= 7

let name = 7.34
console.log(typeof name); //output= number

*/

/*let name = 7.34
console.log(name.toFixed(0)); //output= 7

let name = 7.34
console.log(name.toFixed(1)); //output= 7.3

let name = 7.34
console.log(name.toFixed(5)); //output= 7.34000 */

/*
let example1 = false;
let example2 = true;
let example3 = null;
let example4 = undefined;
let example5 = '';
let example6 = NaN;
let example7 = -5;
let example8 = 0;

//console.log(example1);
//console.log(example2);
//console.log(example3);
//console.log(example4);
//console.log(example5);
//console.log(example6);
//console.log(example7);
//console.log(example8);
*/

/*
let example = ['moru',5,'mugdho',6];  // numbers don't need single quotes
/*
example.push('green', 'john', 10, 35); // add details in array to last

example.pop();  // delete last detail
*/

//let exampleUnique = [...example];
/*
let exampleUnique = example.map((Element) => {
       return Element;
})
console.log(example);
*/

//object work now----------------------------------

/*

var Person1= {
    Name: 'Muhtasim Wahid',
    nickname: 'Mugdho',
    age: 16,
    BrothersName: ['shammo', 'Fahad', 'Rusho'],
    Address: {
        country: 'Bangladesh',
        city:'Dhaka',
        PermanentAddress: 'Rangpur'
    },
    fathersName: 'Waheduzzaman',
    mothersName: 'Shammi Wahid',
    bloodGroup: 'O+',
};

var Person2= {
    Name: 'Meher Nigar',
    nickname: 'Moru',
    age: 13,
    BrothersName: ['shammo', 'Fahad', 'Rusho'],
    Address: {
        country: 'Bangladesh',
        city:'Dhaka',
        PermanentAddress: 'Rangpur'
    },
    fathersName: 'Waheduzzaman',
    mothersName: 'Shammi Wahid',
    bloodGroup: 'B+',
};

var Person3= {
    Name: 'John Smith',
    nickname: 'David',
    age: 25,
    BrothersName: ['shammo', 'Fahad', 'Rusho'],
    Address: {
        country: 'Bangladesh',
        city:'Dhaka',
        PermanentAddress: 'Rangpur'
    },
    fathersName: 'Waheduzzaman',
    mothersName: 'Shammi Wahid',
    bloodGroup: 'O+',
};

var Person4 = Object.assign({}, Person1); // this tell s you that only person4 er details extra ashbe but person1 tar motoi thakbe

var Person4 = Person1;

Person4.schoolName = 'BAFSD';   // evabe try koreo kono person er ba object er details create kora jay

console.log(Object.values(Person1)); // person4 dileo eki hobe....because Person4 = Perason1

console.log(Person1); // shows all the details

console.log(Object.keys(Person1)); // just shows the first details

console.log(Object.values(Person1)); // only shows the second details

console.log(Person1.hasOwnProperty('Name'));  //define that it has the exactly value or not


*/



//Arithmatic Operators----------------------------------------------------------------------------------------------------------------


/*

var spiderman = 100;
var Ironman = 250;
var CaptainMarvel = 500;

console.log("Total Power of both Hero is " + (spiderman + Ironman));

// Just practice with this




let example = 10;
let example2 = 15;

console.log(example >= example2);

// try somrthing different

let example1 = 10;
let example4 = 15;

console.log(example1 == example4); // not equal you can see....output= false

let example8 = 10;
let example5 = 15;

console.log(example8 <= example5); // output= true

let example7 = 10;
let example6 = 15;

console.log(example7 != example6); // output= true

//Moreover

let example = 10;
let example2 = '10';  // string holeo eta 10

console.log(example == example2);

// BUT arekta logic ase

let example = 10;
let example2 = '10'; 

console.log(example === example2);   // jodi strict equal hoy tahole kintu output= false hobe. because example and example 2 er data not same

// its mean example number and example2 holo string


*/

// RELATION OPERATORS CHALLENGE-----------------------------------------------------------------------------------------------------------------------

/*
var example = 5 === 5 ;
var example2 = 5 == '5' ;
var example3 = 6 != '6' ;
var example4 = 7 !== '7' ;
var example5 = 8 === '8' ;

// remember === like this triple kichu relation er maddhome data bujhay...mane vitor theke ek naki seta bujhay

console.log(example4);



//var udahoron = 7;

//udahoron ++;
//udahoron ++;
//udahoron ++;
//udahoron ++; // joto chao toto dile....toto barbe

//udahoron += 5; // output= 6 er mane holo.... udahoron = udahoron + 5
//udahoron -= 5;
//udahoron --;
//++udahoron;  // same...never changes values. same as udahoron
//udahoron += 5;
//console.log(udahoron);
//console.log(++udahoron);
//console.log(udahoron++); // vitore increments and decrements thakle....output= opposite of baire thakle

*/

// IF, ELSE and if-else ----------------------------------------------------------------------------------------------------
/*
let example = 5;

if (example == 5) {
    console.log('Validate details');
}
 if (example == 6) {
    console.log('Validate details')  // then console log e konodino Validate string ti ashbe na...ekdom khali
}


let example = 5;

if (example <= 1) {
    console.log('Validate details');
} else if (true) {
    console.log('Not Validate Details');
} else {
    console.log('something is Happening behind the system');
}

*/

// IF else Challenge------------------------------------------------------------------------------------------------------

/*
console.log(10 === 10 && 5 < 4); // output= false;

console.log(10 == 10 || 5 < 4); // output= true;

console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5); // output= true;
*/

// Now swith statement part practice---------------------------------------------------------------------------------------

/*
let studentAnswer = 'A';  // chane the 'A' value and you will see the result

switch (studentAnswer) {
    case 'A':
        console.log('wrong');
        break;
    case 'B':
        console.log('B is also wrong'); 
        break;
    case 'C':
        console.log('C is obviously wrong');
        break;
    case 'D':
        console.log('D is correct Answer!! Bravo');
        break;
    default:
        console.log('Out of your book!');    // no answer found in the case then in default this message will be shown
}
*/

// For and while loop------------------------------------------------------------------------------------------------------
/*
let total = 0;

for ( let i = 0; i < 5; i++) {
    total += i;
}
console.log(total);
*/
/*
let total = 0;

for ( let i = 0; i < 5; i++) {
    console.log(i);
}
*/

// Function work ----------------------------------------------------------------------------------------------------------

/*
function add(num1){
    return num1;
}
console.log(add(5));
console.log(add(12));
console.log(add(45));
console.log(add(7));

// play with the coding, you can also add "return num1 + num2"
// And try to change the values
function add(num1,num2,num3){
    return num1 + num2 - num3;
}
console.log(add(5, 3, 4));
//console.log(add(12, 55, 6));
//console.log(add(45, 5, 5));
//console.log(add(7, 5, 5));

*/

/*
const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['red','yellow','blue','grey'];

colorBtn.addEventListener('click',changeColor);

function changeColour() {
   // bodyBg.style.backgroundColor = color[1];
   let random = Math.floor(Math.random()*colors.length)
   bodyBcg.style.backgroundColor = colors[random];
}

*/


