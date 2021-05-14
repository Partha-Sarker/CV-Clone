$(document).ready(function () {
    var changing = false;

    $('.headline').on('click', function () {
        if (changing)
            return;
            
        changing = true;
        const expand = $(this).find('.expand');
        const collapse = $(this).find('.collapse');

        if (expand.is(':visible')) {
            expand.fadeToggle(200, () => {
                collapse.fadeToggle(200);
            });
        }
        else {
            collapse.fadeToggle(200, () => {
                expand.fadeToggle(200);
            });            
        }
        
        $(this).next().slideToggle(500, () => {
            changing = false;
        });
    });
});