 $(document).ready(function() {
     var gq = $('#music>.gq')
     var tp = $('#music>.control>.control-after')
     $(tp).on("click", function() {
         //  alert();
         // alert(tp);
         // var music = document.getElementById("music");
         if ($(gq).get(0).paused) { //get从页面加载返回。如果gq播放的时候点击则暂停
             $(gq).get(0).play()
                 // $(tp).css({
                 //  $(tp).stop(false).animation({ ' transform': 'rotate(0deg)' });
                 // });
         } else { //反之如果歌曲是暂停的情况下，则播放。
             $(gq).get(0).pause();
             // $("#toggle").val("stop");
             //  $(tp).stop(true).css({ transform: "rotate(0deg)", });
         }
     });
 })