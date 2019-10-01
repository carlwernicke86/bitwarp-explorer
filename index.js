window.onload = function() {

  let   IMAGE_WIDTH = window.innerWidth * 0.79;
  const IMAGE_RATIO = 1016/1860;
  const IMAGE_HEIGHT = IMAGE_WIDTH * IMAGE_RATIO;
  const TRANSITION_DURATION = 1000;

  var imageBufferInUse = 1;

  window.onresize = function() {
    IMAGE_WIDTH = window.innerWidth * 0.79;
    d3.selectAll("image").attr("width", IMAGE_WIDTH);
  }

  function ChangeToMap(i) {
    cm = maps[i];
    cxScale = d3.scaleLinear().domain([cm.minX,cm.maxX]).range([0,IMAGE_WIDTH]);
    cyScale = d3.scaleLinear().domain([cm.minZ,cm.maxZ]).range([0,IMAGE_HEIGHT]);
    statue_scatter.transition().duration(TRANSITION_DURATION).attr("cx", function(d){return cxScale(d.x);})
                                                             .attr("cy", function(d){return cyScale(d.z);});

    //switch buffers and transition
    d3.select("svg #i"+imageBufferInUse).transition().duration(TRANSITION_DURATION).style("opacity",0);
    d3.select("svg #i"+(imageBufferInUse*-1)).attr("xlink:href", cm.url).style("opacity",0);
    d3.select("svg #i"+(imageBufferInUse*-1)).transition().duration(TRANSITION_DURATION).style("opacity",1);
    imageBufferInUse *= -1;
  }

  function mouseOverStatue(d, circleObject) {
    circleObject.style.fill = "red";
    d3.select("#infoDisplay").text("x: "+d.x+" y: "+d.y+" z: "+d.z+";  "+d.map+": "+d.name);
  }

  function mouseOffStatue(d, circleObject) {
    d3.select("#infoDisplay").text("");
    circleObject.style.fill="#f5ff5f";
  }

  let wholeSVG = d3.select("#generalMap").append("svg").attr("width",IMAGE_WIDTH).attr("height",IMAGE_HEIGHT);

  wholeSVG.append("image").attr("width",IMAGE_WIDTH)
                          .attr("height",IMAGE_HEIGHT)
                          .attr("preserveAspectRatio","xMinYMin meet")
                          .attr("x",0)
                          .attr("y",0)
                          .attr("id","i1");

  wholeSVG.append("image").attr("width",IMAGE_WIDTH)
                          .attr("height",IMAGE_HEIGHT)
                          .attr("preserveAspectRatio","xMinYMin meet")
                          .attr("x",0)
                          .attr("y",0)
                          .attr("id","i-1");

  let statue_scatter = wholeSVG.selectAll("circle")
                       .data(statues)
                       .enter()
                       .append("circle");

  statue_scatter.attr("r", 4)
                .attr("fill", "#f5ff5f")
                .attr("stroke", "#865c7c")
                .attr("stroke-width", 2)
                .on("mouseover", function(d) {mouseOverStatue(d, this)})
                .on("mouseout",  function(d) {mouseOffStatue(d, this)});

  //buttons
  let selectorList = [
    {
      name: "Skyloft",
      text: "Skyloft",
      index: 0
    },
    {
      name: "Inside Goddess Statue",
      text: "Inside the Statue of the Goddess",
      index: 1
    },
  ];

  //set selection event for drop-down list
  d3.select("#selector")
          .on("change", function() {ChangeToMap(document.getElementById("selector").value);})

  //create all drop-down options
  d3.select("#selector")
      .selectAll("option")
      .data(selectorList)
      .enter()
      .append("option")
      .attr("value", function(d) {return d.index;})
      .text(function(d) {return d.text;})

  ChangeToMap(0);
}
