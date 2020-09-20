$(document).ready(function(){ 
    $('.my-dots-first').on('click',function(){
        $('.my-slider-first').css('visibility', 'visible');
        $('.my-slider-second').css('visibility', 'hidden');
        $('.my-slider-third').css('visibility', 'hidden');
        
    });

$('.my-dots-second').on('click',function(){
    $('.my-slider-second').css('visibility', 'visible');
    $('.my-slider-first').css('visibility', 'hidden');
    $('.my-slider-third').css('visibility', 'hidden');
    $('.my-dots-first').addClass('noactive');
   
});
$('.my-dots-third').on('click',function(){
    $('.my-slider-third').css('visibility', 'visible');
    $('.my-slider-second').css('visibility', 'hidden');
    $('.my-slider-first').css('visibility', 'hidden');
    $('.my-dots-first').addClass('noactive');   
});
$('.services-a-1').on('mouseenter',function(){
    $('.greenLine1').css('visibility', 'visible');
}); 
$('.services-a-1').on('mouseleave',function(){
    $('.greenLine1').css('visibility', 'hidden');
}); 
$('.services-a-2').on('mouseenter',function(){
    $('.greenLine2').css('visibility', 'visible');
}); 
$('.services-a-2').on('mouseleave',function(){
    $('.greenLine2').css('visibility', 'hidden');
}); 
$('.services-a-3').on('mouseenter',function(){
    $('.greenLine3').css('visibility', 'visible');
}); 
$('.services-a-3').on('mouseleave',function(){
    $('.greenLine3').css('visibility', 'hidden');
}); 

$('.team-1-block').on('mouseenter',function(){
    $('.team-1').css('visibility', 'visible');
    $('.team-bgc-1').css('visibility', 'hidden');
    $('.team-name-1').css('visibility', 'hidden');
}); 
$('.team-1-block').on('mouseleave',function(){
    $('.team-1').css('visibility', 'hidden');
    $('.team-bgc-1').css('visibility', 'visible');
    $('.team-name-1').css('visibility', 'visible');
}); 
$('.team-2-block').on('mouseenter',function(){
    $('.team-2').css('visibility', 'visible');
    $('.team-bgc-2').css('visibility', 'hidden');
    $('.team-name-2').css('visibility', 'hidden');
}); 
$('.team-2-block').on('mouseleave',function(){
    $('.team-2').css('visibility', 'hidden');
    $('.team-bgc-2').css('visibility', 'visible');
    $('.team-name-2').css('visibility', 'visible');
});
var teamFadeIn, teamFadeOut;
teamFadeIn = function() {
    $('.team-3').css('visibility', 'visible');
    $('.team-bgc-3').css('visibility', 'hidden');
    $('.team-name-3').css('visibility', 'hidden');
};
teamFadeOut = function() {
    $('.team-3').css('visibility', 'hidden');
    $('.team-bgc-3').css('visibility', 'visible', '0transition', '1s');
    $('.team-name-3').css('visibility', 'visible');
};
$('.team-3-block').hover(teamFadeIn,teamFadeOut);



}); 