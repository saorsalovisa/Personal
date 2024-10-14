$(document).ready(function(){
    // 平滑滾動到對應區域
    $("nav ul li a").click(function(event) {
        event.preventDefault(); // 阻止預設行為
        var targetSection = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(targetSection).offset().top
        }, 800);
    });
});
