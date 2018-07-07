/*jslint evil: true, plusplus: true */
/*global console */
// لحل بعض المشاكل لازم يكونو ف الاول


/* 
    Concatenaion سلسله بين الاسترينج
*/

/*
var myName = "khaled",
    
    myAge = 22,
    
    myCountry = "EGYPT",
    
    myDiv = document.getElementById("test");


myDiv.innerHTML = "My Age is: " + myAge + "<br><br>" + "My Name is: " + myName + "<br><br>" + "My Country is: " + myCountry;
*/

////////////////////////////////////////////////////////

// Data Type

/* 
    1) Boolean المنطق
*/

/*
var hasDiscount = false;

if (hasDiscount === true) {
    
    var mainPrice = 350;
    
} else {
    var mainPrice = 450;
}

document.getElementById("test").innerHTML = mainPrice;
*/

//////////////////

/* 
    2) Array
*/

/*
var socialWebSites = ["facebook.com", " youtube.com"];
*/

/*
    Facebook.com = 0 index
    youtube.com = 1 index
*/

/*
document.getElementById("test").innerHTML = socialWebSites[1];
*/


//////////////////


/* 
    3) Object البيانات
*/

/*
var myInfo = {firstName: "khaled", lastName: "Magdy"};

// document.getElementById("test").innerHTML = myInfo.firstName;

// document.getElementById("test").innerHTML = myInfo.lastName;
*/

//////////////////


/*
    4) String (Text)
*/

/*
var myName = "Khaled"

document.getElementById("test").innerHTML = myName
*/

//////////////////


/*
    5) Number                                                   
*/

/*
var myPrice = 20;

document.getElementById("test").innerHTML = myPrice
*/


////////////////////////////////////////////////////////


/* 
    تنسيق جمله 
*/

/*
var myName = "<span style = 'color:red'>My Name Is: </span>";


document.getElementById("test").innerHTML = myName + "Khaled";
*/


////////////////////////////////////////////////////////


/*
function generateYears(start, end) {
    
    "use strict";
    
    var years;
    
    document.write("<select>");
    
    
    for (years = start; years <= end; years++) {
        
        document.write("<option value=\"" + years + "\">" + years + "<option>");
    }
    
    document.write("</select>");

}

generateYears(2010, 2012);
*/







