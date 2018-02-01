$(document).ready(function(){
    var label_wrapper = $(".tt-label-wrapper");
    if (label_wrapper.length) {
        var max_label = 5;
        label_wrapper.find(".tt-label").on("click", function () {
            var label_select = $(".tt-label-wrapper ul .selected").length;
            var selected = $(this).hasClass("selected");
            if (selected) {
                $(this).toggleClass("selected");
                var label_val = $(this).data("label-val");
                $(".tt-label-select option").each(function () {
                    var option = $(this);
                    var option_val = $(this).val();
                    if (option_val == label_val) {
                        option.prop("selected", false);
                        option.removeProp("selected");
                    }
                });
            } else if (label_select < max_label) {
                $(this).toggleClass("selected");
                label_val = $(this).data("label-val");
                
                $(".tt-label-select option").each(function () {
                    var option = $(this);
                    var option_val = $(this).val();
                    if (option_val == label_val) {
                        option.prop('selected', true);
                    }
                });
            }
        });
    }
});
