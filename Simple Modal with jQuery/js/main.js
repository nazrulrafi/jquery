;(function($){
    $(document).ready(function(){
        $("a.open").click(function(){
            $(".content").addClass("active")
        })
        $("a.close02").click(function(){
            $(".content").removeClass("active")
        })
    })
})(jQuery)