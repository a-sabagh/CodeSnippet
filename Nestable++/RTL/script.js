var updateOutput = function(target){
    if(window.JSON){
        $("#nestable-output").val(window.JSON.stringify(target.nestable("serialize")));
    }else{
        alert("Your Browser Does't Support JSON");
    }
}
var add_new_list_item = function(){
    var id = parseInt($("#add-list-item .max-id").val());
    id = id+1;
    var name = $("#add-list-item .name").val();
    $("#add-list-item .max-id").val(id);
    var list_item = '<li class="dd-item" data-id="' + id + '" data-name="' + name + '">\n\
                    <div class="dd-handle">Item ' + id + '</div>\n\
                    <span class="action-button edit-list-item">Edit</span>\n\
                    <span class="action-button remove-list-item">Remove</span>\n\
                    </li>';
    $("div.dd > ol.dd-list").append(list_item);
    updateOutput($('#nestable').nestable());
}
var edit_list_item = function(target){
    $("#edit-list-item").show("normal");
    target = target.closest("li");
    var id = target.data("id");
    var name = target.data("name");
    $("#edit-list-item .id").val(id);
    $("#edit-list-item .name").val(name);
}
var update_list_item = function(){
    var id = $("#edit-list-item .id").val();
    var name = $("#edit-list-item .name").val();
    var list_item = $(".dd-list .dd-item[data-id=" + id +"]");
    list_item.data("name" , name);
    $("#edit-list-item").hide("normal");
    updateOutput($('#nestable').nestable());
}
var remove_list_item = function(target){
    target = target.closest("li");
    var parent = target.closest("ol");
    var confirmation = confirm("Do you want to Delete list item by id " + target.data("id") + " with all subitem");
    if(confirmation){
        target.remove();
    }
    if(parent.children().length == 0){
        parent.siblings("button").remove();
        parent.remove();

    }
    updateOutput($('#nestable').nestable());
}
$(document).ready(function(){
    //init nestable
    var nestable_list = $('#nestable').nestable();

    //call updateOutput after_load change
    nestable_list.on('change' , function(){updateOutput(nestable_list)});
    updateOutput(nestable_list);
    
    $(".dd-list").on("click" , ".edit-list-item" , function(){ edit_list_item($(this)); });//on click edit
    $(".dd-list").on("click" , ".remove-list-item" , function(){ remove_list_item($(this)); });//on click remove
    $("#edit-list-item .edit").on("click" , function(e){
        e.preventDefault();
        update_list_item();
    });
    $("#add-list-item .add").on("click" , function(e){
        e.preventDefault();
        add_new_list_item();
    });

});