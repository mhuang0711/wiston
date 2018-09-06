$(document).ready(function() {
	/*
     *      Easy CSS Collapse
     */
    $('body')
        .off('click', '.collapse-detail')
        .on('click', '.collapse-detail', function() {
            $(this).toggleClass('active');
        });
    /*
     *      Bootstrap Collapse
     */
	$('body').on('show.bs.collapse', '.collapse', function(e) {
        $(this).closest('.panel').find('.panel-heading').addClass('active');
    });

    $('body').on('hide.bs.collapse', '.collapse', function(e) {
        $(this).closest('.panel').find('.panel-heading').removeClass('active');
    });
})