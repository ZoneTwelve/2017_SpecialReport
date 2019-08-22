$(document).ready(function() {
    //折疊選單
    $(".submenu .info").click(function(){
        var _all = $(".submenu > li");
        if ($(this).parent().hasClass("active")) {
            _all.removeClass("active");
        } 
        else {
            _all.removeClass("active");
            $(this).parent().addClass("active");
        }
    })

//版面配置
    var $screen_xs = 480;
    var $screen_sm = 768;
    var $screen_md = 992;
    var $screen_lg = 1200;

    if (Modernizr.mq('only all and (min-width: ' + $screen_md + 'px)')) {

        //setLayout();

        //版面配置 - 讓最新消息等工作團隊等高
        var _height = $(".Contour").height();
        $(".row.Contour div.col-md-6").each(function() {
            $(this).find(".panel").height(_height-35);

        });            

        //alert("hello");
        //側邊選單 fix
        /*
        var top_field1_offset_top = $('#submenu').offset().top;
        $("#submenu").affix({
          offset:{
            top: function(){
              
              return top_field1_offset_top;
            },
            bottom: function () {
             return (this.bottom = 
                $('footer').outerHeight(true))
            }
          }
        });*/

    }; //end Modernizr.mq
    
    
 // 倒數
     $(function () {
        var austDay = new Date();
        //austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        austDay = new Date(2015, 10 - 1, 15, 9);
        $('#defaultCountdown').countdown({
            until: austDay,
            format: 'DHMS',
            layout: '<div class="count-section">' +
                '{d<}<div class="days"><div class="circle">{dn}</div> <span>天</span></div>{d>}' +
                '{h<}<div class="hours"><div class="circle">{hn}</div> <span>時</span></div>{h>}' +
                '{m<}<div class="minutes"><div class="circle">{mn}</div> <span>分</span></div>{m>}' +
                '{s<}<div class="seconds"><div class="circle">{sn}</div> <span>秒</span></div>{s>}' +
                '</div>'
        });

    });   
    
    
    

});

$(window).resize(function() {
//版面配置
    var $screen_xs = 480;
    var $screen_sm = 768;
    var $screen_md = 992;
    var $screen_lg = 1200;

    if (Modernizr.mq('only all and (min-width: ' + $screen_md + 'px)')) {

        //setLayout();

        //版面配置 - 讓最新消息等工作團隊等高
        var _height = $(".Contour").height();
        $(".row.Contour div.col-md-6").each(function() {
            $(this).find(".panel").height(_height-35);

        });            



    }; //end Modernizr.mq
});


/*
$(window).load(function() {
    if (Modernizr.mq('only all and (min-width: ' + $screen_md + 'px)')) {
        setLayout();
    }
});
*/

function setLayout() {
    //版面配置 - 讓左右欄等高
    var _submenuHeight = $('#submenu').outerHeight( );
    var _manHeight = $('.mainContent').outerHeight( );
    $(".sidebar").css('min-height',_submenuHeight);
        if ( _manHeight > _submenuHeight) {
        $(".sidebar").css('min-height',_manHeight);
    }  
}