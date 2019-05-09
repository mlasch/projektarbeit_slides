let sketch_triangulation = function(p) {
    p.setup = function(){
      p.createCanvas(800, 500);
      p.background(220);
    }
  };
  
new p5(sketch_triangulation, 'canvas-triangulation');
