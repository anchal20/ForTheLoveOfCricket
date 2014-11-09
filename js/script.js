// making the table values sortable

$("tbody").sortable();

$(function() {
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  });

$(function(){
    $("button").click(function(){
        alert("calling");
        $.post("home.html");
    });
});