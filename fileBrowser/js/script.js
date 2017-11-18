$(document).ready(function () {
    $(".rng-file-browse .file").on("change" , function(){
        var files = this.files;
        var names = "";
        $.each(files , function(index,value){
            names += value['name'] +  ",";
        });
        names = names.slice(0,-1);
        $(this).parents(".file-label").next(".file-holder").val(names);
    });
    
    $(".clear-file").click(function () {
        var file = $(this).siblings(".file-label").find(".file");
        file.wrap('<form class=\"reset\">').closest('form.reset').get(0).reset();
        file.unwrap();
        var file_holder = $(this).prev(".file-holder").val("");
    });
});