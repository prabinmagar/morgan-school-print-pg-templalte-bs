$(function(){
    $("#printable").find('#print-btn').on('click', function(){
        $.print("#printable");
    });
});