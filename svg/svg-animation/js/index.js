var c = $('circle');
var s = $('svg');
var t = $('text');

TweenMax.set(c, {drawSVG:'0%', transformOrigin:"50% 50%"});
TweenMax.set(s, {xPercent:-50, yPercent:-50});

s.mouseover(function(){
  TweenMax.to(s, 1, { rotationX:-45, rotationY:20})
  TweenMax.to(c ,1, {drawSVG:'100%', stroke:'#12ea5b', fill:"#666" , delay:0})
  TweenMax.to(t,1,{stroke:'#72ea90'})
});

s.mouseleave(function(){
  TweenMax.to(s, 1, {rotationX:0, rotationY:0})
  TweenMax.to(c,1, {drawSVG:'0%', stroke:'#12ea5b', fill:'#333'})
  TweenMax.to(t,1,{stroke:'#fff'})
});