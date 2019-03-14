$("#typelist").focus()
$(document).ready(function(){
    $('#button-addon2').click(function(e){
        // e.preventDefault();
        var todotext = $('#typelist').val()
        // var todotext = $('input[name="listItem"]').val()
        // var typelist = $("#todolist").append('<li class="list-group-item">'+todotext+'</li>');
        var typelist = $("#todolist").append(
            '<div class="input-group mb-3">' +
                '<div class="input-group-prepend">' +
                    '<div class="input-group-text">' +
                        '<input class="click_check" type="checkbox" aria-label="Checkbox for following text input">' +
                    '</div>' +
                '</div>' +
                    '<input type="text" class="form-control" aria-label="Text input with checkbox" value=' + todotext +'>' +
                    '<button type="button" class="btn btn-dark">Delete</button>' +
            '</div>' 
            // '<li class="list-group-item">'+todotext+'</li>'
            );
            $('#typelist').val('')
    });
    $(typelist).keyup(function(e){
        if (e.which === 13){
            var todotext = $('#typelist').val()
            $("#todolist").append(
                '<div class="input-group mb-3">' +
                    '<div class="input-group-prepend">' +
                        '<div class="input-group-text">' +
                            '<input class="click_check" type="checkbox" aria-label="Checkbox for following text input">' +
                        '</div>' +
                    '</div>' +
                    '<input type="text" class="form-control" aria-label="Text input with checkbox" value=' + todotext +'>' +
                    '<button type="button" class="btn btn-dark">Delete</button>' +
                '</div>'
                // '<li class="list-group-item">'+todotext+'</li>'
                );
            $('#typelist').val('')
            }
    });
    $("#todolist").on("click", ".btn-dark", function(){
        $(this).parent().remove();
    });

    $("#todolist").on("click", ".click_check", function(){
        $("input:checked").length();
        console.log("#todolist");
    });

    $(".delAll").click(function() {
        $("input:checked").parent().parent().parent().remove()
        alert("정말 삭제 할까요?");
    })
    // $(".delAll").on("click", "#todolist", function(){
    //     $(this).parent().remove();
    //     alert("정말 삭제 할까요?");
    //     });
            
});
