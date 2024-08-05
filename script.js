$("#messageState").on("change", function() {
    if (this.checked) {
        $(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
        $(".heart").addClass("openedHer").addClass("beating");
        console.log("I Like You");
    } else {
        $(".message").removeClass("no-anim").addClass("closeNor");
        $(".heart").removeClass("openedHer").addClass("closeHer");
        console.log("01010");
    }
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
    console.log("I Like You");
    if ($(".message").hasClass("closeNor")) {
        $(".message").addClass("closed");
    }
    $(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
    console.log("I Like You");
    if ($(".heart").hasClass("closeHer")) {
        $(".heart").addClass("openedHer").addClass("beating");
    } else {
        $(".heart").addClass("no-anim").removeClass("beating");
    }
    $(".heart").removeClass("openHer").removeClass("closeHer");
});
