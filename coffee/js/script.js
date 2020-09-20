
$(document).ready(function(){ 
    $('.giftset-first').on('click', function(){
        $('.giftset-1-col').css('visibility', 'visible');
        $('.giftset-2-col').css('visibility', 'hidden');
        $('.giftset-3-col').css('visibility', 'hidden');
    });
    $('.giftset-second').on('click', function(){
        $('.giftset-1-col').css('visibility', 'hidden');
        $('.giftset-2-col').css('visibility', 'visible');
        $('.giftset-3-col').css('visibility', 'hidden');
    });
    $('.giftset-third').on('click', function() {
        $('.giftset-1-col').css('visibility', 'hidden');
        $('.giftset-2-col').css('visibility', 'hidden');
        $('.giftset-3-col').css('visibility', 'visible');
    });
});