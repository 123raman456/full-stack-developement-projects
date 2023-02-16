$(document).ready(function(){
    $("#addtoList").click(
        function(){
let addItem=$("input[name=listItem]").val();
$("ol").append("<li>"+addItem+"</li>");
        }
    )
    $(document).on("dblclick",'li',function(){
$(this).fadeOut("slow");
    });
    $('input').focus(function(){
        $(this).val('');
    })
    $('ol').sortable();
})