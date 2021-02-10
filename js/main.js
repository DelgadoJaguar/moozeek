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
    })