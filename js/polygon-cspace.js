// Draw polygon and its c-space

let robot; //, obstacle;
//let cspace;

let obstacles = new Array();

let sketch_minkowsky = function(p) {
  p.setup = function() {
    p.createCanvas(800, 500);
    //canvas.parent('canvas-minkowsky');
    p.background(220);

    fetch("data/obstacle1.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        data.forEach(function(element) {
          console.log(element.vertexes);

          let v_list = new Array();
          element.vertexes.forEach(function(vertex) {
            v_list.push(new Vertex(vertex[0], vertex[1]));
          });
          obstacles.push(new Polygon(v_list));
        });
      });

    //obstacle = new Polygon([new Vertex(100, 40), new Vertex(300, 100), new Vertex(200, 350)]);
    robot = new Polygon([new Vertex(-20, -20), new Vertex(20, -20), new Vertex(20, 20), new Vertex(-20, 20)]);

    //cspace = obstacle.cspace(robot);

    //console.log(cspace);
  }
  p.draw = function() {
    p.background(220);

    obstacles.forEach(function(polygon) {
      //let cspace = polygon.cspace(robot);
      //cspace.show([52, 211, 116]);
      polygon.cspace(robot).show(p, [52, 211, 116]);
      polygon.show(p, [244, 92, 66]);

    });
    // cspace.show([52, 211, 116]);
    // obstacle.show([244, 92, 66]);
    // robot.show([63, 148, 234]);


    //robot.move(10, 5);
  }
};

new p5(sketch_minkowsky, 'canvas-minkowsky');
