// Utils for selection
var $ = function(e) { 
  return document.querySelector(e); 
}
var $$ = function(e) { 
  return document.querySelectorAll(e); 
}

var seeds = $$('#seeds > g'),
    mixer = $('#mixer'),
    mixerHand = $('#mixer-hand'),
    pack = $('#pack'),
    packAll = $$('#pack > *:not(#pack-seed):not(#pack-circle)'),
    packSeed = $('#pack-seed'),
    packCircle = $('#pack-circle'),
    machine = $('#machine'),
    machineCup = $('#machine-cup'),
    machineDrop = $('#machine-drop'),
    machineAll = $$('#machine > *:not(#machine-cup)'),
    smoke = $('#smoke'),
    text = $('#text'),
    textSVG = $('#text-svg'),
    textCaffe = $('#text-caffe');

var tl = new TimelineMax( );
tl.to(seeds[0], .25, {
  x: 50,
  y: 140,
  ease: Power3.easeIn
})
.to(seeds[1], .25, {
  y: 100,
  ease: Power2.easeIn
})
.to(seeds[2], .25, {
  x: -10,
  y: 150,
  ease: Power3.easeInOut
})
.to(seeds[3], .15, {
  x: 15,
  y: 60,
  ease: Power1.easeInOut
})
.to(seeds[4], .15, {
  x: -7,
  y: 60,
  ease: Power3.easeIn
})
.to(mixerHand, .25, {
  scaleX: -1,
  repeat: 5,
  yoyo: true,
  ease: Back.easeOut.config(1.7),
})
.to(seeds, .2, { autoAlpha: 0 }, '3' )
.set(pack, { y: -140 })
.set([packAll, packCircle], { autoAlpha: 0 })
.to(pack, .5, { 
  y: -275,
  autoAlpha: 1,
  ease: Elastic.easeOut.config(1, 0.3)
})
.to(mixer, .2, { 
  y: 1000,
  autoAlpha: 0,
  ease: Power0.easeIn
})
.to([packAll, packCircle], .2, { autoAlpha: 1 })
.to(pack, .2, {
  transformOrigin: "50% 50%",
  rotation: 360,
  repeat: 1,
  ease: Power0.easeIn
})
.set(machine, { y: 400})
.set([machineCup, machineDrop], { autoAlpha: 0 })
.set(machineCup, { y: 30 })
.to(machine, .4, {
  autoAlpha: 1,
  y: 0,
  ease: Elastic.easeOut.config(1, 0.3)
})
.to(pack, .1, { 
  y: -225,
  scale: 5,
  autoAlpha: 0,
  ease: Power1.easeOut
}, '-=.34')
.to(machineCup, .5, {
  autoAlpha: 1,
  y: 0,
  ease: Elastic.easeOut.config(1, 0.3)
})
.to(machineDrop, .25, {
  autoAlpha: 1
})
.to(machineDrop, 1, {
  y: 63,
  autoAlpha: 0,
  repeat: 2
})
.to(machineAll, .25, {
  x: -600,
  transformOrigin: "50% 50%",
  autoAlpha: 0,
  ease: Back.easeOut
})
.to(smoke, .2, {
  autoAlpha: 1
})
.set(text, { y: 4 })
.set(textSVG, { x: -400 })
.set(textCaffe, { y: -400 })
.to(textSVG, .45, {
  autoAlpha: 1,
  x: 0,
  ease: Bounce.easeOut
})
.to(textCaffe, .55, {
  autoAlpha: 1,
  y: 0,
  ease: Bounce.easeOut
})