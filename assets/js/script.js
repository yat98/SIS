$(document).ready(function(){
    // LOADING
    $(".loader").fadeOut('slow');

    // LAZY LOAD CAROUSEL
    $('.responsive-img.lazy').show().lazyload({threshold : 600});

    // CAROUSEL ANIMATE
    $(window).on('load',function(){
        $('.navbar').addClass('animated');
        $('.navbar').addClass('slideIn');
        $('.navbar').addClass('muncul-atas');

        $('.carousel-utama').addClass('animated');
        $('.carousel-utama').addClass('fadeInUp');
        $('.carousel-utama').addClass('muncul-bawah');

        setTimeout(function(){
            $('.bounce').addClass('animated');
            $('.bounce').addClass('bounceInUp');
            $('.bounce').addClass('muncul-bawah');
        },800);
    });

    // EVENT SCROLL
    $(window).scroll(function(){

        // JARAK BROWSER KE ELEMEN
        let jarakScroll = $(this).scrollTop();

        // PARALLAX CAPTION
        $('.carousel-caption').css({
            'transform':'translate(0,-'+jarakScroll/3+'px)'
        });

        // SEJARAH ANIMATE
        if(jarakScroll > $('#sejarah').offset().top -700){
            $('#sejarah').addClass('animated');
            $('#sejarah').addClass('slideInUp');
            $('#sejarah').addClass('muncul-atas');
        }

        if(jarakScroll > $('#sejarah').offset().top - 200){
            setInterval(function(){
                $('.judul-sejarah').addClass('muncul-kiri');
            },300);
            setTimeout(function(){
                $('.logo').addClass('animated');
                $('.logo').addClass('slideInRight');
                $('.logo').addClass('muncul-kanan');
            },600);
        }

        // KOMPETENSI ANIMATE
        if(jarakScroll > $('#kompetensi').offset().top-120){
            $('.judul-kompetensi').addClass('muncul-atas');
        }
        
        if(jarakScroll > $('.kompetensi-1').offset().top-230){
            $('.kompetensi-1').addClass('muncul-kanan');
        }

        if(jarakScroll > $('.kompetensi-2').offset().top-230){
            $('.kompetensi-2').addClass('muncul-kiri');
        }

        if(jarakScroll > $('.kompetensi-3').offset().top-230){
            $('.kompetensi-3').addClass('muncul-kanan');
        }

        if(jarakScroll > $('.kompetensi-4').offset().top-230){
            $('.kompetensi-4').addClass('muncul-kiri');
        }

        // KEGIATAN ANIMATE
        if(jarakScroll > $('#kegiatan').offset().top-180){
            $('.judul-kegiatan').addClass('muncul-atas');
        }

        for(let i = 1; i<=5; i++){
            if(jarakScroll > $('.kegiatan-'+i).offset().top-240){
                $('.kegiatan-'+i).addClass('muncul-atas');
            }
        }

        if(jarakScroll > $('.kegiatan-1').offset().top-240){
            $('.sidebar-populer').addClass('muncul-atas');
        }

        if(jarakScroll > $('.sidebar-radio').offset().top-200){
            $('.sidebar-radio').addClass('muncul-atas');
        }

        if(jarakScroll > $('#section-footer').offset().top-200){
            $('.section-footer').addClass('muncul-bawah');
            $('.copyright').addClass('muncul-bawah');
            $('.social-media').addClass('muncul-bawah');
        }
    });

    // LAZY LOAD
    $('.lazy').show().lazyload({effect:'fadeIn'});
    $('.carousel-control-next').on('click',function(){
        $('.lazy').show().lazyload({threshold : 600});
    });
    $('.carousel-control-prev').on('click',function(){
        $('.lazy').show().lazyload({threshold : 600});
    });
});