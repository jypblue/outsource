$(function() {
    // 获取每个阶段的高度
    var benz0stepH = $('#benz0step').offset().top;
    var benz1stepH = $('#benz1step').offset().top;
    var benz2stepH = $('#benz2step').offset().top;
    var benz3stepH = $('#benz3step').offset().top;
    var benz4stepH = $('#benz4step').offset().top;
    var benz5stepH = $('#benz5step').offset().top;
    var benz6stepH = $('#benz6step').offset().top;
    var offset = $('.benz-title').height();
    var docH = $(document).height() - $(window).height() + offset;

    $(window).on('scroll',function(e){
       var winPos = $(this).scrollTop() + offset;
       //取消动效
       allAnimateRemove();

        //红旗飘飘
        if(winPos >= benz0stepH && winPos < benz2stepH) {
            flagwave();
        }

        //海鸥1飞入
        if(winPos >= benz1stepH && winPos < benz4stepH ) {
            benz1seagull()
        }
         //海鸥2飞入
        if(winPos >= benz5stepH) {
            benz2seagull()
        }

        //奔驰1显示
        if(winPos >= benz2stepH && winPos < benz4stepH) {
            benz1car()
        }
         //奔驰2显示
        if(winPos >= benz4stepH && winPos < benz5stepH) {
            benz2car()
        }
         //奔驰3显示
        if(winPos >= benz5stepH) {
            benz3car()
        }

        // 咖啡
          if(winPos >= benz3stepH && winPos < benz5stepH) {
            coffee()
        }

        // 滑雪的人
        if(winPos >= benz3stepH && winPos < benz6stepH) {
            skiman()
        }

        // 缆车
        if(winPos >= benz3stepH ) {
            cablecar()
        } else {
              // 缆车
            $('#cable-car1-move').removeClass('cable-car1-move').removeClass('cable-wave').addClass('hide');
            $('#cable-car2-move').removeClass('cable-car2-move').removeClass('cable-wave').addClass('hide');
            $('#cable-car3-move').removeClass('cable-car3-move').removeClass('cable-wave').addClass('hide');
        }

        //火车
        if(winPos >= benz4stepH && winPos < benz6stepH) {
            benztrain();
        } else {
            $('#benztrain').removeClass('slideInRight').addClass('hide');
        }

        //奶牛niu
        if(winPos >= benz4stepH && winPos < benz6stepH) {
            cow();
        }

        // 手表
        if(winPos >= benz5stepH) {
            watch()
        }

    });

    //取消所有效果
    function allAnimateRemove(){
        //红旗飘飘
        $('#benzflag').removeClass('flag-wave');
        // 海鸥飞入
        $('#benz1seagull').removeClass('slideInLeft').addClass('hide');
         // 海鸥飞入2
        $('#benz2seagull').removeClass('slideInLeft').addClass('hide');
         // 奔驰车1
        $('#benz1car').removeClass('fadeIn').addClass('hide');
         // 奔驰车2
        $('#benz2car').removeClass('fadeIn').addClass('hide');
         // 奔驰车3
        $('#benz3car').removeClass('fadeIn').addClass('hide');
        // 咖啡
        // 咖啡杯子
        $('#coffeecup').removeClass('coffee-cup-wave');
        // 咖啡豆子
        $('#bean1').removeClass('bean1-wave');
        $('#bean2').removeClass('bean2-wave');
        $('#bean3').removeClass('bean3-wave');
        $('#bean4').removeClass('bean4-wave');
        $('#bean5').removeClass('bean5-wave');

        // 滑雪的人
        $('#skiman').removeClass('skiing-animate');

        // 奶牛
        $('#benzcow1').removeClass('cow1-move');
        $('#benzcow2').removeClass('cow2-move');

        // 手表
        $('#benzwatch').removeClass('watch-move');
    }

    //红旗飘飘
    function flagwave() {
        $('#benzflag').addClass('flag-wave');
    }
    // 海鸥飞入
    function benz1seagull() {
        $('#benz1seagull').addClass('slideInLeft').removeClass('hide');
    }
      // 海鸥飞入2
    function benz2seagull() {
        $('#benz2seagull').addClass('slideInLeft').removeClass('hide');
    }
     // 奔驰车1
     function benz1car() {
        $('#benz1car').addClass('fadeIn').removeClass('hide')
    }
     // 奔驰车2
     function benz2car() {
        $('#benz2car').addClass('fadeIn').removeClass('hide')
    }
     // 奔驰车3
     function benz3car() {
        $('#benz3car').addClass('fadeIn').removeClass('hide')
    }
    // 咖啡杯子
    function coffee() {
        // 咖啡杯子
        $('#coffeecup').addClass('coffee-cup-wave');
        // 咖啡豆子
        $('#bean1').addClass('bean1-wave');
        $('#bean2').addClass('bean2-wave');
        $('#bean3').addClass('bean3-wave');
        $('#bean4').addClass('bean4-wave');
        $('#bean5').addClass('bean5-wave');
    }

    // 滑雪的人
    function skiman(){
        $('#skiman').addClass('skiing-animate');
    }

    // 缆车1
    function cablecar(){
        $('#cable-car1-move').addClass('cable-car1-move').removeClass('hide');
        $('#cable-car1-move').on('webkitAnimationEnd', function() {
            $('#cable-car1-move').removeClass('cable-car1-move').addClass('cable-wave');
        });
          $('#cable-car2-move').addClass('cable-car2-move').removeClass('hide');
        $('#cable-car2-move').on('webkitAnimationEnd', function() {
            $('#cable-car2-move').removeClass('cable-car2-move').addClass('cable-wave');
        });
          $('#cable-car3-move').addClass('cable-car3-move').removeClass('hide');;
        $('#cable-car3-move').on('webkitAnimationEnd', function() {
            $('#cable-car3-move').removeClass('cable-car3-move').addClass('cable-wave');
        });
    }

    //火车
    function benztrain(){
        $('#benztrain').removeClass('hide').addClass('slideInRight');
    }

    // 奶牛
    function cow(){
        $('#benzcow1').addClass('cow1-move');
        $('#benzcow2').addClass('cow2-move');
    }

    //手表
    function watch(){
        $('#benzwatch').addClass('watch-move');
    }

});