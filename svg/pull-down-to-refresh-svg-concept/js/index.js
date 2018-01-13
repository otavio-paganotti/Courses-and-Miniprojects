$(document).ready(function() {
  
  var animating = false,
      frame = 1000 / 60,
      animTime = 900,
      curY = 0,
      transDiff = 0,
      $body = $(".demo__body"),
      $content = $(".demo__content"),
      $svg = $(".demo__svg"),
      $path = $(".demo__path"),
      $ball = $(".demo__ball"),
      $progress = $(".demo__progress");
  
  var easings = {
    smallElastic: function(t,b,c,d) {
      var ts = (t/=d)*t;
      var tc = ts*t;
      return b+c*(33*tc*ts + -106*ts*ts + 126*tc + -67*ts + 15*t);
    },
    bigElastic: function(t, b, c, d) {
      var ts=(t/=d)*t;
      var tc=ts*t;
      return b+c*(56*tc*ts + -175*ts*ts + 200*tc + -100*ts + 20*t);
    },
    inCubic: function(t,b,c,d) {
      var tc = (t/=d)*t*t;
      return b+c*(tc);
    }
  }
  
  function createD(sideY,y) {
    return "M0,550 0,"+sideY+" Q200,"+y+" 400,0 L400,550";
  }
  
  var currentPath = createD(0,0);
  
  function changeQ(path,x,y) {
    var d = path.attr("d"),
        newD = d.replace(/\bQ(\d+),(\d+)\b/gi, "Q" + x + "," + y);
    path.attr("d", newD);
  }
  
  function animatePathD(path, finalD, time, callback, easing) {
    animating = true;
    var steps = Math.floor(time / frame),
        curStep = 0,
        oldArr = currentPath.split(" "),
        nextY,
        easingQ = easings[easing] || easings["bigElastic"];

    function animate() {
      curStep++;
      nextY = easingQ(curStep, curY, 0-curY, steps);
      oldArr[2] = "Q200,"+nextY;
      $path.attr("d", oldArr.join(" "));
      if (curStep > steps) {
        curY = 0;
        $path.attr("d", finalD);
        if (callback) callback();
        return;
      }
      requestAnimationFrame(animate);
    }
    animate();
  }
  
  function handlers() {
    
    $(document).on("mousedown touchstart", ".demo__body", function(e) {
      if (animating) return;
      var startY =  e.pageY || e.originalEvent.touches[0].pageY;
      
      $(document).on("mousemove touchmove", function(e) {
        var y = e.pageY || e.originalEvent.touches[0].pageY,
            diff = y - startY;
        transDiff = diff;
        curY = diff*2 - 300;
        if (transDiff >= 20) $content.addClass("hidden");
        if (transDiff < 0) transDiff = 0;
        if (transDiff > 150) transDiff = 150;
        $body.css("transform", "translate3d(0,"+ transDiff +"px,0)");
        if (curY <= 0) curY = 0;
        if (curY > 140) curY = 140;
        changeQ($path, 200, curY);
      });
      
    });
    
    $(document).on("mouseup touchend", function(e) {
      $(document).off("mousemove touchmove");
      if (animating) return;
      if (!transDiff) {
        $content.removeClass("hidden");
        return;
      }
      if (curY < 50) {
        $body.addClass("withTransition");
        $body.css("top");
        $body.css("transform", "translate3d(0,0,0)");
        animatePathD($path, createD(0,0), animTime/2);
        $content.removeClass("hidden");
        setTimeout(function() {
          $body.removeClass("withTransition");
        }, animTime/2);
        setTimeout(function() {
          animating = false;
        }, animTime);
        return;
      }
      animatePathD($path, createD(0,0), animTime);
      setTimeout(function() {
        $ball.addClass("jump");
        // WE
        setTimeout(function() {
          $progress.attr("class", $progress.attr("class") + " animate");
          // NEED
          setTimeout(function() {
            $ball.removeClass("jump");
            // TO
            setTimeout(function() {
              $body.addClass("withTransition");
              $body.css("top");
              $body.css("transform", "translate3d(0,0,0)");
              $progress.attr("class", "demo__progress");
              $content.removeClass("hidden");
              // GO
              setTimeout(function() {
                $body.removeClass("withTransition");
                animating = false;
                // DEEPER
              }, animTime/2);
            }, 300);
          }, 2300);
        }, 700);
      }, animTime/3);
    });
    
  }
  
  handlers();
  
});