(function(exports) {
  function testCircleRadius() {
    var circle = new Circle();

    if (circle.radius !== 10) {
      throw new Error("Circle size is not 10");
    }
  };

  testCircleRadius();
})(this)
