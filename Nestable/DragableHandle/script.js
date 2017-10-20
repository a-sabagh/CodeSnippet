
$(document).ready(function(){
    //init nestable
    var nestable_list = $('#nestable').nestable();

    //update nestable function
    function updateOutput(){
        if(window.JSON){
            $("#nestable-output").val(window.JSON.stringify(nestable_list.nestable("serialize")));
        }else{
            alert("Your Browser Does't Support JSON");
        }
    }
    //call updateOutput after_load change
    nestable_list.on('change', updateOutput);
    updateOutput();
});