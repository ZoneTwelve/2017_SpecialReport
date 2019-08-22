$(function() {
    // $('.datepicker').datetimepicker({
    //  dateFormat: 'yy-mm-dd',
    // });    
    
    $('a[href="#'+$.cookie('team-tab')+'"]').trigger('click');

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr('href').replace('#', '');
        $.cookie('team-tab', target);
    });

    $('#guestbook_add').on('click', function(e) {
       e.preventDefault();
        $.fancybox.open({
            href: global.baseUrl + 'team/guestbook-add',
            type: 'iframe',
            padding: 20,
            width: 680,
            onclosed: function()
            {
                window.location.reload();
            }

        });
    });

    $('.guestbook_reply').on('click', function(e) {
        e.preventDefault();
        var gid = $(this).data('gid');
        $.fancybox.open({
            href: global.baseUrl + 'team/guestbook-reply/'+gid,
            type: 'iframe',
            padding: 20,
            width: 680,
            onclosed: function()
            {
                window.location.reload();
            }

        });
    });
});