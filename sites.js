$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});
$('.nav-tabs a').on('click', function(e) {
    e.preventDefault()
    $(this).tab('show')
})