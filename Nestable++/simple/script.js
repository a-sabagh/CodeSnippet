var updateOutput = function(target){
    if(window.JSON){
        $("#nestable-output").val(window.JSON.stringify(target.nestable("serialize")));
    }else{
        alert("Your Browser Does't Support JSON");
    }
}
var add_new_list_item = function(){}
var edit_list_item = function(){}
var update_list_item = function(){}
var delete_list_item = function(){}
$(document).ready(function(){
    //init nestable
    var nestable_list = $('#nestable').nestable();

    //call updateOutput after_load change
    nestable_list.on('change' , function(){updateOutput(nestable_list)});
    updateOutput(nestable_list);
});