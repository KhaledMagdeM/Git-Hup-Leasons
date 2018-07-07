/*jslint devel: true, plusplus:true, evil:true */
/* global alert, confirm, console, Debug, opera, prompt, WSH, prompt, console */
// لحل بعض المشاكل لازم يكونو ف الاول

/*
var myName = "khaled",
    
    myAge = 22,
    
    myCountry = "EGYPT",
    
    myDiv = document.getElementById("test");


  output   اخراج المعلومات

1) .innerHTML =      //لاظهار شئ في الصفحه  // htmlللطباعه باستخدام الاي دي الخاص بالعنصر في ال

2) document.write(myCountry);

3) alert("hellow");     // لاظهار تنبيه عند فتح الصفحه

4) console.log(myName);  غير مرئي في الصفحه 

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// operators 


/* 1)  addition  الجمع

var x = 100,
    
    y = 200,
    
    z = x + y,
    
    myDoucment = document.getElementById("test");


// myDoucment.innerHTML = z;        // z = 100 + 200 = 300 


// myDoucment.innerHTML = x + y + z;  // 100 + 200 + z(100 + 200) = 300 + 300 = 600   الناتج اللي هيطلع على الصفحه 


// myDoucment.innerHTML = x + z;    // 100 + z(100 + 200) = 100 + 300 = 400  الناتج اللي هيطلع على الصفحه 


// myDoucment.innerHTML = y + z;    // 200 + z(100 + 200) = 200 + 300 = 500    الناتج اللي هيطلع على الصفحه 


// myDoucment.innerHTML = x + y;   // 100 + 200 = 300    الناتج اللي هيطلع على الصفحه 


*/


////////////////////////////////////


/*
// 2) subtraction  الطرح 

var x = 500,
    
    y = 200,
    
    z = x - y,
    
    myDoucment = document.getElementById("test");


 myDoucment.innerHTML = z;        // z = 500 - 200 = 300

console.log(z)
*/
  

////////////////////////////////////

/* 3) multiplication   الضرب 

var x = 2,
    
    y = 5,
    
    z = x * y,
    
    myDoucment = document.getElementById("test");


myDoucment.innerHTML = z;        // z = 2 * 5 = 10   

*/


////////////////////////////////////


/* 4) division    القسمه 

var x = 100,
    
    y = 5,
    
    z = x / y,
    
    myDoucment = document.getElementById("test");


myDoucment.innerHTML = z;        // z = 100 / 5 = 20   

*/

////////////////////////////////////

// ملحوظه مهمه جدت 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

var x = "kh",
    
    y = 5,
    
    z = x / y,
    
    a = x * y,
    
    w = x - y,
    
    s = z + y
    
    myDoucment = document.getElementById("test");


myDoucment.innerHTML = ;  // NAN = not a number  في الضرب والطرح والقسمه هيقولي    
  
يعني الاسم ده مش رقم عشان تطبق عليه الثلاث عمليات
  
///////

اما في حاله الجمع هيعتبر ان الرقم استرينج وهيكتبه بالشكل ده 

kh20


*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // if , else 

/*
var yourAge = prompt("What Is Your Age");

if (yourAge < 18) {
    
    document.getElementById("test").innerHTML = "Sorry you are not allowed here";
} else {
    document.getElementById("test").innerHTML = "Wellcome here";
}
*/




//في حاله وجود اكثر من شرط 
/*
var yourAge = prompt("What Is Your Age");

if (yourAge < 18) {
    
    document.getElementById("test").innerHTML = "Sorry you are not allowed here";
    
} else if (yourAge == 18) {
    
    document.getElementById("test").innerHTML = "Wel";
    
} else {
    
    document.getElementById("test").innerHTML = "Wellcome here";
}
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//comparsion oprerators (conditional opreater)
// if , else , المقارنه

/* 
// 1) > اكبر من

var myPrice = 100;

if (myPrice > 50) {
    
    alert("good");
} else {
    
    alert("bad");
}
*/

/////////////////

/*
// 2) < اصغر من

var myPrice = 100;

if (myPrice < 50) {
    
    alert("good");
} else {
    
    alert("bad");
}
*/

/////////////////

/* 
// 3) >=  اكبر من او يساوي

var myPrice = 100;

if (myPrice >= 50) {
    
    alert("good");
} else {
    
    alert("bad");
}
*/

/////////////////

/* 
    ( = ) ==> Assignment Operator
    علامه لتعريف قيمه المتغير فقط
*/


/*
 (==) comparsion operator ...compare with value
var myPrice = 100;

if (myPrice == 1000) {
    
    alert("good");
    
} else {
    
    alert("bad");
}



(===) Identity operator ...compare with value and data type

var myPrice = 100;

if (myPrice === 1000) {
    
    alert("good");
    
} else {
    
    alert("bad");
}

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Logical operators


/*
// 1) ( || ) ==> or

var name = "khaled",
    
    age = 22;
    
if (name === "khaled" || age === 23) {    
    
    alert("good"); // في حاله تحقق الشرط الاول (او) الشرط الثاني اظهر جيد
    
} else {         
    
    alert("bad"); // في حاله عدم تحقق الشرطين معا اظهر سئ
}
*/

////////////////////////////////////////

/*
// 2) ( && ) ==> and

var name = "khaled",
    
    age = 22;
    
if (name === "khaled" && age === 32) {  // في حاله تحقق الشرط الاول (و) الشرط الثاني معا اظهر جيد  
    
    alert("good");
    
} else {       // وفي حاله عدم تحقق احد الشرطين اظهر سئ  
    
    alert("bad");
}
*/

////////////////////////////////////////

/*
// 3) ( != ) ==> not equel Value

var name = "khaled";
    
    
if (name != "khaled") {  // في حاله ان الاسم لا يساوي قيمه المتغير قم باظهار سئ  
    
    alert("bad");
    
    
} else {       // وفي حاله ان الاسم يساوي القيمه اظهر جيد  
    
    alert("good");
}
*/

////////////////////////////////////////

/*
// 4) ( !== ) Not Identical ==> not equel Value and DataType

var age = 32;
    
    
if (age !== "32") {  // في حاله ان الاسم لا يساوي قيمه المتغير او نوع المتغير قم باظهار سئ  
    
    alert("bad");   //   هيظهر سئ لان فيه اختلاف ف النوع 
    
    
} else {       // وفي حاله ان الاسم يساوي القيمه والنوع اظهر جيد  
    
    alert("good");
}

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* global, prompt, alert, console*/


// Function with parameters

/*
function calcDays(age) {
    
    "use strict";
    
    var year = 365;
    
    return age * year;
}

var dynamicAge = prompt("What is your age?");

document.getElementById("test").innerHTML = calcDays(dynamicAge) + " In Days";

// في هذه الحاله قمت بوضع قيمه البراميترز بقيمه الرساله اللي هتظهر فمجرد ماادخل رقم يحسب بشكل تلقائي لاني كاتب اسم البراميترز ف الريترن * السنه اللي هي قيمتها 365 
*/

///////////////////

/*
function discount(price) {
    
    "use strict";
    
    var myDiscount = 100;
    
    return price - myDiscount;
}

document.getElementById("test").innerHTML = discount(200);

// في هذه الحاله انا حطيت قيمه ثابته للبراميترز 
*/

///////////////////

/*
// More than Parameters

function name(firstName, secondName, lastName) {
    
    "use strict";
    
    return "hello " + firstName + " " + secondName + " " + lastName;
}

document.getElementById("test").innerHTML = name("khaled", "magde", "mohamed");
*/

///////////////////

/*
function calcdiscount(price) {
    
    "use strict";
    
    var discount = 100;
    
    return price - discount;
}

document.getElementById("test").innerHTML = calcdiscount(400); // 400 = value of price

// عند استدعاء الفنكشن هيخصم ال100 من ال500

*/


/*
function calcdiscount(price) {
    
    "use strict";
    
    var discount = 100;
    
    return price - discount;
}

var thePriceAfter = prompt("Inter The Price to calc the price after discount");

document.getElementById("test").innerHTML = calcdiscount(thePriceAfter); // thePriceAfter = value of p
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* result */

/*
function convertToRiyal() {
    
    "use strict";
    
    var amount = document.getElementById("dollar").value, // الخاصه بحقل الادخال value
        
        // هو الاي دي الخاص بحقل الادخال الذي نكتب فيه القيمه التي نريد ان نحسبها dollar
        
        result = amount * 5;
    
    
    document.getElementById("test").innerHTML = result;   // هو اسم الاي دي الخاص بالديف الذي يظهر النتيجه test
    
}

convertToRiyal();
   
*/



/*
function convertToRiyal() {
    
    "use strict";
    
    var amount = document.getElementById("dollar").value, // الخاصه بحقل الادخال value
                
        result = amount * 5,
        
        message = document.getElementById("test");
    
    
    if (amount === "") {  // في حاله ضغطه على الزرار دون ادخال رقم تظهر رساله تقوله دخل رقم
      
        message.innerHTML = "Pleaze enter Number.";
        
    } else if (isNaN(amount)) { // isNAN = is not a number //معني هذا اذا ادخل كلام بدل من رقم تظهر رساله تقول له ادخل رقم وليس كلام
        
        message.innerHTML = "Pleaze Enter Number Not Text.";
        
    } else if (amount === "0") {  // امنعه من ادخال صفر واذا ادخل صفر اقول له ادخل رقم اكبر من الصفر
        
        message.innerHTML = "This Filed Accpet Number From 1 to 100000" + " " + "only.";
        
    } else if (amount > 100000) {
        
        message.innerHTML = "This Filed Accpet Number From 1 to 100000" + " " + "only.";
        
    } else if (amount < 0) { // حتي لا يحسب ارقام بالسالب
        
        message.innerHTML = "This Filed Accpet Number From 1 to 100000" + " " + "only.";
        
    } else {
        
        message.innerHTML = result;
    }
    
}
convertToRiyal();
//if قاعده
// تنفع اذا كان هناك شرط او اثنين 
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Switch / Case / Break */
/*
var season = prompt("What is the best season for you ?");

switch (season) {
        
case "Winter":
    alert("Winter is so cold");
        
    break;
        
case "Summer":
    alert("Summer is too hot");
        
    break;
        
case "Autumn":
    alert("Autumn is good");
        
    break;
        
case "Spring":
    alert("Spring is amazing");
        
    break;
        
default:
    alert("You didnot write A Season Name");
        
    break;
}            
*/

/////////////////////

// Use more than Case For the same massege
// لااظهار نفس الرساله case استخدام اكثر من

/*
var season = prompt("What is the best season for you ?");

switch (season) {
        
case "Winter":
case "Summer":
case "Autumn":
case "Spring":
    alert("This Season is good");

    break;
        
default:
    alert("You didnot write A Season Name");
        
    break;
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* local scope / global scope */

/*
var x = 1; // golbal scope

function changeXto2() {
    
    "use strict";
    
    var x = 2;  // local scope
}

console.log(x);


changeXto2();

console.log(x);


// الذي سيحدث / سيتم طباعه رقم 1 ثم تم تشغيل الفنكشن فسيطبع رقم 1 ايضا لان القيمه في الفنكشن لوكال فلن يتم طباعتها

//  لايتم الوصول اليها الا من داخل الفنكشن  local scope

// اذا اردنا طباعه رقم 2 نحولها من لوكال الى جلوبال عن طريق 

//حتي نحولها من لوكال الى جلوبال  var نحذف ال
*/

////////////////////////

/*
var x = 1; // golbal scope

function changeXto2() {
    
    "use strict";
    
    x = 2;  // global scope
}

console.log(x);

changeXto2(); // لتشغيل الفنشكن

console.log(x);

// الذي سيحدث / سيتم طباعه رقم 1 ثم يتم تشغيل الفنكشن فسيطبع رقم 2 لان القيمه في الفنكشن تم تحويلها الى جلوبال فسيتم طباعتها
*/

////////////////////////

/*
var x = 1; // golbal scope


function changeXto2() {
    
    "use strict";
    
    var x = 2;  // local scope  
    
    console.log(x);
}

changeXto2(); // لتشغيل الفنشكن

console.log(x);



// ألذي حدث / اول شئ طبع رقم 1 ثم تم تشغيل الفنكشن فطبع رقم 2 لان قيمه رقم 2 لوكال ولا يتم الوصول اليها الا من داخل الفنكشن

// اولا البرنامج وجد قيمه الاكس 1 ثم وجد فنكشن وقمت بتشغيلها الاول فسياخذ قيمه الاكس اللي هي 2 وسيطبع رقم 2 ثم يجد امر طباعه مره اخري فسياخذ قيمه ال 1 لانها جلوبال سكوب وسيطبعها
*/

////////////////////////

/*
var x = 1; // golbal scope


(function changeXto2() {
    
    "use strict";
    
    var x = 2;  // local scope
    
    console.log(x);
}());

console.log(x); // تطبع من الجلوبال فقط لانها خارج الفنكشن
*/


// ألذي حدث / اول شئ طبع رقم 2 لان الفنكشن مفعله تلقائيا فدخل عليها وطبع رقم 2 ثم وجد خارج الفنكشن استدعاء لقيمه الجلوبال سكوب فطبع رقم 1 

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Scope Part 2 */
/*
var x = 1; // global scope

function testFunc() {
    
    "use strict";
    
    var calc = x + 2; // local scope
    
    console.log(calc);
}

testFunc();


// I can take value from global scope to inside function

// اقدر اخد قيمه من الجلوبال سكوب لداخل الفنكشن لكن مش مقدرش اخد قيمه من جوا الفنكشن لبره لانها لوكال سكوب

// البرنامج لقي قيمه الاكس 1 بعد كده شغل الفنشكن بعد كده طبع مجموع 1 + 2 وطلع النتيجه 3
*/



/////////////////////////


/*
function parent() {
    
    "use strict";
    
    var age = 22;
    
    function child() {
        
        
        console.log(age);
    }
    
    child();  
    
    // لازم استدعي فنكشن الابن او اعملها سيلف انفوك او اعملها ريترن من داخل فنكشن الاب // مينفعش اعملها استدعاء من بره فنكشن الاب
    
}

parent();



// لازم اشغل الفنكشن الاب ثم اشغل الفنكشن الابن التي بداخلها 

// فنكشن الابن يقدر ياخد قيمه من فنكشن الاب او من بره لكن العكس لا مقدرش اخد حاجه من فنكشن الابن 
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

    Events ==> onload / onclick / ondblclick 
    Leason 22
*/



/////////////////////////

/*

    Events ==> onkeyup / onkeydown / onkeypress 
    Leason 23
*/

/*

// onkeyup

var myinput = document.getElementById("dollar"),
    
    mydiv =  document.getElementById("test");


myinput.onkeyup = function () {
    
    "use strict";
    
    mydiv.innerHTML = myinput.value * 18;
};

// ادوس واسيب الزرار يحسب لوحده onkeyup
*/

//////////////////

/*

// onkeydown

var myinput = document.getElementById("dollar"),
    
    mydiv =  document.getElementById("test");


myinput.onkeydown = function () {
    
    "use strict";
    
    mydiv.innerHTML = myinput.value * 18;
};

// اضغط على الزرار وافضل ضاغط من غير ماشيل صوباعي يطلع الرساله  onkeydown
*/

//////////////////

/*

// onkeypress

var myinput = document.getElementById("dollar"),
    
    mydiv =  document.getElementById("test");


myinput.onkeypress = function () {
    
    "use strict";
    
    alert("hi");
};
*/

/// مجرد الضغط على الزر تظهر الرساله   onkeypress

///// ملحوظه الفرق مابين الدون والبريس هيبان ف الشغل المتقدم 

// onkeyup افضل شئ استحدام ال

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

    Events ==> onmuseover / onmuseout / onchange 
    Leason 24
*/


/*
// 1) onmouseover

var myDiv = document.getElementById("test");
    

myDiv.onmouseover = function () {
    
    "use strict";
    
    myDiv.innerHTML = "hi";
};

// اول ماقف بالماوس علي الديف الكلام هيتغير
*/

///////////////

/*
// 2) onmouseout

var myDiv = document.getElementById("test");
    

myDiv.onmouseout = function () {
    
    "use strict";
    
    myDiv.innerHTML = "hi";
};

// اول مااقف بالماوس علي الديف واشيل الماوس من عليه الكلام هيتغير
*/

///////////////

/*
// 3) onchange

var myInput =  document.getElementById("input"),
    
    myDiv = document.getElementById("test"),
    
    myCurrency = document.getElementById("currency");


myCurrency.onchange = function () {
    
    "use strict";
    
    myDiv.innerHTML = myInput.value * myCurrency.value;
};
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
// Array 

var friends = [
    "hassan",  // 0 index
    "khaled"   // 1 index
    
];

console.log(friends[0]);
*/

//////////////////////////////
/*

// Array check

var friends = [
    "hassan",  // 0 index
    "khaled"   // 1 index
    
];

if (Array.isArray(friends)) {
    
    console.log("yes it is array");
    
} else {
    
    console.log("yes it is array");
    
}

*/

/////////////////////////////////////////////////////////////////////////

// Array [Get - Set] by Length

/*
var friends = [
    
    "hassan", // 0 index
    "Soha",   // 1 index
    "Ali"     // 2 index
];


// اظهار عنصر عن طريق الاندكس
console.log(friends[2]); // استدعاء عنصر


// Get Length 
console.log(friends.length); // Get Length ==> 3 Length 


// Set Length
friends.length = 1; // قولتله اظهر فقط عنصر واحد من العناصر

console.log(friends);
*/


/////////////////////////////////////////////////////////////////////////

//Array Methods - Convert .To String() / .to Locale String()  / .join()

/*
var friends = [
    "hassan",
    "khaled",
    "ali",
    "mohamed",
    "ahmed"
];


console.log(friends);


friends = friends.toLocaleString();

console.log(friends);

friends = friends.toString();

console.log(friends);
*/

////////////////////////////////////


/*
// .join like .tostring and .toLocalString but I can change ( , ) to Number or(" - ") or (" / ")  or any thing

// الفرق اني اقدر اغير القيمه الافتراضيه اللي هي (,) لرقم 

var friends = [
    "Hassan",
    "Khaled",
    "Ali",
    "Mohamed",
    "Ahmed"
];


console.log(friends);

friends = friends.join(" / ");

console.log(friends);
*/


/////////////////////////////////////

/*
var myDate = new Date();

console.log(myDate);

var newDate = myDate.toString();

console.log(newDate);

var newDate = myDate.toLocaleString();

console.log(newDate);
*/

////////////////////////////////////////////////////////////////////////

//Array Methods / Adding Items

/*
var friends = [
    "hassan",
    "khaled",
    "ali",
    "mohamed",
    "ahmed",
    "hassan",
    "khaled",
    "ali",
    "mohamed",
    "ahmed",
    "hassan",
    "khaled",
    "ali",
    "mohamed",
    "ahmed",
    "hassan",
    "khaled",
    "ali",
    "mohamed",
    "ahmed",
    "hassan",
    "khaled",
    "ali",
    "mohamed",
    "ahmed",
    "hassan",
    "khaled",
    "ali",
    "mohamed",
    "ahmed",
    "hassan",
    "khaled",
    "ali",
    "mohamed",
    "ahmed",
    "hassan",
    "khaled",
    "ali",
    "mohamed",
    "ahmed",
    "hassan",
    "khaled",
    "ali",
    "mohamed",
    "ahmed",
    "hassan",
    "khaled",
    "ali",
    "mohamed",
    "ahmed"
];


console.log(friends.length);  // يوجد 50 عنصر في الاراي

// لاضافه العنصر رقم 51 


friends[50] = "ola";  // نكتب رقم العناصر اللي هو 50 ثم نكتب العنصر


console.log(friends.length);  // فاصبح عدد العناصر 51
*/


/*
// or 

friends[friends.length] = "ola";


console.log(friends.length);  // فاصبح عدد العناصر 51


// عن طريق هذا سيتم اضافه العنصر رقم 51 على ال50 عنصر الموجودين تلقائيا مثل الطريقه التى بالاعلى 


// فهذه الطريقه اذا اردنا اضافه اسم على الاسماء الموجوده دون اي مجهود او ان نعرف عددها لنضيفه 

// فان دائما عدد العناصر زياده عن ترقيمها بواحد


// Index begin by 0 

// Length more than Index by (1 number)

// If Index = 50 Then .Length = 51


*/

////////////////////////////////////////////////////////

// Push / Unshift
/*
var friends = [
    "hassan",
    "khaled",
    "ali",
    "mohamed",
    "ahmed",
    "hassan"
];

// Push like .length ==> put Element at the end of elements

console.log(friends);

friends.push("Nada");

console.log(friends);

// unshifht put Element at the start of elements

friends.unshift("Mohamed");

console.log(friends);
*/

////////////////////////////////////////////////////////
 
// Splice ==> put Element at the place which i want or remove Elemnets

/*

// To Remove Elements

var friends = [
    "hassan", // 0 index
    "khaled", // 1 index
    "ali",    // 2 index
    "mohamed",// 3 index
    "ahmed",  // 4 index
    "Noha"  // 5 index
];


console.log(friends);

friends.splice(0, 2);

console.log(friends);

// Splice(index Number, Number of Elements which will Remove)

// قولتله ابدا بالاندكس رقم صفر اللى هو حسن واحذف اول عنصرين فعمل كده 

//["hassan", "khaled", "ali", "mohamed", "ahmed", "Noha"]

///["ali", "mohamed", "ahmed", "Noha"]

*/

////////////////////////////////////////////

/*

// To add Elements

var friends = [
    "hassan", // 0 index
    "khaled", // 1 index
    "ali",    // 2 index
    "mohamed",// 3 index
    "ahmed",  // 4 index
    "hassan"  // 5 index
];


console.log(friends);

friends.splice(3, 0, "ola");

console.log(friends);

// Splice (index Number, Number of Elements which will Remove, The New Element)

// قولتله تعالى من بدايه الاندكس 3 اللى هو محمد ومش تحذف حاجه لكن ضيف اسم علا فضافه قبل الاندكس اللى كاتبه

//["hassan", "khaled", "ali", "mohamed", "ahmed", "hassan"]

//["hassan", "khaled", "ali", "ola", "mohamed", "ahmed", "hassan"]

*/

////////////////////////////////////////////

// .pop ==> To remove last element of Elements Or Know The Last Element Name

/*
var friends = [
    "hassan", // 0 index
    "khaled", // 1 index
    "ali",    // 2 index
    "mohamed",// 3 index
    "ahmed",  // 4 index
    "hassan"  // 5 index
];


console.log(friends);


// To Remove last element of Elements

friends.pop();

console.log(friends);


// Know The Last Element Name

console.log(friends.pop());
*/

////////////////////////////////////////////

// .shift ==> To remove first element of Elements Or Know The first Element Name

/*
var friends = [
    "hassan", // 0 index
    "khaled", // 1 index
    "ali",    // 2 index
    "mohamed",// 3 index
    "ahmed",  // 4 index
    "hassan"  // 5 index
];


console.log(friends);


// To Remove first element of Elements

friends.shift();

console.log(friends);


// Know The first Element Name

console.log(friends.shift());
*/

////////////////////////////////////////////

// .sort ==> To arrange The Array alphabetically ==> A,B,C,....

/*
var friends = [
    "hassan", // 0 index
    "khaled", // 1 index
    "ali",    // 2 index
];

console.log(friends);
*/


/*
// To arrange The Array alphabetically ==> A,B,C,....

friends.sort();

console.log(friends);


// To arrange The Array but reverse alphabetically ==> .....,C,B,A

friends.reverse();

console.log(friends);
*/


/*
// Use .reverse without .sort

friends.reverse();

console.log(friends)

//[hassan", "khaled", "ali"]

//["ali", "khaled", "hassan"]
*/

////////////////////////////////////////////

// .slice ==> To Apper Some Elements from Array

// لازم اعمل متغير عشان اطبع بعد مااخد شريحه معينه
/*
var friends = [
    "Mahmoud", // 0 index
    "Khaled", // 1 index
    "Ali",    // 2 index
    "Mohamed",// 3 index
    "Ahmed",  // 4 index
    "Hassan",  // 5 index
    "Noha",  // 6 index
    "OLaa",  // 7 index
    "Rahma",  // 8 index
    "Fefe",  // 9 index
    "Mona",  // 10 index
    "Omar",  // 11 index
    "Osama",  // 12 index
    "Yousef"  // 13 index
];

var mySlice = friends.slice(4, 6);

console.log(mySlice);
*/

////////////////////////////////////////////

// .concat 

// لدمج اكثر من ارراي
/*
var friend1 = [
    "Mahmoud", // 0 index
    "Khaled",  // 1 index
    "Ali"      // 2 index
];

var friend2 = [
    "Osama", // 0 index
    "Omar",  // 1 index
    "Yousef"      // 2 index
];

var friend3 = [
    "Noha", // 0 index
    "Fefe",  // 1 index
    "Rahma"      // 2 index
];

console.log(friend1);

console.log(friend2);

console.log(friend3);

var allFriends = friend1.concat(friend2, friend3);

console.log(allFriends);
*/

////////////////////////////////////////////

// .search 

/*
// Beging Search from first Eelements

var friends = [
    "Mahmoud", // 0 index
    "Khaled", // 1 index
    "Ali",    // 2 index
    "Mohamed",// 3 index
    "Ahmed",  // 4 index
    "Hassan",  // 5 index
    "Noha",  // 6 index
    "OLaa",  // 7 index
    "Rahma",  // 8 index
    "Fefe",  // 9 index
    "Mona",  // 10 index
    "Omar",  // 11 index
    "Osama",  // 12 index
    "Yousef"  // 13 index
];

var specialFriend = friends.indexOf("Noha");  // Noha ==> 6 index

console.log(specialFriend); // to know Index Number Of The Name

console.log("Hi " + friends[6]);

// or
console.log("Hi " + friends[specialFriend]); // to print The name Which i have search and know index number
*/

/////////////////

// Beging Search from Last Eelements
/*
var friends = [
    "Mahmoud", // 0 index
    "Khaled", // 1 index
    "Ali",    // 2 index
    "Mohamed",// 3 index
    "Ahmed",  // 4 index
    "Hassan",  // 5 index
    "Noha",  // 6 index
    "OLaa",  // 7 index
    "Rahma",  // 8 index
    "Fefe",  // 9 index
    "Mona",  // 10 index
    "Omar",  // 11 index
    "Osama",  // 12 index
    "Yousef"  // 13 index
];

var specialFriend = friends.lastIndexOf("Osama", 13);  // Osama ==> 12 index

console.log(specialFriend); // to know Index Number Of The Name

console.log("Hi " + friends[12]);

// or
console.log("Hi " + friends[specialFriend]); // to print The name Which i have search and know index number
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* String Methods ==> Like Array Methods But there are New Methods */

/*
// 1) typeof (Name of Var)

var myString = "khaled";

console.log(typeof (myString));
*/

////////////////////////////////////////////////

/*
// 2) .length ==> Know Number Of letters of String

var myString = "khaled";

console.log(myString.length); // 6 Letters
*/

////////////////////////////////////////////////

// 3) Convert Elements to string

/*
var myNumber = 100; // Number
 
console.log(typeof (myNumber));

var myNewNumber = myNumber.toString(); // Local String

console.log(typeof (myNewNumber));
*/

////////////////////////////////////////////////

// 4) Convert Elements to Local string

/*
var myNumber = 100; // Number
 
console.log(typeof (myNumber));

var myNewNumber = myNumber.toLocaleString(); // Local String

console.log(typeof (myNewNumber));
*/

////////////////////////////////////////////////

// 5) indexOf: 

/*
// indexOf ("word or letter", Index Number [Choise])

var myString = "I love JavaScript", // 16 index == 17 in Length
    
    myWord = myString.indexOf("love"); // Begin From Index Number 2

console.log(myWord);
*/

////////////

/*
// index ("word or letter", Index Number [Choise])

var myString = "I love JavaScript", // 16 index == 17 in Length
    
    myWord = myString.indexOf("J"); // Index Number 7

console.log(myWord);
*/

////////////

/*
// index ("word or letter", Index Number [Choise])

var myString = "I love JavaScript and Love JQuery", // 32 index == 33 in Length
    
    myWord = myString.indexOf("Love", 15); // Index Number 22 ==> Love JQuery

console.log(myWord);
*/

////////////////////////////////////////////////

// 6) lastIndexOf:

/*
// .lastIndexOf ("word or letter", Index Number [Choise])

var myString = "I love JavaScript", // 16 index == 17 in Length
    
    myWord = myString.lastIndexOf("love"); // Begin From end to Index Number 2

console.log(myWord);
*/

////////////

/*
// .lastIndexOf ("word or letter", Index Number [Choise])

var myString = "I love JavaScript and Love JQuery", // 32 index == 33 in Length
    
    myWord = myString.lastIndexOf("Love", 30); // Index Number 22 ==> Love JQuery

console.log(myWord);
*/

////////////

/*
// .lastIndexOf ("word or letter", Index Number [Choise])

var myString = "I love JavaScript and Love JQuery", // 32 index == 33 in Length
    
    myWord = myString.lastIndexOf("love", 10); // Index Number 2 ==> Love JavaScript

console.log(myWord);
*/

////////////////////////////////////////////////

// 7) .search == .indexOf == .last

/*
var myString = "I love cat",
    
    myWord = myString.search("cat");

console.log(myWord);
*/

////////////////////////////////////////////////

// 8) .split 

/*
// .split()

var myString = "I love cat and dog and rahma",
    
    newString = myString.split(); // Convert String To object (Array)

console.log(newString);

//["I love cat and dog and rahma"]
*/

////////////

/*
// .split("")

var myString = "I love rahma",
    
    newString = myString.split("");

console.log(newString);

// put ( , ) between every letter even space

//["I", " ", "l", "o", "v", "e", " ", "r", "a", "h", "m", "a"]
*/

////////////

/*
// .split(" ")

var myString = "I love rahma",
    
    newString = myString.split(" ");

console.log(newString);

// put ( , ) between every word

//["I", "love", "rahma"]
*/

////////////

/*
// .split("Letter")

var myString = "I love rahma",
    
    newString = myString.split("l"); // Convert String To object (Array)

console.log(newString);

// put ( , ) instead of ( l )

//["I ", "ove rahma"]
*/

////////////

/*
// .split(" ", Number to Show)

var myString = "I love rahma and I want to Marrige from her",
    
    newString = myString.split(" ", 3); // Convert String To object (Array)


console.log(myString); // ==> I love rahma and I want to Marrige from her


console.log(newString); // ==> ["I", "love", "rahma"]
*/

////////////

/*
// .split("-")

var myString = "I-love-rahma",
    
    newString = myString.split("-"); 

console.log(newString); 

// ==> ["I", "love", "rahma"]
*/

////////////////////////////////////////////////

// 9) Split: split(Start Index Number, [End Index Number + 1])

/*
/////////////// 0123456789
var myString = "I love cat";
    
console.log(myString.length); // 10 In Length = 9 Index
*/

/*
var myNewString = myString.slice(2, 6);

console.log(myNewString); // love
*/

/*
var myNewString = myString.slice(4, 10);

console.log(myNewString); // e cat
*/

////////////////////////////////////////////////

/*
// 10) to locate last letter at string

var myString = "I love cat";

console.log(myString.charAt(myString.length - 1)); // t ==> last letter at string
*/

////////////////////////////////////////////////

/*
// 11) Know UNI Code Number For Any Letter Or Sign

var myString = "I love cat";

console.log(myString.charCodeAt(0));

// I ==> 73

console.log(myString.charCodeAt(1));

// space ==> 32
*/

////////////////////////////////////////////////

/*
// 12) Replace ("old word", "new word")

var myString = "I love cat";

console.log(myString.replace("cat", "Rahma"));
*/


////////////////////////////////////////////////

/*
// 13) Concat ==> add string to string

// var name.concat("Space", another var name)

var myString1 = "I love cat",
    
    myString2 = "and Love Rahma",
    
    newString = myString1.concat(" ", myString2);

console.log(newString);
*/

////////////////////////////////////////////////

/*
// 14) Add word or Sign by UNI Code Number

var myString = String.fromCharCode(76, 111, 118, 101, 32);

console.log(myString); // ==> Love
*/

////////////////////////////////////////////////

/*
// 15) .toUpperCase();

// Change All Letters of String to Capital Letters

var myString = "i love rahma";

console.log(myString.toUpperCase());
*/

////////////////////////////////////////////////

/*
// 15) .toLowerCase();

// Change All Letters of String to Small Letters

var myString = "I LOVE RAHMA";

console.log(myString.toLowerCase());
*/

////////////////////////////////////////////////

/*
// 16) .link("url");

var myString = "Google";

document.getElementById("test").innerHTML = myString.link("https://www.google.com.eg");
*/

////////////////////////////////////////////////

/*
// 17) String Methods Chain

var myNumber = 200,
    
    myString = myNumber.toString().replace(2, 3).split("");

console.log(myString);
*/

////////////////////////////////////////////////
        
            /* Loop / For */
/* 
    for ( Initialzation; Condition; Final Expression) {
    
    
    }
    
    Initialzation ==> Executed Before The Loop once
    
    Condition ==> Define The Condition To Run the Loop
    
    Final Expression ==>Executed Everytime The code Run
*/

/*
// Example (1):

var i;

for (i = 2010; i <= 2018; i = i + 1) {
    
    console.log(i);
}
*/

/* 
    i = 2010 ==> Start;
    
    i <= 2018 ==> End / count until the value become 2018
    
    i = i + 1 === i++ ==> Add one number to the Start Number
    
    2010 + 1 = 2011
    
    2011 + 1 = 2012
    
    2012 + 1 = 2013
    
    2014 + 1 = 2015
    
    2015 + 1 = 2016
    
    2016 + 1 = 2017
    
    2017 + 1 = 2018
 
*/

////////////////////////////////////////////////

/*
// Example (2):

var i;

for (i = 10; i >= 3; i = i - 1) {
    
    console.log(i);
}
*/

////////////////////////////////////////////////

/*
// Example (3):

var i;

for (i = 1; i <= 15; i = i + 2) {
    
    console.log(i);
}
*/

////////////////////////////////////////////////

/*
// Example (4):

var i;

for (i = 20; i >= 1; i = i - 2) {
    
    console.log(i);
}
*/

////////////////////////////////////////////////

/*
// Example (5):

var friends = [
    "Ali",     // 0 index
    "Ahmed",   // 1 index
    "khaled",  // 2 index
    "Rahma"    // 3 index
];

var i;

for (i = 0; i < friends.length; i = i + 1) { // frindes.length = 4 
    
    console.log(i);
}
*/

/* 
    print Index Number: 0
                        1
                        2
                        3
                        4
*/

////////////////////////////////////////////////

/*
// Example (6)

var friends = [
    "Ali",     // 0 index
    "Ahmed",   // 1 index
    "khaled",  // 2 index
    "Rahma"    // 3 index
];

var i;

for (i = 0; i < friends.length; i = i + 1) { // frindes.length = 4 
    
    console.log(friends[i]);
}
*/

/*     
    i = all index number of array
    
    print Array Name:   Ali
                        Ahmed
                        khaled
                        Rahma
                        
*/


////////////////////////////////////////////////

// For / In Loop with( Object )

/*
var myCar = {
    
    colour: "White",
    type: "sedan",
    price: "50.000",
    model: "2018"
};
*/

/*
// Print Element in Object

console.log(myCar.type);

console.log(myCar.colour);

console.log(myCar.price);

console.log(myCar.model);
*/


/*
    For / In Loop Syntax

    ==> var prop
    
    ==> for (prop in object) {
        
        if( object name.hasOwnProperty(prop)) {
            
            do somthing
        }
    }

    // prop ==> propaties in object
    
    // if( var name.hasOwnProperty(prop)) ==> filter any Property didnot exist
*/

/*
var prop; // identify var prop

for (prop in myCar) {
    
    if (myCar.hasOwnProperty(prop)) {
         
        console.log(prop + ": " + myCar[prop]);
        
    }

}
*/

////////////////////////////////////////////////

/* For / Loop Advanced */

/* 
    ( i = 0; i <= 10; i = i + 1;) ==> (;;)
    
    1) var i = 0 ==> ( i = 0; ) in for
    
    2) ( i <= 10 ) ===> if (i > 10) break
    
    3) i = i + 1 ==> writen after print by console or output print like innerHTML
*/

/*
var i = 0;

for (;;) {
    
    if (i > 10) break;
    
    console.log(i);
    
    i = i + 1;
}
*/

////////////////////////////////////////////////

/* Loop ==> While / Do - While */

/* 

    1) Syntax While:
    
    while ( Condtion ) {
    
        Statment
    }
    
    //////
    
    2) Syntax Do - While:
    
    do {
    
        Statment;
        
    }  while ( Condtion );  

*/


/*
var i = 0;

while (i <= 10) {
    
    console.log(i);
    
    i = i + 1;
}
*/

/*
var i = 0;

do {
    
    console.log(i);
    
    i = i + 1;
    
} while (i <= 10);
*/

////////////////////////////////////////////////

/* Loop - Control ==> Break / Continue / Label */


// 1) Break

/*
var i;

for (i = 0; i <= 10; i = i + 1) {
    
    if (i > 6) {
        
        break;
        
    }
    
    console.log(i);
}

// when number become 6 the counter will stop

// 1 , 2 , 3 , 4 , 5 , 6
*/

//////////////////////

// 2) Continue

/*
var i;

for (i = 0; i <= 10; i = i + 1) {
    
    if (i === 6) {
        
        continue;
        
    }
    
    console.log(i);
}

// 1 , 2 , 3 , 4 , 5 , 7 , 8 , 9 , 10
*/

//////////////////////

// 3) Label

// Make Loop Inside Loop

/*
// Example (1)

var i, x;

for (i = 1; i <= 4; i = i + 1) {
    
    for (x = 15; x < 20; x = x + 1) {
        
        console.log(i + "=>" + x);
    }
}
*/

//////////////////////

// Example (2)

/*
// Break the MainLoop

var i, x;

MainLoop:

for (i = 1; i <= 4; i = i + 1) {
    
    ChildLoop:
    
    for (x = 15; x < 20; x = x + 1) {
        
        if (x ===17) {
            
            break MainLoop; 
        }
        
        console.log(i + "=>" + x);
    }
}
*/
/* when ( x ) become 16 the MainLoop will stop 

    1=>15
    1=>16
    
*/

//////////////////////

// Example (3)

/*
// Break the ChildLoop

var i, x;

MainLoop:

for (i = 1; i <= 4; i = i + 1) {
    
    ChildLoop:
    
    for (x = 15; x < 20; x = x + 1) {
        
        if (x ===17) {
            
            break ChildLoop; 
        }
        
        console.log(i + "=>" + x);
    }
}
*/

/* when ( x ) become 16 the MainLoop will continue  

    1=>15
    1=>16
    2=>15
    2=>16
    3=>15
    3=>16
    4=>15
    4=>16
    
*/

//////////////////////

// Example (4)

/*
// Continue the MainLoop

var i, x;

MainLoop:

for (i = 1; i <= 4; i = i + 1) {
    
    ChildLoop:
    
    for (x = 15; x < 20; x = x + 1) {
        
        if (x ===17) {
            
            continue MainLoop; 
        }
        
        console.log(i + "=>" + x);
    }
}
*/

/* when ( x ) become 17 the MainLoop will continue  

    1=>15
    1=>16
    
    2=>15
    2=>16
    
    3=>15
    3=>16
    
    4=>15
    4=>16
    
*/

//////////////////////

// Example (5)

/*
// continue the ChildLoop

var i, x;

MainLoop:

for (i = 1; i <= 4; i = i + 1) {
    
    ChildLoop:
    
    for (x = 15; x < 20; x = x + 1) {
        
        if (x ===17) {
            
            continue ChildLoop; 
        }
        
        console.log(i + "=>" + x);
    }
}
*/

/* when ( x ) become 17 the MainLoop will continue  

    1=>15
    1=>16
    1=>18
    1=>19
    
    2=>15
    2=>16
    2=>18
    2=>19
       
    3=>15
    3=>16
    3=>18
    3=>19
    
    4=>15
    4=>16
    4=>18
    4=>19
   
   Number 17 remove
*/

////////////////////////////////////////////////

// Math 

    /*      1) Ceil      */

/*  
    It makes the decimal number to the nearest  number larger than it

    from 0 to 0.9 => will be 1
*/

/*
var x = Math.ceil(4.05);

console.log(x);

// 4.05 = 5
*/

////////////

/*
var x = Math.ceil(5.5);

console.log(x);

// 5.5 = 6
*/

////////////

/*
var x = Math.ceil(-5.5);

console.log(x);

// -5.5 = -5
*/

//////////////////////////////////

    /*      2) Floor      */

/*  
    It makes the decimal number to the nearest  number smaller than it

    from 0 to 0.9 => will be 0
*/

/*
var x = Math.floor(4.99);

console.log(x);

// 4.99 = 4
*/

////////////

/*
var x = Math.floor(5.5);

console.log(x);

// 5.5 = 5
*/

////////////

/*
var x = Math.floor(-5.5);

console.log(x);

// -5.5 = -6
*/

////////////

/*
var x = Math.floor(-5.5 + 2);

console.log(x);

// -5.5 + 2 = -3.5 = -4
*/

//////////////////////////////////

    /*      3) Round      */

/*  
    It makes the decimal number to the nearest  number
    
    from 0 to 0.4 => will be 0
    
    from 0.5 to 0.9 => will br 1
*/

/*
var x = Math.round(4.99);

console.log(x);

// 4.99 = 5
*/

////////////

/*
var x = Math.round(5.5);

console.log(x);

// 5.5 = 6
*/

////////////

/*
var x = Math.round(5.4);

console.log(x);

// 5.4 = 5
*/

////////////

/*
var x = Math.round(-5.5);

console.log(x);

// -5.5 = -5
*/

////////////

/*
var x = Math.round(-5.6 + 2);

console.log(x);

// -5.6 + 2 = -3.6 = -4
*/

//////////////////////////////////

    /*      4) Min / Max      */

//      1) Minimam

/*
var x = Math.min(55, -5.5, 60, 1000);

console.log(x);

// -5.5 is small number
*/

//////////////

/*
var x = Math.min(100.5, 5.5, 65.7, 500),

    y = Math.round(x);

console.log(y);
*/

//////////////

/*
var x = Math.min(100.5, 555.5, 65.7, 500),

    y = (Math.round(x) + 20.8),
    
    z = Math.ceil(y);

console.log(x); // 65.7

console.log(y); // 65.7 + 20.8 = 86.8

console.log(z); // 87
*/

/////////////////////////////

//      2) Maxmum

/*
var x = Math.max(55, -5.5, 60, 1000);

console.log(x);

// 1000 is large number
*/

//////////////

/*
var x = Math.max(100.5, 5.5, 65.7, 500.6),

    y = Math.round(x);

console.log(y); // 501
*/

//////////////

/*
var x = Math.max(100.5, 555.5, 65.7, 500),

    y = (Math.round(x) + 20.8),
    
    z = Math.floor(y);

console.log(x); // 555.5

console.log(y); // 555.5 + 20.8 = 576.8

console.log(z); // 576
*/




//////////////////////////////////

    /*      4) Random      */

/*
var x = Math.random();  /// بيطلع رقم عشوائي 


// Deicmal Numbers from 0 to 0.99999

// console.log(x);



// Deicmal Numbers from 0 to 19.99999

// console.log(x * 20);



// Deicmal Numbers from 0 to 9.99999 then make it to the nearest number larger than it

// console.log(Math.ceil(x * 10));

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10



// Deicmal Numbers from 0 to 9.99999 then make it to the nearest number smaller than it

// console.log(Math.floor((x * 10) + 1));

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

*/

////////////////////////////////////////////////

    /*      Regular Expression      */

    /*      التعبيرات النمطيه      */

/*
    لاتخص فقط الجافا سكريبت
    
    use with => Search | Replace | Match | Split | Test
    
    Regular Expression Syntax:
    
    /pattern/attributes
    
    Attributes List:
    
    1) [ i ] ==> Case Insensitive ( الحروف غير حساسه )
    
    2) [ g ] ==> Global Search
    
    3) [ m ] ==> Multi Line Search
    
    4) Brackets use:
        
        1) [...] Search for word or letter
        
        2) [^...] Not word or letter ==> اي حرف او كلمه غير اللى مكتوبين ابحث عنهم ونفذ فيهم امر معين 

        3) [] Range ==> from ... to ....
        
        4) [a-z] Range Small letters
        
        5) [A-Z] Range Capital letters
        
        6) [0-9] Range Numbers
        
        7) [^0-9] Not Range
        
        8) [A-g] ==> Range [A-Z] + Range [a-g]
        
        9) [0-9a-z] Double Range 
        
    5) Quantifiers:
    
        1) Letter+ ==> Word Contain one Letter
        
        2) Letter{Number} ==> Word Contain number of Letter
        
        3) Letter{Number, Number} ==> Word Contain Number or Number
        
        4) Letter{Number,} ==> Word Contain Number and more Nnumber => At Least Number
        
        
*/


/*
    // Example (1)

var string = "I Love Cat",
    
    result = string.search(/L/);

console.log(result);

// L ==> index Number 2
*/

////////////////////

/*
    // Example (2)

var string = "I Love Cat and love rahma",
    
    result = string.search(/l/);

console.log(result);

// l ==> index Number 15
*/

////////////////////

/*
    // Example (3)

var string = "I Love Cat and love rahma",
    
    result = string.replace(/L/, "@");

console.log(result);

// I @ove Cat and love rahma
// replace only L capital not l small
*/

////////////////////

/*
    // Example (4)

var string = "I Love Cat and love rahma",
    
    result = string.replace(/l/, "@");

console.log(result);

// I Love Cat and @ove rahma
// replace only l small not L capital
*/

////////////////////

/*
    // Example (5) // [ i ]

var string = "I love Cat and love rahma",
    
    result = string.replace(/L/i, "@");

console.log(result);

// I @ove Cat and love rahma
// replace any L. but replace only first l
*/

////////////////////

/*
    // Example (6) // [ i ] , [ g ]

var string = "I love Cat and Love rahma",
    
    result = string.replace(/L/ig, "@");

console.log(result);

// I @ove Cat and love rahma
// replace all L ( small and capital ).
*/

////////////////////

/*
    // Example (7) // [...]

var string = "I love Cat and Love rahma",
    
    result = string.replace(/[love]/ig, "@");

console.log(result);

// I @@@@ Cat and @@@@ rahma
*/

////////////////////

/*
    // Example (7) // [^...] not

var string = "I love Cat and Love rahma",
    
    result = string.replace(/[^love]/ig, "@");

console.log(result);

// @@love@@@@@@@@@Love@@@@@@
// replace any word or letter even space other than the written word [love]
*/

////////////////////

/*
    // Example (8) // [...] Range

var string = "I love Cat and Love rahma",
    
    result = string.replace(/[a-c]/ig, "@");

console.log(result);

// I love @@t @nd Love r@hm@
// replace any letter which from a to c
*/

////////////////////

/*
    // Example (9) // [...] Range

var string = "I love Cat and Love rahma",
    
    result = string.replace(/[A-Z]/g, "@");

console.log(result);

// @ love @at and @ove rahma
// replace only capital letters which from A to Z
*/

////////////////////

    // Example (10) // Letter+

/*
var string = "I lovee Cat and Love rahma",
    
    result1 = string.replace(/e/gi, "@");

console.log(result1);

// I lov@@ Cat and Lov@ rahma
// replace any e


var string = "I lovee Cat and Love rahma",

    result2 = string.replace(/e+/gi, "@");

console.log(result2);

// I lov@ Cat and lov@ rahma
// replace any word have one (e) or more by one (@)
// lovee has two (e) but have replaced by one (@)
*/

////////////////////

    // Example (11) // Letter(Number)

/*
var string = "I lovee Cat and LovEee rahma",

    result = string.replace(/e{2}/gi, "@");

console.log(result);

// I lov@ Cat and Love rahma
// replace only word have two (e) by one (@)
// lovee has two (e) but have replaced by one (@)
// Loveee has three (e) then two (e) will replace only
*/

////////////////////

    // Example (12) // Letter(Number, Number)

/*
var string = "I lovee Cat and LovEee rahma",

    result = string.replace(/e{2,3}/gi, "@");

console.log(result);

// I lov@ Cat and Lov@ rahma
// replace only word have two (e) or three (e) by one (@)
// lovee has two (e) but have replaced by one (@)
// Loveee has three (e) but have replaced by one (@)
*/

////////////////////

    // Example (13) // Letter(Number, Number)

/*
var string = "I lovee Cat and LovEeeeeeeee rahma and love dogs",

    result = string.replace(/e{2,4}/gi, "@");

console.log(result);

// I lov@ Cat and Lov@@e rahma and love dogs

// replace only word have two (e) or three (e) by one (@)

// lovee has two (e) but have replaced by one (@)

// LovEeeeeeeee has 9 (e)

// 9 (e) ==> i write 2 or 4 => if word have 2 (e) or 4 (e) then will replace ==> 8 (e) will replace and 1 (e) will not replace
*/

////////////////////

    // Example (14) // Letter(Number)

/*
var string = "I lovee Cat and LovEeeeeeee rahma",

    result = string.replace(/e{2,}/gi, "@");

console.log(result);

// I lov@ Cat and Lov@ rahma
// replace only word have two (e) or more by one (@)
*/

////////////////////////////////////////////////

    /*      Date Intro      */

/*
    1) new Date(); ==> Print Current Date & Time
    
    2) new Date(Millseconds); ==> Print Millseconds From UTC 1 Jan 1970 00:00:00
    
    3) new Date(Date String) ==> Add Date String
    
    4) new Date (year month, day, hour, minutes, seconds, millseconds)
*/


        // Example (1)
/* 
var theDate = new Date();

console.log(theDate);

// Thu Jul 05 2018 12:45:23 GMT+0200 (Eastern European Standard Time)
*/

////////////////////

        // Example (2)
/*  
var theDate = new Date(0);

console.log(theDate);

// Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)

// 02 ==> لان في مصر +ساعتين علي حسب خط جرينتش
*/

////////////////////

        // Example (3)
/*    
var theDate = new Date(10000);

console.log(theDate);

// Thu Jan 01 1970 02:00:10 GMT+0200 (Eastern European Standard Time)

// 02 ==> لان في مصر +ساعتين علي حسب خط جرينتش

// 10 second ==> 10000 => I have Write it in (10000)
*/

////////////////////

        // Example (4)
/*
var theDate = new Date("Jan 31, 1996 01:20:50");

console.log(theDate);

// Wed Jan 31 1996 01:20:50 GMT+0200 (Eastern European Standard Time)
*/

////////////////////

        // Example (5)
/*
var theDate = new Date(1997, 0, 31, 1, 25, 30);

console.log(theDate);

// Wed Jan 31 1997 01:25:30 GMT+0200 (Eastern European Standard Time)
*/

////////////////////////////////////////////////

    /*      Date Format      */

/*
    1) Full Format
    
    2) Long Format
    
    3) Short Format
    
    4) Iso Format
*/


    // 1) Full Format
/*
var theDate = new Date("october 25, 1982 09:20:50");

console.log(theDate);

// Mon Oct 25 1982 09:20:50 GMT+0200 (Eastern European Standard Time)
*/

////////////////////

    // 2) Long Format
/*
var theDate = new Date("oct 25 1982 09:20:50");

console.log(theDate);

// Mon Oct 25 1982 09:20:50 GMT+0200 (Eastern European Standard Time)
*/

////////////////////

    // 3) Short Format
/*
var theDate = new Date("10/25/1995 09:20:50");

console.log(theDate);

// Wed Oct 25 1995 09:20:50 GMT+0200 (Eastern European Standard Time)

// The Month must be come first before Day
*/

////////////////////

    // 4) ISO Format
/*
var theDate = new Date("1992-1-25 09:20:50+02:00");

console.log(theDate);

// Sat Jan 25 1992 09:20:50 GMT+0200 (Eastern European Standard Time)
*/

////////////////////////////////////////////////

    /*      Date Functions Part 1      */

/*
    1) getDate() ==> Day of the Month (1-31)
    
    2) getDay() ==> Day of the Week (0-6) ==> begin by Sunday = 0 / End by Saterday = 6 
    
    3) getFullYear() ==> Get Full Year
    
    4) getHours() ==> Get Hours (0-23)
    
    5) getMinutes() ==> Get Minutes (0-59)
    
    6) getSeconds() ==> Get Seconds (0-59)
    
    7) getMilliSeconds() ==> Get Milli Seconds (0-999)
    
    8) getTime() ==> Number of MilliSeconds from 1970 or Specific Date to Now
    
    9) getTimezoneOffset() ==> Get Diffrent Between UTC & Your Local Time In Minutes
    
    
    ////////////////////////////////////////
    
        // UTC Time
        
    1) getUTCDate() ==> Day of the Month (1-31)
    
    2) getUTCDay() ==> Day of the Week (0-6) ==> begin by Sunday = 0 / End by Saterday = 6 
        
    3) getUTCHours() ==> Get Hours (0-59)
    
    4) getUTCMinutes() ==> Get Minutes (0-59)
    
    5) getUTCSeconds() ==> Get Seconds (0-59)
    
    6) getUTCMilliSeconds() ==> Get Milli Seconds (0-999)
    
    7) getUTCMonth() ==> Number of MilliSeconds from 1970 or Specific Date to Now

*/


    // 1) getDate()
/*
var theDate = new Date(),
    
    theDay = theDate.getDate();

console.log(theDate);

console.log(theDay);


// Thu Jul (05) 2018 13:22:26 GMT+0200

// Day (05) in the month
*/

////////////////////

    // 3) getFullYear()
/*
var theDate = new Date(),
    
    theYear = theDate.getFullYear();

console.log(theYear);


// 2018
*/

////////////////////

    // 4) getHours()
/*
var theDate = new Date(),
    
    theHour = theDate.getHours();

console.log(theHour);


// 13
*/

////////////////////

    // 5) getTime()
/*
var theDate = new Date(),
    
    theTime = theDate.getTime();

console.log(theTime);

// 1530963955850

var theDD = new Date(1530963955850);
    
console.log(theDD);

// Sat Jul 07 2018 13:45:55 GMT+0200
*/

////////////////////

    // 6) getTime()
/*
var theDate = new Date(),
    
    theTime = theDate.getTimezoneOffset();


console.log(theTime);

// -120
*/

////////////////////

    // 7) getUTCDate()
/*
var theDate = new Date(),
    
    theTime = theDate.getUTCDate();


console.log(theTime);

// Day 7 in Month
*/

////////////////////

    // 8) getUTCDay()
/*
var theDate = new Date(),
    
    theTime = theDate.getUTCDay();


console.log(theTime);

// Day 6 in Week
*/

////////////////////

    // 9) getUTCHours()
/*
var theDate = new Date(),
    
    theTime = theDate.getUTCHours();


console.log(theTime);

// 11 in UTC
*/

////////////////////

    // 10) getUTCMinutes()
/*
var theDate = new Date(),
    
    theTime = theDate.getUTCMinutes();


console.log(theTime);

// 0 in UTC
*/

////////////////////

    // 11) getUTCMonth()
/*
var theDate = new Date(),
    
    theTime = theDate.getUTCMonth();


console.log(theTime);

// 6
*/

////////////////////////////////////////////////

    /*      Date Functions Part 2      */

/*
    1) setDate() ==> set Day of the Month (1-31) // if i write 0 => هيجبلي اخر يوم في الشهر اللي فات // if write 31 => لو الشهر 30 يوم بس هيجبلي اول يوم في الشهر الجاي
    
    2) setFullYear() ==> set Full Year (Year[Req], Month[Optional], Day[Optional])
    
    4) setHours() ==> Set Hours (hours[Req/0-23], Min[Optional], Sec[Optional])
    
    5) setMinutes() ==> Set Minutes (0-59)
    
    6) setSeconds() ==> Set Seconds (0-59)
    
    7) setMilliSeconds() ==> Set Milli Seconds (0-999)
    
    8) setMonth() ==> Set Month (0-11) // 0 = Jan / 11 = Dec
    
*/


    // 1) setDate()
/*
var theDate = new Date();
    
theDate.setDate(0);


console.log(theDate);

// Sat Jun 30 2018 14:06:57 GMT+0200 
*/

////////////////////

    // 2) setFullYear(Year, Month[0-11], Day[1-31])

/*
var theDate = new Date();
    
theDate.setFullYear(2017, 11);


console.log(theDate);

// Thu Dec 07 2017 14:11:57 GMT+0200
*/

/*
var theDate = new Date();
    
theDate.setFullYear(2017, 0, 4);


console.log(theDate);

// Wed Jan 04 2017 14:12:51 GMT+0200
*/

/*
var theDate = new Date();
    
theDate.setFullYear(2017, 12, 4);


console.log(theDate);

// Thu Jan 04 2018 14:13:22 GMT+0200
*/

////////////////////

    // 3) setHours(hours[Req/0-23], Min[Optional], Sec[Optional])
/*
var theDate = new Date();
    
theDate.setHours(23, 15, 50);


console.log(theDate);

// Sat Jul 07 2018 23:15:50 GMT+0200  
*/

/*
var theDate = new Date();
    
theDate.setHours(24, 15, 50);


console.log(theDate);

// Sun Jul 08 2018 00:15:50 GMT+0200 
*/

////////////////////

    // 4) setMonth()
/*
var theDate = new Date();
    
theDate.setMonth(11);


console.log(theDate);

// Fri Dec 07 2018 14:22:02 GMT+0200 
*/

////////////////////////////////////////////////

    /*      Date Functions Part 3      */

/*
        1) now() ==> Print Date in Milliseconds from 1970 to Now
        
        2) parse() ==> Print Date in Milliseconds from 1970 to the Date I have Written
*/




    // 1) now()
/*
var theDate = new Date(1530966327592),
    
    now = Date.now();


console.log(now);

// 1530966327592 

console.log(theDate);

// Sat Jul 07 2018 14:25:27 GMT+0200
*/

/*
var theDate = new Date(),
    
    now = Date.now(),
    
    min = 1000 * 60,
    
    hour = min * 60,
    
    day = hour * 24,
    
    month = day * 30,
    
    year = month * 12;


console.log(Math.round(now / year));

// 49 year From 1970 To 2018

console.log(Math.round(now / month));

// 591 month From 1970 To 2018

console.log(Math.round(now / day));

// 17720 day From 1970 To 2018

console.log(Math.round(now / hour));

// 425269 hour From 1970 To 2018

console.log(Math.round(now / min));

// 25516112 Minutes From 1970 To 2018
*/

////////////////////

    // 2) parse()
/*
var theDate = new Date(),
    
    myDate = Date.parse("25 oct 2000 12:50:50"),
    
    min = 1000 * 60,
    
    hour = min * 60,
    
    day = hour * 24,
    
    month = day * 30,
    
    year = month * 12;

console.log(myDate);

// 972471050000

console.log(Math.round(myDate / year));

// 31 year From 1970 To 2000

console.log(Math.round(myDate / month));

// 375 month From 1970 To 2000

console.log(Math.round(myDate / day));

// 11255 day From 1970 To 2000

console.log(Math.round(myDate / hour));

// 270131 hour From 1970 To 2000

console.log(Math.round(myDate / min));

// 16207851 Minutes From 1970 To 2000
*/

////////////////////

    // 3) toISOString()
/*
var theDate = new Date(),
    
    myIso = theDate.toISOString();

console.log(myIso);

// 2018-07-07T12:41:09.566Z
*/

////////////////////

    // 4) toDateString()
/*
var theDate = new Date(),
    
    myDate = theDate.toDateString();

console.log(myDate);

// Sat Jul 07 2018
*/

////////////////////

    // 5) toTimeString()
/*
var theDate = new Date(),
    
    myDate = theDate.toTimeString();

console.log(myDate);

// 14:42:07 GMT+0200 (Eastern European Standard Time)
*/

////////////////////

    // 6) toLocalString()
/*
var theDate = new Date(),
    
    myDate = theDate.toLocaleDateString();

console.log(myDate);

// 7/7/2018
*/

////////////////////////////////////////////////

    /*      Number Intro      */

/*
    Number Type:
    
        1) Number => 100
        
        2) HexaDeceml => Start with ( 0x ) / 0xdd = 221
        
        3) Octal => Start with ( 0 ) / 025 = 21
        
        4) NAN => Not a Number
        
        5) Infinity => 1 / 0
        
        6) - Infinity => -1 / 0
*/

////////////////////////////////////////////////

    /*      Number Methods      */


/*
    1) toString();
    
    2) toExponential(); 
    
    3) toFixed();
    
    4) parseInt(); = parse Intger => turn String which begin by Number to Number / "100px" => 100
*/


    // 1) toString()
/*
var number = 100,
    
    newx = number.toString();

console.log(newx);

console.log(typeof (newx));
*/

////////////////////

    // 2) toExponential()
/*
var number = 100,
    
    newx = number.toExponential();

console.log(newx);

console.log(typeof (newx));

// 1e+2 = 1 * ( 10^2 ) = 1 * 10 * 10 = 100 
*/

//////

/*
var number = 800,
    
    newx = number.toExponential();

console.log(newx);

console.log(typeof (newx));

// 8e+2 = 8 * ( 10^2 ) = 8 * 10 * 10 = 800 
*/

//////

/*
var number = 25,
    
    newx = number.toExponential();

console.log(newx);

console.log(typeof (newx));

// 2.5e+1 = 2.5 * ( 10^1 ) = 2.5 * 10 = 25 
*/

////////////////////

    // 3) toFixed()

/*
var number = 5.4,
    
    newx = number.toFixed(0);

console.log(newx);

// 5
*/

//////

/*
var number = 5.5,
    
    newx = number.toFixed(0);

console.log(newx);

// 6
*/

//////

/*
var number = 5.45,
    
    newx = number.toFixed(1);

console.log(newx);

// 5.5

// قرب الرقم وسيب رقم واحد بعد العلامه العشريه
*/

//////

/*
var number = 5.455,
    
    newx = number.toFixed(2);

console.log(newx);

// 5.46

// قرب الرقم وسيب رقمين بعد العلامه العشريه
*/

////////////////////



















