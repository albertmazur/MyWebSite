$(function(){
    //$('article').hide().delay(200).slideDown(2500);
    //$('section').hide().delay(500).slideDown(2500);

    $article = $('article');
    $section = $("section");
    $header = $('header');

    $header.css('left', 2000);
    $article.css("left", -2000);
    $section.css("left", -2000);

    $article.animate({
        left: '0'
    }, 1500, function(){} );


    $header.animate({
        left: '0'
    }, 1500, function(){} );


    $section.each(function(index){
        $(this).delay(1000*(index+1)).animate({
            left: '0'
        }, 1500, function(){} );
    });
});
