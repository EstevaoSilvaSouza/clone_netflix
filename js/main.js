
let conta = document.getElementById('carrosel-filmes')


conta.innerHTML = `
<div class="owl-carousel owl-theme">
<div class="item">
   <a href="https://google.com.br"> <img class="box-filme" src="img/mini1.jpg" alt="img1"></a>
</div>
<div class="item">
    <img class="box-filme" src="img/mini2.jpg" alt="img1">
</div>
<div class="item">
    <img class="box-filme" src="img/mini3.jpg" alt="img1">
</div>
<div class="item">
    <img class="box-filme" src="img/mini4.jpg" alt="img1">
</div>
<div class="item">
    <img class="box-filme" src="img/mini5.jpg" alt="img1">
</div>
<div class="item">
    <img class="box-filme" src="img/mini6.jpg" alt="img1">
</div>
</div>  
`;



var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})