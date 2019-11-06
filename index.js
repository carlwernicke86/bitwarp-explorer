window.onload = function() {

  let IMAGE_WIDTH = window.innerWidth * 0.79;
  let IMAGE_RATIO = 1016/1860;
  let IMAGE_HEIGHT = IMAGE_WIDTH * IMAGE_RATIO;
  let DEFAULT_TRANSITION_DURATION = 1000;

  var imageBufferInUse = 1;
  var curMap = 0;

  function ChangeToMap(mapIndex) {
    curMap = maps[mapIndex];
    cxScale = d3.scaleLinear().domain([curMap.minX,curMap.maxX]).range([0,IMAGE_WIDTH]);
    cyScale = d3.scaleLinear().domain([curMap.minZ,curMap.maxZ]).range([0,IMAGE_HEIGHT]);
    statue_scatter.transition().duration(DEFAULT_TRANSITION_DURATION).attr("cx", function(d){return cxScale(d.x);})
                                                             .attr("cy", function(d){return cyScale(d.z);});

    //switch buffers and transition
    d3.select("svg #i"+imageBufferInUse).transition().duration(DEFAULT_TRANSITION_DURATION).style("opacity",0);
    d3.select("svg #i"+(imageBufferInUse*-1)).attr("xlink:href", curMap.url).style("opacity",0);
    d3.select("svg #i"+(imageBufferInUse*-1)).transition().duration(DEFAULT_TRANSITION_DURATION).style("opacity",1);
    imageBufferInUse *= -1;
  }

  function mouseOverStatue(d, circleObject) {
    circleObject.style.fill = "blue";
    d3.select("#infoDisplay").text("x: "+d.x+" y: "+d.y+" z: "+d.z+";  "+d.map+": "+d.name);
  }

  function mouseOffStatue(d, circleObject) {
    d3.select("#infoDisplay").text("");
    circleObject.style.fill="#f5ff5f";
  }

  window.onresize = function() {
    //reset components on a window resize
    IMAGE_WIDTH  = window.innerWidth * 0.79;
    IMAGE_HEIGHT = IMAGE_WIDTH * IMAGE_RATIO;
    d3.selectAll("image").attr("width", IMAGE_WIDTH).attr("height", IMAGE_HEIGHT);
    d3.select("svg").attr("width",IMAGE_WIDTH).attr("height",IMAGE_HEIGHT);

    cxScale = d3.scaleLinear().domain([curMap.minX,curMap.maxX]).range([0,IMAGE_WIDTH]);
    cyScale = d3.scaleLinear().domain([curMap.minZ,curMap.maxZ]).range([0,IMAGE_HEIGHT]);
    statue_scatter.transition().duration(0).attr("cx", function(d){return cxScale(d.x);})
                                                             .attr("cy", function(d){return cyScale(d.z);});
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
                       .append("circle")

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
    {
      name: "Lanayru Mine",
      text: "Lanayru Mine",
      index: 2
    },
    {
      name: "Lanayru Desert",
      text: "Lanayru Desert",
      index: 3
    },
    {
      name: "Skyview Temple",
      text: "Skyview Temple",
      index: 4
    },
    {
      name: "Deep Woods",
      text: "Deep Woods",
      index: 5
    },
    {
      name: "Fire Sanctuary",
      text: "Fire Sanctuary",
      index: 6
    },
    {
      name: "Lake Floria",
      text: "Lake Floria",
      index: 7
    },
    {
      name: "Ancient Cistern (main)",
      text: "Ancient Cistern (main)",
      index: 8
    },
    {
      name: "Ancient Cistern (basement)",
      text: "Ancient Cistern (Basement)",
      index: 9
    },
    {
      name: "Faron Woods",
      text: "Faron Woods",
      index: 10
    },
    {
      name: "Sealed Grounds",
      text: "Sealed Grounds",
      index: 11
    },
    {
      name: "Eldin Volcano",
      text: "Eldin Volcano",
      index: 12
    }
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

  ChangeToMap(curMap);
}
