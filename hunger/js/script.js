$(document).ready(function(){
   
   $('.slider').slick({
    dots: true,
   arrows : false,
   });
   $('.SOUPE').on('click', function(){
      $('.pizzaList').css('display', 'none');
      $('.soupeList').css('display', 'block');
      $('.pastaListt').css('display', 'none');
      $('.desertList').css('display', 'none');
      $('.wineList').css('display', 'none');
      $('.beerList').css('display', 'none');
      $('.drinksList').css('display', 'none');
    
   });
   $('.PIZZA').on('click', function(){
      $('.pizzaList').css('display', 'block');
      $('.soupeList').css('display', 'none');
      $('.pastaList').css('display', 'none');
      $('.desertList').css('display', 'none');
      $('.wineList').css('display', 'none');
      $('.beerList').css('display', 'none');
      $('.drinksList').css('display', 'none');
   });
   $('.PASTA').on('click', function(){
      $('.pastaList').css('display', 'block');
      $('.pizzaList').css('display', 'none');
      $('.soupeList').css('display', 'none');
      $('.desertList').css('display', 'none');
      $('.wineList').css('display', 'none');
      $('.beerList').css('display', 'none');
      $('.drinksList').css('display', 'none');
    
   });
   $('.DESERT').on('click', function(){
  
      $('.pizzaList').css('display', 'none');
      $('.soupeList').css('display', 'none');
      $('.pastaList').css('display', 'none');
      $('.desertList').css('display', 'block');
      $('.wineList').css('display', 'none');
      $('.beerList').css('display', 'none'); 
      $('.drinksList').css('display', 'none');
   });
   $('.WINE').on('click', function(){
      $('.soupeList').css('display', 'none');
      $('.pizzaList').css('display', 'none');
      $('.soupeList').css('display', 'none');
      $('.pastaListt').css('display', 'none');
      $('.desertList').css('display', 'none');
      $('.wineList').css('display', 'block');
      $('.beerList').css('display', 'none');
      $('.drinksList').css('display', 'none');
   });
   $('.BEER').on('click', function(){
      $('.pizzaList').css('display', 'none');
      $('.soupeList').css('display', 'none');
      $('.pastaListt').css('display', 'none');
      $('.desertList').css('display', 'none');
      $('.wineList').css('display', 'none');
      $('.beerList').css('display', 'block');
      $('.drinksList').css('display', 'none');
   });
   $('.DRINKS').on('click', function(){
      $('.pizzaList').css('display', 'none');
      $('.soupeList').css('display', 'none');
      $('.pastaListt').css('display', 'none');
      $('.desertList').css('display', 'none');
      $('.wineList').css('display', 'none');
      $('.beerList').css('display', 'none');
      $('.drinksList').css('display', 'block');
   });
});
