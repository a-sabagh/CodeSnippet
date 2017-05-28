    $(".main-navigation li a").removeClass("rng-active");
    $(".main-navigation li:first-child a").addClass("rng-active");
    $(window).scroll(function () {
        $(".main-navigation li a").each(function () {
            var hash = this.hash;
            if(!(hash == "")){
                var item = $(hash);
                if(item.length){
                    var itempos = item.offset();
                    var itemtop = itempos.top;
                    var winTop = $(window).scrollTop();
                    if(itemtop < winTop + 200) {
                        $(".main-navigation li a").removeClass("rng-active");
                        $(this).addClass("rng-active");
                    }
                }
            }
        });
    });
