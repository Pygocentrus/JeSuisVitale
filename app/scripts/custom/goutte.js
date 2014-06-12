var goutteWrapper = d3.select('#goutte-wrapper');

d3.xml("img/goutte/goutte_vide.svg", "image/svg+xml", function(xml) {
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

// });

// d3.xml("img/goutte/goutte_vide.svg", "image/svg+xml", function(xml) {
//     var importedNode = document.importNode(xml.documentElement, true);
//     goutteWrapper.node().appendChild(importedNode);

//     var svgContainer = d3.select('#goutte');

    d3.xml("img/goutte/chlore.svg", "image/svg+xml", function(xml) {
    	// svgContainer.append(xml);
    	var importedNode = document.importNode(xml.documentElement, true);
    	goutteWrapper.node().appendChild(importedNode);
      

      var element = document.getElementById('chlore-path');
      var box = element.getBBox();
      var scaleVal = 3;
      var cx = box.x;
      var cy = box.y + box.height;

      element.setAttribute('transform', 'translate(' + cx + ' ' + cy + ') scale(' + scaleVal + ') translate(' + (-cx) + ' ' + (-cy) + ')');


	})


});


// var svgContainer = goutteWrapper.append("svg")
//                                     .attr("width", 200)
//                                     .attr("height", 200);

// var line = d3.svg.line()
//     .interpolate("cardinal")
//     .x(function(d) { return x(d.x); })
//     .y(function(d) { return y(d.y); });
//     var data = d3.range(10).map(function(i) {
//   return {x: i / 9, y: (Math.sin(i * 2) + 1) / 2};
// });
//    //  svgContainer.selectAll("path")
//    //  .data([0, 0.2, 0.4, 0.6, 0.8, 1])
//   	// .enter().append("svg:path")
//    //  .attr("d", function(d) { return line.tension(d)(data); })
//    //  .style("stroke", d3.interpolateRgb("brown", "steelblue"));
    
//    var data = [0, 4.2, 2.4, 0.6, 0.8, 1];

// 	var path = svgContainer.selectAll("path")
// 	    .data([0, 4.2, 2.4, 0.6, 0.8, 1])
// 	  	.enter().append("path")
// 	    .attr("d", 'M202.5,219.3l79-25.4c-16.9-41.5-79-85.9-79-85.9V219.3z')
// 	    .style("fill", "black")

// 	// var pathAttributes = path.fill("black")


















