
var map;

function initMap() {
    var myLatLng = {
        lat: 41.532615,
        lng: 2.429512
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Usted debe llegar acá'
    });

}
$('a[data-toggle="pill"]').on('show.bs.tab', function (e) {
    var url = $(this).attr("href"); // the remote url for content
    var target = $(this).data("target"); // the target pane
    var tab = $(this); // this tab
    console.log(url, target, tab);
    // ajax load from data-url
    $(target).load(url, function (result) {

        
        console.log(tab);
    });
});

// initially activate the first tab..
// $('#clubes').tab('show');
$('a[href="clubes.html"]').trigger('click');
