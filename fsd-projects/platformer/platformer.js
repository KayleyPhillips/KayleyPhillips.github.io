$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(325, 650, 50, 20, "purple");
createPlatform(525, 520, 50, 20, "blue");
createPlatform(325, 400, 50, 20, "orange");
createPlatform(620, 300, 50, 20, "purple");
createPlatform(1025, 200, 50, 20, "purple");
createPlatform(1125, 300, 50, 20, "blue");
createPlatform(1025, 400, 50, 20, "orange");
createPlatform(825, 500, 50, 20, "green");
createPlatform (1225, 100, 50, 20, "green");
createPlatform(1350, 200, 50, 20, "gold");
createPlatform(700, 400, 20, 200, "pink");
createPlatform(1225, 149, 20, 200, "orange");
createBadPlatform(225, 200, 50, 20, "orange");
createBadPlatform(1225, 549, 50, 20, "pink");
createBadPlatform(525, 100, 50, 20, "blue");
createBadPlatform(100, 50, 50, 20, "purple")

    // TODO 3 - Create Collectables
createCollectable("minecraft", 825, 459);
createCollectable("minecraft", 625, 259);
createCollectable("minecraft", 1350, 159);
    
    // TODO 4 - Create Cannons
createCannon("left", 225, 30000, 1000, 1000);
createCannon("right", 500, 10000, 50, 50);
createCannon("bottom", 400, 5000, 50, 50);
createCannon("top", 1000, 5000, 50, 50);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
