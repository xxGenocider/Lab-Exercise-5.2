/* Tabs Widget for HOME */
$(function(){
  $("#tabs").tabs();
});

/* Menu Widget for MENU */
$("#menu").menu();

// $("#selectmenu").selectmenu();

$(function(){
    $(".menu li").hover(
        function(){
            //$('ul.sub', this).slideDown(500);
            //$('>ul.sub', this).slideDown(500);
            $('>ul.sub:not(:animated)', this).slideDown(500);
        },
        function(){
            //$('ul.sub',this).slideUp(300);
            $('>ul.sub',this).slideUp(300);
        }
    );
});