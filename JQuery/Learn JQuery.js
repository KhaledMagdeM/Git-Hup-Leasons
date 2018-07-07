/* global $, document, console, jQuery  */

/*jslint browser: true*/

/*jslint devel: true*/



/* Events */

/* 1)Event click*/

/*
$(document).ready(function () {
    
    "use strict";
    
    $("button").click(function () {
        $("p").hide();
    });
    
});

*/


/* (this)  refer to element I written  */

/*
$(document).ready(function () {
    
    "use strict";
    
    $("button").click(function () {
        
        $(this).css("color", "#00f");
    });
    
});
*/


////////////////////////////////////////////

/* 2) Event dblclick */

/*
$(document).ready(function () {
    
    "use strict";
    
    $("button").dblclick(function () {
        
        $("p").css("color", "#00f");
    });
    
});

*/

////////////////////////////////////////////
/*  3) Event: mouseenter 

    4) Event: mouseleave
*/

/*
$(document).ready(function () {
    
    "use strict";
    
    $("button").mouseenter(function () {
        
        $("p").css("color", "#00f");
    });
    
    $("button").mouseleave(function () {
        
        $("p").css("color", "#f00");
    });
    
});

*/
////////////////////////////////////////////
/*  

    5) Event: hover 

*/


/*
$(document).ready(function () {
    
    "use strict";
    
    $("button").hover(
        
        function () {
            
            $("p").css("color", "#f00");
        },
        
        
        function () {
            
            $("p").css("color", "#f00");
                     
        }
    
    );
       
});

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Effects */

/*  

    1) Hide 

*/

/*
$(document).ready(function () {
    
    "use strict";
    
    $("button").click(function () {
        
        $("p").hide();
        
    });
    
});
*/

////////////////////////////////////////////

/*  
    2) Show 
*/

/*
$(document).ready(function () {
    
    "use strict";
    
    $("button").click(function () {
                      
        $("p").show();
        
    });
    
});
*/
////////////////////////////////////////////

/*  
    3) Togglo 
*/

/*
$(document).ready(function () {
    
    "use strict";
    
    $("button").click(function () {
        
        $("p").toggle();
    });
    
    
});
*/

////////////////////////////////////////////

/* Examples */


/* example (1) */

/*
$(document).ready(function () {
    
    "use strict";
    
    $("button").click(function () {
        
        
        $("p").hide(550, function () {
            
            $("span").show(550);
        
        });
        
    });
    
    
});

*/

////////////////////////////////////////////

/* example (2) */

/*
$(document).ready(function () {
    
    "use strict";
    
    $("button").click(function () {
        
        
        $("p").hide(550, alert("Hi"));
    
    });
});
*/

////////////////////////////////////////////

/* example (3) */

/*
$(document).ready(function () {
    
    "use strict";
    
    $("button").click(function () {
        
        
        $("span").hide(550, function() {
            
            $("p").toggle(600)
        });
    
    });
});

*/

////////////////////////////////////////////

/*  
    4) FadeIn / fadeOut / fadeToggle
*/

/*
$(document).ready(function () {
    
    "use strict";
    
    $("button").click(function () {
       
        $("div").fadeToggle(1000)
        
    });
});
    
*/


////////////////////////////////////////////

/*  
    5) FadeTo
*/

/*
$(document).ready(function () {
    
    "use strict";
    
    $("button").click(function () {
       
        $("div").fadeTo(1000, 0.6);
        
    });
});
*/


////////////////////////////////////////////////////////////////////////////////////////

/* Animate */
/*
$(document).ready(function () {
    
    "use strict";
    
    $("div").animate({
        
        width: "show",
        left: "200px",
        top: "+=100px",
        height: "-=100px",
        borderRadius: "30px"
        
    }, 3000, function () {
        
        $("span").fadeIn(2000);
    });
      
});
*/

//////////////////////////////////

/*
$(document).ready(function () {
    
    "use strict";
    
    $("div").animate({
        
        width: "show",
        top: "100px",
        height: "100px",
        
    }, 3000);
    
    
    $("div").animate({
        
        borderRadius: "50px"
        
    }, 3000);
      
});
    
 */

//////////////////////////////////

/*
$(document).ready(function () {
    
    "use strict";
    
    $("div").animate({
        
        top: "150px",
        
    }, 2500);
    
    
    $("div").animate({
        width: "+=100px",
        height: "+=100px",
        
    }, 2500);
    
    $("div").animate({
        fontSize: "22px"
        
    }, 2500);
    
    $("div").fadeOut(2500);
      
});
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* stop */

/*
$(document).ready(function () {
    
    "use strict";
    
    $("button").click(function () {
        
        $("div").stop();
    });
    
    $("div").animate({
        width: "+=200px",
        height: "+=200px"
        
    }, 5000);
    
    $("div").animate({
        width: "-=100px",
        height: "-=100px"
        
    }, 5000);
    
    
    
      
});


*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Chain */

/* عمل كل التاثيرات بطريقه سلسله*/
/*
$(document).ready(function () {
    
    "use strict";
    
    var test = $("div");
    
    test.slideUp(3000)
        .slideDown(3000)
        .fadeOut(3000)
        .fadeIn(3000)
        .hide(3000)
        .show(3000)
        .animate({
            width: "+=100px",
            height: "+=100px",
            left: "100px"
        }, 3000);
    

});

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
$(document).ready(function () {
    
    "use strict";
    
    var test = $("div").html(),
        
        p = $("p");
        
    
    p.html(test);
    
    alert(test)
});

*/
////////////////////////////////////////////

/*  
$(document).ready(function () {
    
    "use strict";
    
    

    $("button").click(function () {
        
        $(".test").text("Welcome :" + " " + $("input").val());
    });
});

*/

////////////////////////////////////////////

/*
$(document).ready(function () {
    
    "use strict";
    $("button").click(function () {
        
        $("input").val($("div").attr("class"));
        
    });

});
*/

    
////////////////////////////////////////////

/*
$(document).ready(function () {
    
    "use strict";
    $("button").click(function () {
        
        $("div").attr("class", "khaled");
        
    });

});    
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// get / set CSS

// get

/*

$(document).ready(function () {
    
    "use strict";
    
    var getCss = $("button");
;
    
    getCss.click(function () {
    
    var width = $("div").css("width"),
        
        color = $("div").css("color"),
        
        input = $("input");
            
        input.val(color);
    });
        

});

*/

/*
// set 


$(document).ready(function () {
    
    "use strict";
    
    
    $("button").click(function () {
        
        var newWidth = $("input").val();
    
    
        $("div").css({
            
            "width": newWidth, // لازم اكتب في الحقل قيم العرض الجديده 
            
            "background": "#F00" // هيغير اللون لما اضغط على الزرار
            
            // اكتب قيمه العرض الجديده واضغط على الزرار هيغير العرض وهيغير اللون اللى كاتبه 
        });
    });
        

});
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*global console, window */


// Dimensins


// 1) width

/*
$(document).ready(function () {
    
    "use strict";
    
    
    var dw = $(window).width();
    
    console.log(dw);
    
    if (dw === 1920) {
        
        console.log("hi");
    } else {
        
        console.log("wellcome");
    }
});
*/

// set width

/*
$(document).ready(function () {
    
    "use strict";
    
    $("div").click(function () {
        
        
        var dv = $("div").width("+=" + 50);
        
        
        $("div").text("Your Div Width is " + dv.width() + " px");
        
        console.log("Your Div Width is " + dv.width() + " px");
    });
    
    
});

*/



/*

$(document).ready(function () {
    
    "use strict";
    
    $(".left").click(function () {
        
        
        $(".left").width("+=" + 50);
        
        $(".rigth").width("-=" + 50);
        
    });
    
    $(".rigth").click(function () {
        
        
        $(".rigth").width("+=" + 50);
        
        $(".left").width("-=" + 50);
        
    });
    
    
});

*/


/*
$(document).ready(function () {
    
    "use strict";
    
    $("div").click(function () {
        
        $(this).width("+=" + 50);
        
        $(this).text($(this).width());
        
        if ($(this).width() == 500) {
            
            $(this).css({
                
                maxWidth: "500px"
    
            });
        }
            
    });
    
    
});


*/

//////////////////////////////////////////////////////////

// الدرس ال29
/*
$(function () {
    
    "use strict";
    
////// single event
    
/  $("button").on("click", function () {
        
        $("div").fadeToggle(2000);
        
    });
*/
    
    
////// multi event
    
/*  $("div").on("mouseenter mouseleave", function () {
        
        $("div").toggle(2000);
        
    });
*/
    
    
    
    
////// custom event 
    
   /* $("div").on("test", function (event, myHeight, myWidth, newBackGround, newColor, newPadding) {
        
        
/
     "test"  => name of event
     myHeight, myWidth, newBackGround, newColor, newPadding => Are Prameters
*/
        
     /*   $(this).height(myHeight).width(myWidth).css({
        
            backgroundColor: newBackGround,
            
            color: newColor,
            
            padding: newPadding
        
        });

    });
    
    $("button").on("click", function () {
                
     / اقدر اعمل اكتر من حدث عير الكليك واعمل احداث مزدوجه مع بعض */
/*
    "click" => the event 
*/
        
     /*   $("div").trigger("test", ["150px", "200px", "#00f", "#fff", "20px 5px 0 20px"]);
        
    });
    
/ 
    height            = 150px
    width             = 200px
    backgroundColor   = blue = #00F
    color             = wight = #FFF
    padding           = 20px 5px 0 20px
*/
    
////// Event Map
 /*   
    $("div").on({
        
        click: function () { $(this).text("one click"); },
        
        dblclick: function () { $(this).text("tow click"); },
        
        mouseenter: function () { $(this).text("mouseEnter"); },
        
        mouseleave: function () { $(this).text("mouseleave"); },
    });
*/
    
    

///////////////////////////
 // الدرس ال 37  
 /*   
    $(window).on("scroll", function() {
        
      var sc = $(window).scrollTop();
        
        console.log(sc);
        
        
        if (sc > 700) {
        
        $(".ShowUP").fadeIn(200);
        
    } else {
        
       $(".ShowUP").fadeOut(200); 
        
    }
        
    });
    
    
   
        
 
    
    
});
*/




/*
$(function () {
    
    "use strict";
    
    
    $(window).scroll(function () {
        
        console.log("scroll is = " + $(this).scrollTop());
        
        console.log("top is = " + $("div").offset().top);
       
        var Srolling = $(this).scrollTop(),
        
            divOffset = $("div").offset().top;
    
        if (Srolling > divOffset) {
        
        
            $("div").fadeOut(500);
            
        } 
        
    });

});

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

/// الدرس ال 47 

$(function () {
    
    "use strict";
    
    
    $(".change").on("click", function () {
        
        
        $("div").replaceWith("<input type='text'/>");
        
        $(".change").fadeOut(0);
        
        $(".Save").fadeIn(0);
        
        
    });
    
   $(".Save").on("click", function () {
       
       
       $("input").replaceWith("<div>" + $("input").val() + "</div>");
       
       $(".Save").fadeOut(0);
        
        $(".change").fadeIn(0);
       
       
   });
    
});
*/








