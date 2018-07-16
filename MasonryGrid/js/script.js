function masonry_init(){
    if(typeof Masonry !== "undefined"){
        var container = document.querySelector('.grid');
        var masonry = new Masonry(container, {
            itemSelector: '.grid-item',
             // originLeft: false
        });
    }
}
jQuery(document).ready(function($){
    if($(".grid").length){
        window.onload = masonry_init;
    }
});