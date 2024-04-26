//Will add class on nav if window scroll down to 100%
$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('nav').addClass('nav-fixed');
    } else {
        $('nav').removeClass('nav-fixed');
    }
});


//Typing new Letters
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

// INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

$(document).ready(function () {
    $(".toggle-btn").click(function () {
        $(".nav").toggleClass("nav-active");
        $(".toggle-btn i").toggleClass("nav-active");
    });
});



// Gallery 
$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {

            $('.filter').show('1500');
        }
        else {

            $(".filter").not('.' + value).hide('3500');
            $('.filter').filter('.' + value).show('3500');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});



/*Scroll*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#arrow i").fadeIn();
        }
        else {
            $("#arrow i").fadeOut();
        }

    });
    $("#arrow i").on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});


// Toggle button
$(document).ready(function (){
    $("#toggle-btn").click(function () {
        $(".nav").toggleClass("nav-active");
        $("#toggle-btn i").toggleClass("nav-active");
    });
}); 

