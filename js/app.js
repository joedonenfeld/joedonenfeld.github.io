$(function(){

	
    $('.menubutton').hover(hoverin,hoverout);

    function hoverin (){
        $(this).css("background-color", "white");
    }
    function hoverout(){
        $(this).removeAttr('style');
    }

    


})