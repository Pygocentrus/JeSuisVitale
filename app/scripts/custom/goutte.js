var goutteWrapper = d3.select('#goutte-wrapper');

d3.xml("img/goutte/goutte_fond.svg", "image/svg+xml", function(xml) {
    var importedNode = document.importNode(xml.documentElement, true);
    goutteWrapper.node().appendChild(importedNode);

    // AMMONIUM
    d3.xml("img/goutte/ammonium.svg", "image/svg+xml", function(xml) {
      var importedNode = document.importNode(xml.documentElement, true);
      goutteWrapper.node().appendChild(importedNode);
      // var element = document.getElementById('ammonium-path');
      // var box = element.getBBox();
      // var scaleVal = 1.32;
      // var cx = box.x + box.width;
      // var cy = box.y + box.height;
      // element.setAttribute('transform', 'translate(' + cx + ' ' + cy + ') scale(' + scaleVal + ') translate(' + (-cx) + ' ' + (-cy) + ')');
    })

    // CHLORE
    d3.xml("img/goutte/chlore.svg", "image/svg+xml", function(xml) {
    	var importedNode = document.importNode(xml.documentElement, true);
    	goutteWrapper.node().appendChild(importedNode);
      // var element = document.getElementById('chlore-path');
      // var box = element.getBBox();
      // var scaleVal = 1.665;
      // var cx = box.x;
      // var cy = box.y + box.height;
      // element.setAttribute('transform', 'translate(' + cx + ' ' + cy + ') scale(' + scaleVal + ') translate(' + (-cx) + ' ' + (-cy) + ')');
	 })

    // CONDUCTIVITE
    d3.xml("img/goutte/conductivite.svg", "image/svg+xml", function(xml) {
      var importedNode = document.importNode(xml.documentElement, true);
      goutteWrapper.node().appendChild(importedNode);
      // var element = document.getElementById('conductivite-path');
      // var box = element.getBBox();
      // var scaleVal = 1.35;
      // var cx = box.x;
      // var cy = 222.4;
      // element.setAttribute('transform', 'translate(' + cx + ' ' + cy + ') scale(' + scaleVal + ') translate(' + (-cx) + ' ' + (-cy) + ')');
   })

    // NITRATES
    d3.xml("img/goutte/nitrates.svg", "image/svg+xml", function(xml) {
      var importedNode = document.importNode(xml.documentElement, true);
      goutteWrapper.node().appendChild(importedNode);
      // var element = document.getElementById('nitrates-path');
      // var box = element.getBBox();
      // var scaleVal = 1.47;
      // var cx = 203.7;
      // var cy = box.y;
      // element.setAttribute('transform', 'translate(' + cx + ' ' + cy + ') scale(' + scaleVal + ') translate(' + (-cx) + ' ' + (-cy) + ')');
   })

  //   // PH
  //   d3.xml("img/goutte/ph.svg", "image/svg+xml", function(xml) {
  //     var importedNode = document.importNode(xml.documentElement, true);
  //     goutteWrapper.node().appendChild(importedNode);
  //     // var element = document.getElementById('ph-path');
  //     // var box = element.getBBox();
  //     // var scaleVal = 1.47;
  //     // var cx = 204;
  //     // var cy = 219.5;
  //     // element.setAttribute('transform', 'translate(' + cx + ' ' + cy + ') scale(' + scaleVal + ') translate(' + (-cx) + ' ' + (-cy) + ')');
  //  })

	   // ligne jaunes des normes
    d3.xml("img/goutte/normes.svg", "image/svg+xml", function(xml) {
    	var importedNode = document.importNode(xml.documentElement, true);
    	goutteWrapper.node().appendChild(importedNode);
    });

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


















