function drawHouse() {
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var context = canvas.getContext("2d");
        context.strokeStyle = "black";
        context.fillStyle = "yellow";
        context.lineWidth = 3;
        context.fillRect(30, 50, 100, 100);
        context.strokeRect(30, 50, 100, 100);

        var tri = canvas.getContext("2d");
        tri.fillStyle = "red";
        tri.beginPath();
        tri.moveTo(15,50);
        tri.lineTo(140, 50);
        tri.lineTo(81, 10);
        tri.lineTo(15,50)
        tri.fill();
        tri.stroke();

        var door = canvas.getContext("2d");
        door.fillStyle = "brown";
        door.fillRect(55, 90, 45, 60);
        door.strokeRect(55, 90, 45, 60);

        var tree = canvas.getContext("2d");
        tree.fillStyle = "green";
        tree.beginPath();
        tree.moveTo(150, 150);
        tree.lineTo(190, 150);
        tree.lineTo(170, 40);
        tree.lineTo(150, 150);
        tree.fill();
        tree.stroke();

        // var t2 =canvas.getContext("2d");
        // t2.fillStyle = "green";
        // t2.beginPath();
        // t2.moveTo(140, 110);
        // t2.lineTo(199, 110);
        // t2.lineTo(170, 60);
        // t2.lineTo(140, 110);
        // t2.fill();
        // t2.stroke();
    }
}

function drawPattern() {
    var canvas = document.getElementById("myCanvas2");
    if (canvas.getContext) {
        var context = canvas.getContext("2d");
        context.strokeStyle = "purple";
        context.lineWidth = 3;

        var img = new Image();
        img.src = "../exercise/images/bg-bike.png";
        img.onload = function() {
            var pattern = context.createPattern(img, "repeat");
            context.fillStyle = pattern;
            context.fillRect(10, 10, 180, 180);
            context.strokeRect(10, 10, 180, 180);
        }
    }
}

drawHouse();
drawPattern();
