$(document).ready(function(){

    $(window).on('load',function(){
        $('.navbar').addClass('animated');
        $('.navbar').addClass('slideIn');
        $('.navbar').addClass('muncul-atas');

        $('.carousel-utama').addClass('animated');
        $('.carousel-utama').addClass('fadeInUp');
        $('.carousel-utama').addClass('muncul-bawah');

        setInterval(function(){
            $('.bounce').addClass('animated');
            $('.bounce').addClass('bounceInUp');
            $('.bounce').addClass('muncul-bawah');
        },800);
    });

    $(window).scroll(function(){
        let jarakScroll = $(this).scrollTop();

        $('.carousel-caption').css({
            'transform':'translate(0,-'+jarakScroll/3+'px)'
        });

        if(jarakScroll > $('#sejarah').offset().top - 400){
            $('#sejarah').addClass('animated');
            $('#sejarah').addClass('slideInUp');
            $('#sejarah').addClass('muncul-atas');
        }

        if(jarakScroll > $('#sejarah').offset().top - 200){
            setInterval(function(){
                $('.judul-sejarah').addClass('muncul-kiri');
            },300);
            setInterval(function(){
                $('.logo').addClass('animated');
                $('.logo').addClass('slideInRight');
                $('.logo').addClass('muncul-kanan');
            },600);
        }

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

});