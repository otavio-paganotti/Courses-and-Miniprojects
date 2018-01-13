var paths = 100,
  dist = 10,
  step = 10,
  angles = $(window).height() / step,
  min = 0,
  max = 10,
  stroke = 5;
for (var a = 0; a < paths; a++) {
  var newPath = $("path:last").clone().appendTo("svg"),
    arr = [],
    calc = (a * dist) + max,
    start = "M" + calc + ",0";
  for (var i = 0; i <= angles; i++) {
    i % 2 ? arr[i] = (a * dist) + min : arr[i] = (a * dist) + max;
    arr[i] = arr[i] + "," + i * step + " ";
  }
  var draw = start + " L" + arr.join("");
  newPath.attr("d", draw)
    .attr("id", "path" + a)
    .attr("fill", "none")
    .attr("stroke", "#" + Math.random().toString(16).slice(2, 8))
    //.attr("stroke", "#fff")
    .attr("stroke-width", stroke);
  newPath.find("animate").attr("id", "anim" + a);
}
$("path:first").remove();

// ANIMATING

function init() {
  for (var i = 0; i < paths; i++) {
    setAnim(i);
  }
}

function setAnim(number) {
  var path = document.getElementById("path" + number),
    pl = path.getTotalLength().toString(),
    pa = document.getElementById("anim" + number);
  path.setAttributeNS(null, "stroke-dasharray", pl + " " + pl);
  path.setAttributeNS(null, "stroke-dashoffset", pl);
  pa.setAttributeNS(null, "from", pl);
  pa.setAttributeNS(null, "dur", Math.random() * 8 + 8);
  pa.setAttributeNS(null, "values", pl + ';0');
}

$(document).ready(function() {
  init();
});