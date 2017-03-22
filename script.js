/**
 * Created by YanvegHD on 14/03/2017.
 */
$(document).ready(function(){
    $("body").css("display", "none");
    $("body").fadeIn(500)
    $("a").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(200, redirectPage);
        $("body").fadeIn(1);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});
