$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function playhino(){
    audio = document.getElementById('audio');
    audio.play();
}

function pausehino(){
    audio = document.getElementById('audio');
    audio.pause();
}
