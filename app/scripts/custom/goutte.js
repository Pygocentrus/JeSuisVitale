var goutteWrapper = d3.select('#goutte-wrapper');

d3.xml("img/goutte.svg", "image/svg+xml", function(xml) {
	console.log(xml);
    var importedNode = document.importNode(xml.documentElement, true);
    goutteWrapper.node().appendChild(importedNode);

    var svgContainer = d3.select('#goutte');
    // var path = document.querySelectorAll('path');
    // console.log(path); 

    // AMMONIUM

    // ammoniumGroup
   	var ammoniumGroup = svgContainer.append("g");

	var lineData = [ { "x": 152,   "y": 206},  { "x": 20,  "y": 20},
	                 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
	                 { "x": 80,  "y": 5},  { "x": 100, "y": 60}];

	//This is the accessor function we talked about above

	var lineFunction = d3.svg.line()
	                         .x(function(d) { return d.x; })
	                         .y(function(d) { return d.y; })
	                         .interpolate("linear");

	//The SVG Container
	// var svgContainer = d3.select("body").append("svg")
	//                                     .attr("width", 200)
	//                                     .attr("height", 200);

	//The line SVG Path we draw
	var lineGraph = ammoniumGroup.append("path")
	                            .attr("d", lineFunction(lineData))
	                            .attr("stroke", "blue")
	                            .attr("stroke-width", 2)
	                            .attr("fill", "none");












});