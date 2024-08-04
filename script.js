$(document).ready(function(){
    $('#nav-categories').mouseenter(function(){
        $('#all-categories').stop(true, true).slideDown();
    });

    $('#nav-categories, #all-categories').mouseleave(function(event){
        if (!$(event.relatedTarget).closest('#nav-categories').length && !$(event.relatedTarget).closest('#all-categories').length) {
            $('#all-categories').stop(true, true).slideUp();
        }
    });

    $('.dropdown-item').hover(
        function(){
            $(this).css({
                "background-color": "transparent",
                "color": "yellow",
                "margin-left": "5px",
                "transition": "0.5s all"
            });
        },
        function(){
            $(this).css({
                "background-color": "transparent",
                "color": "#fff",
                "margin-left": "0px",
                "transition": "0.5s all"
            });
        }
    );

    $('#order-btn-2, .all-btn').hover(
        function(){
            $(this).css({
                'margin-left': '15px',
                'transition': '0.5s'
            });
        },
        function(){
            $(this).css({
                'margin-left': '0px'
            });
        }
    );

    $('.cart-wth').css({
        'width': '65px'
    });
});


