var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
    baseline = select('.baseline'),
    shine = select('.shine'),
    letterSDots = selectAll('.letterS circle'),
    letterSPaths = selectAll('.letterS path'),
    letterVDots = selectAll('.letterV circle'),
    letterVPaths = selectAll('.letterV line'),
    letterGDots = selectAll('.letterG circle'),
    letterGPaths = selectAll('.letterG path')
  

TweenMax.set('svg', {
  visibility: 'visible'
})
CustomEase.create("drop", "M0,0 C0.574,0.01 0.815,0.71 0.846,1 0.867,1.089 0.899,0.954 0.93,0.954 0.96,0.954 0.989,1.055 1,1");
//CustomBounce.create("fall", {strength:0.6, squash:2, squashID:'fallSquash'});
CustomBounce.create("fall", {strength:0.6});
                            
TweenMax.set(shine, {
 rotation:45,
 transformOrigin:'50% 50%',
 x:750,
 y:170
})

var Stl = new TimelineMax();
Stl.staggerFrom(letterSDots, 1, {
 attr:{
  cy:'-=130',
  r:0
 },
 //ease:Elastic.easeOut.config(0.9, 0.27)
 ease:'drop'
},0.05)
 .staggerFrom(letterSPaths, 0.6, {
 drawSVG:'0% 0%',
 ease:Power4.easeOut
},0.005,'-=0.3')

var Vtl = new TimelineMax();
Vtl.staggerFrom(letterVDots, 1, {
 attr:{
  cy:'-=130',
  r:0
 },
 //ease:Elastic.easeOut.config(0.9, 0.27)
 ease:'drop'
},0.05)
 .staggerFrom(letterVPaths, 0.6, {
 drawSVG:'0% 0%',
 ease:Power4.easeOut
},0.005,'-=0.3')

var Gtl = new TimelineMax();
Gtl.staggerFrom(letterGDots, 1, {
 attr:{
  cy:'-=130',
  r:0
 },
 //ease:Elastic.easeOut.config(0.9, 0.27)
 ease:'drop'
},0.05)
 .staggerFrom(letterGPaths, 0.6, {
 drawSVG:'0% 0%',
 ease:Power4.easeOut
},0.005,'-=0.3')

var fallTl = new TimelineMax();
fallTl.staggerTo(letterSDots, 1, {
 attr:{
  cy:393
 },
 ease:'fall'
},0.07)
.staggerTo(letterVDots, 1, {
 attr:{
  cy:393
 },
 ease:'fall'
},0.07,'-=' + fallTl.duration())
.staggerTo(letterGDots, 1, {
 attr:{
  cy:393
 },
 ease:'fall'
},0.07,'-=' + fallTl.duration())

var baselineTl = new TimelineMax();
baselineTl.from(baseline, 0.5, {
 attr:{
  width:0
 },
 x:240,
 fill:'#ededed',
 ease:Power3.easeInOut
})

var shineTl = new TimelineMax();
shineTl.to(shine, 0.5, {
 x:'-=900'
})

 var outlineMaskTl = new TimelineMax();
 outlineMaskTl.to('.whole', 2, {
 y:1400,
  ease:'fall'
})
.to(baseline, 0.5, {
 attr:{
  width:0
 },
 x:240,
 fill:'#ededed',
 ease:Back.easeInOut
},'-=1.9')

var mainTl = new TimelineMax({repeat:-1}).timeScale(0.7)

mainTl.add(Stl,0);
mainTl.add(Vtl,0);
mainTl.add(Gtl,0);
mainTl.add(shineTl,0.9);
mainTl.add(fallTl,2.1);
mainTl.add(baselineTl,0.5);
mainTl.add(outlineMaskTl,4.5);

//ScrubGSAPTimeline(mainTl);
//TweenMax.globalTimeScale(0.5)