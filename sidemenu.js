var toprowHeight = $(".toprow").outerHeight() + 1;
var sections, links, linkmap;

$(document).ready(function() {
    sections = $("section");
    links = $(".sidenav > a");

    linkmap = {};

    sections.each(function() {
        var id = $(this).attr("id");
        linkmap[id] = $(".sidenav > a[href=\\#" + id + "]");
    });

    $(window).scroll(function() {
        var position = $(window).scrollTop();

        sections.each(function() {
            var target = $(this).offset().top;

            if (position >= target)
            {
                var id = $(this).attr("id");
                links.removeClass("active");
                linkmap[id].addClass("active");
            }
        });
    });

    if ($(".closebtn").css("display") != "none")
        $(".sidenav > a").click(onCloseNav);
});

function onOpenNav() {
    if (document.documentElement.clientWidth < 600) {
        document.getElementById("sidemenu").style.width = "100%";
    } else {
        document.getElementById("sidemenu").style.width = "250px";
    }
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

function onCloseNav() {
    document.getElementById("main").style.opacity = "1";
    document.getElementById("sidemenu").style.width = "0";
    document.body.style.backgroundColor = "white";
}
