var img = document.querySelector("#displacementFilter feTurbulence");
var frames = 0;
var rad = Math.PI / 180;

function AnimateBaseFrequency() {
  //baseFrequency="0.01 .1"
  bfx = 0.01;
  bfy = .1;
  frames += .25
  bfx += 0.001 * Math.cos(frames * rad);
  bfy += 0.005 * Math.sin(frames * rad);

  bf = bfx.toString() + ' ' + bfy.toString();
  img.setAttributeNS(null, 'baseFrequency', bf);

  window.requestAnimationFrame(AnimateBaseFrequency);
}

window.requestAnimationFrame(AnimateBaseFrequency);