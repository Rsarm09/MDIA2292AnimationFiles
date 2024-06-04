
/* jQuery Script for Reveal */
/* The following demonstrates a very common narrative or structure when employing jQuery.
In this example, focus on that pattern rather then just the specifics of this effect. */

/* Elements of jQuery that you need to already be familiar with:
$('selector')            - How we target Elements
$('selector').property   -  Extract information about the given object
$('selector').event      - How we call a function, or trigger a series of events 
$('selector').effect     - Precreated animated sequences
*/


var $corrected = $('.corrected');
var img_height = $('.corrected img').height();
var init_split = Math.round(img_height / 2);

console.log($corrected,img_height,init_split);

//Section 2 : Setup of the initial appearance
// $('.corrected').width(475);
// equivalent to querySelector(.corrected).width(value?);

$corrected.height(init_split);

/* Section 3: Interactive events */
// Sets the width '.corrected' based off the offset from left hand side of parent

$('.photoshop').mousemove(function (e) {
    var offY = e.offsetY || e.client + $corrected.offset().down;
    $corrected.height(offY); //Dynamically changing the mask width
    console.log(offY); //optional to see that width dynamically change

});

$('.photoshop').mouseleave(function (e) {
    $corrected.stop().animate({ height: init_split }, 1000);
});





