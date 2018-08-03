// insert the logo also on the navbar for the bootstrap menu
// this ensures that switching from portrait to landscape is without any flash since
// we can show and hide with css
window.jQuery(document).ready(function($){
    var $navbar_header = $(".navbar-header");
    $("#portal-logo-link").clone().attr('id', 'portal-logo-link-header').prependTo($navbar_header);

    $(window).one('results_ready', function() {
        // show and hide remove icon on hovering over added filters
        $("#facetview_selected_filters").on("hover", ".facetview_selection", function(){
            $(this).find('i').toggleClass('hidden');
        }, function(){
            $(this).find('i').toggleClass('hidden');
        });

        $('#facetview_rightcol').on('hover', '.eea-tileBody', function() {
            var $this = $(this);
            var $eea_tile_head = $this.prev();
            var $description = $this.find('.eea-tileDescription');
            if (!$description.html()) {
                return;
            }
            $eea_tile_head.find('.eea-tileThumb').toggleClass('eea-tileHovered');
            $description.stop().animate({
                height: "toggle",
                opacity: 'toggle'
            });
        });
    });

    if ($.fn.Lazy) {
        $(window).on('results_ready', function() {
                $(".lazyLoad").Lazy();
        });
    }

    $(".search-app #personaltools-login").on("click", function (ev) {
       ev.preventDefault();
       window.location.href = $("#personaltools-login").attr("href");
    });

    $(".search-app #personal-menu").on("mouseenter click", function(ev){
          ev.preventDefault();
          $(".login-container").css("display","block");
    }).on("mouseleave", function (ev) {
          ev.preventDefault();
          //debugger;
          if( $(ev.target)[0] == $(".login-container")[0] || $(ev.target)[0] == $(".login-text")[0] )  $(".login-container").css("display","none");
    });

    var url = window.location.pathname;
    var url_href = window.location.href;

    if(url === "/++theme++climateadaptv2/"){
        window.history.replaceState('Climate Adapt Search', 'Climate Adapt Search', url_href.replace("++theme++climateadaptv2", "data-and-downloads"));
    }

    //$(".site-container #portal-columns").remove();
    $("#eea-above-columns").detach().prependTo("portal-column-content");
        //.css("margin-top", "20px");

    $("#portal-columns-app").detach().appendTo("#portal-columns");
    $("#portal-breadcrumbs").hide();


    var url = window.location.origin /*+ '/cca/'*/;
    var base_url = $("base").attr('href');
    if (!base_url) {
        return;
    }
    var base_url_length = base_url.length;
    $(".sub-menu-link, .sub-sub-menu-link, .main-nav-item > a").each(function(idx, el) {
      var el_url = el.href;
      var url_length = el_url.length;
      var last_value = el_url.substr(base_url_length, url_length);
      el.href = "/" + url  +last_value;
    });

});

