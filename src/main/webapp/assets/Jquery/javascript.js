

$(document).ready(function () {

// TASK 1
    $("#divWrapper").children().each(function (index) {

        if (index === 0)
        {
            $(this).click(function () {
                $(this).hide();
            });
        } else if (index === 1)
        {
            $(this).mouseenter(function () {
                $(this).css({"border": "4px solid #f37736"});
            });

            $(this).click(function () {
                $(this).next().css('font-size', 30);
            });
        }
    });
// ------
// TASK 2
    var setGridDimensions = function (n) {
        var html = '';
        for (var i = 0; i < n; i++) {
            html += '<div class="row">';
            for (var j = 0; j < n; j++) {
                html += '<div class="col"></div>';
            }
            html += '</div>';
        }
        $("#divWrapper2").html(html);


    };
    setGridDimensions(3);

    $('div.col').each(function (index) {

        $(this).text(index + 1);
        $(this).click(function () {
            $(this).text(Math.pow(index + 1, 2));
        });

    });
// ------
// TASK 3
       $("#ul").children().each(function (index) {

            var size = 16 + index;
            size +="px";
            
            $( "li" ).filter( ":even" ).css( "background-color", "LightGray " );
            $(this).animate({"font-size":size});
            

    });
// ------

});
