var trigger = $('#hamburger'),
    menu = $('#hamburger-click');

    trigger.click(()=> {
        if(trigger.hasClass('active')) {
            menu.slideUp()
            trigger.removeClass('active')
        } else {
            menu.slideDown()
            trigger.addClass('active')
        }
    });

$('#song-lofi-btn').click(function(){
    $("#image-info").css("background-image", "url('media/images/lo-fi.jpg')")
    $("#title-song").text("Lo-Fi")
    $("#desc-song").text("Lo fi sounds ")
    });

$('#song-nature-btn').click(function(){
    $("#image-info").css("background-image", "url('media/images/nature.jpg')")
    $("#title-song").text("Nature")
    $("#desc-song").text("Nature sounds ")
    });

$('#song-rain-btn').click(function(){
    $("#image-info").css("background-image", "url('media/images/rain.jpg')")
    $("#title-song").text("Rain")
    $("#desc-song").text("Rain so sounds ")
    });

$('#song-pink-btn').click(function(){
    $("#image-info").css("background-image", "url('media/images/pink.jpg')")
    $("#title-song").text("Pink")
    $("#desc-song").text("Pink nois sounds ")
    });

$('#song-suga-btn').click(function(){
    $("#image-info").css("background-image", "url('media/images/suga-suga.jpg')");
    $("#title-song").text("Suga")
    $("#desc-song").text("Suga sounds ")
    });