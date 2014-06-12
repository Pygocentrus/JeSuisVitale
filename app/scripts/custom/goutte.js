goutteSVGDrawer = {
  drawGoutte: function() {

    var goutteWrapper = d3.select('#goutte-wrapper');

    d3.xml("img/goutte/goutte_fond.svg", "image/svg+xml", function(xml) {
      var importedNode = document.importNode(xml.documentElement, true);
      goutteWrapper.node().appendChild(importedNode);

      // AMMONIUM
      d3.xml("img/goutte/intern.svg", "image/svg+xml", function(xml) {
        console.log('intern charged');
        var importedNode = document.importNode(xml.documentElement, true);
        goutteWrapper.node().appendChild(importedNode);
        var element = document.getElementById('ammonium-path');
        var box = element.getBBox();
        var maxScaleVal = 1.32;
        var scaleVal = 1;
        var norme = 0.04

        // find scaleValue
        if ($scope.city.attributes.ammonium > norme) {
          scaleVal = ((($scope.city.attributes.ammonium / norme) - 1) * (maxScaleVal - 1)) + 1;
          scaleVal = scaleVal > maxScaleVal ? maxScaleVal : scaleVal; 
        } else {
          scaleVal = $scope.city.attributes.ammonium / norme;
        }

        // reajust data on la goutte
        var cx = box.x + box.width;
        var cy = box.y + box.height;
        element.setAttribute('transform', 'translate(' + cx + ' ' + cy + ') scale(' + scaleVal + ') translate(' + (-cx) + ' ' + (-cy) + ')');

        // document.getElementById('ammonium-svg').onmouseover = function() {
        //   console.log('in ammonium');
        // };
        document.getElementById('ammonium-path').onmouseover=function(){console.log('hello')};

      // })

      // CHLORE
      // d3.xml("img/goutte/chlore.svg", "image/svg+xml", function(xml) {
        // var importedNode = document.importNode(xml.documentElement, true);
        // goutteWrapper.node().appendChild(importedNode);
        var element = document.getElementById('chlore-path');
        var box = element.getBBox();
        var maxScaleVal = 1.3;
        var scaleVal =1;
        var norme = 0.10;

        // find scaleValue
        if ($scope.city.attributes.chlore > norme) {
          scaleVal = ((($scope.city.attributes.chlore / norme) - 1) * (maxScaleVal - 1)) + 1;
          scaleVal = scaleVal > maxScaleVal ? maxScaleVal : scaleVal; 
        } else {
          scaleVal = $scope.city.attributes.chlore / norme;
        }        

        // reajust data on la goutte
        var cx = box.x;
        var cy = box.y + box.height;
        element.setAttribute('transform', 'translate(' + cx + ' ' + cy + ') scale(' + scaleVal + ') translate(' + (-cx) + ' ' + (-cy) + ')');
      // })

      // CONDUCTIVITE
      // d3.xml("img/goutte/conductivite.svg", "image/svg+xml", function(xml) {
        // var importedNode = document.importNode(xml.documentElement, true);
        // goutteWrapper.node().appendChild(importedNode);
        var element = document.getElementById('conductivite-path');
        var box = element.getBBox();
        var maxScaleVal = 1.35;
        var scaleVal = 1;
        var norme = 600;

        // find scaleValue
        if ($scope.city.attributes.conductivite > norme) {
          scaleVal = ((($scope.city.attributes.conductivite / norme) - 1) * (maxScaleVal - 1)) + 1;
          scaleVal = scaleVal > maxScaleVal ? maxScaleVal : scaleVal; 
        } else {
          scaleVal = $scope.city.attributes.conductivite / norme;
        }

        // reajust data on la goutte
        var cx = box.x;
        var cy = 222.4;
        element.setAttribute('transform', 'translate(' + cx + ' ' + cy + ') scale(' + scaleVal + ') translate(' + (-cx) + ' ' + (-cy) + ')');
      // })

        // NITRATES
      // d3.xml("img/goutte/nitrates.svg", "image/svg+xml", function(xml) {
        // var importedNode = document.importNode(xml.documentElement, true);
        // goutteWrapper.node().appendChild(importedNode);
        var element = document.getElementById('nitrates-path');
        var box = element.getBBox();
        var maxScaleVal = 1.50;
        var scaleVal = 1;
        var norme = 50;

        // find scaleValue
        if ($scope.city.attributes.nitrates > norme) {
          scaleVal = ((($scope.city.attributes.nitrates / norme) - 1) * (maxScaleVal - 1)) + 1;
          scaleVal = scaleVal > maxScaleVal ? maxScaleVal : scaleVal; 
        } else {
          scaleVal = $scope.city.attributes.nitrates / norme;
        }

        // reajust data on la goutte
        var cx = 203.7;
        var cy = box.y;
        element.setAttribute('transform', 'translate(' + cx + ' ' + cy + ') scale(' + scaleVal + ') translate(' + (-cx) + ' ' + (-cy) + ')');
      // })

      // PH
      // d3.xml("img/goutte/ph.svg", "image/svg+xml", function(xml) {
        // var importedNode = document.importNode(xml.documentElement, true);
        // goutteWrapper.node().appendChild(importedNode);
        var element = document.getElementById('ph-path');
        var box = element.getBBox();
        var maxScaleVal = 1.4;
        var scaleVal =1;
        var norme = 7.75;

        // find scaleValue
        if ($scope.city.attributes.ph > norme) {
          scaleVal = ((($scope.city.attributes.ph / norme) - 1) * (maxScaleVal - 1)) + 1;
          scaleVal = scaleVal > maxScaleVal ? maxScaleVal : scaleVal; 
        } else {
          scaleVal = $scope.city.attributes.ph / norme;
        }

        // reajust data on la goutte
        var cx = 204;
        var cy = 219.5;
        element.setAttribute('transform', 'translate(' + cx + ' ' + cy + ') scale(' + scaleVal + ') translate(' + (-cx) + ' ' + (-cy) + ')');
       // })

      // ligne jaunes des normes
      // d3.xml("img/goutte/normes.svg", "image/svg+xml", function(xml) {
        // var importedNode = document.importNode(xml.documentElement, true);
        // goutteWrapper.node().appendChild(importedNode);
      });
    });
  }
}








