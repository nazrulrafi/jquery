;(function($){
    $(document).ready(function(){
        $(".sidebar-btn").click(function(){
            $(".sidebar").toggleClass("active")
            $(this).toggleClass("toggle")
        })
    })
})(jQuery)