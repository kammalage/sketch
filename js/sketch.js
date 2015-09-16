
$(document).ready(function () {
    
    startGrid(16);
    $('div').on('mouseenter', '.gridcell', function () {

        $(this).addClass('highlight');
        
    });

    $('form').on('click', '#clearbutton', function () {

        $('.gridcell').removeClass('highlight');
    });

    $('form').on('click', '#resize', function () {

        var grid_size = window.prompt("Enter width and height of new grid here ex: entering 16 will be 16 x 16");

            if (grid_size != null) {

                $('.row').remove();
                $('.break').remove();
                startGrid(grid_size);
            }
    });
    
});

function startGrid(max_length) {

    for (var i = 0; i < max_length; i++) {
        $('.container').append('<div class="break"></div>');
        for (var j = 0; j < max_length; j++) {

            $('.container').append('<div class="row gridcell"></div>');

        }
    }
}