


function setup() { 
  var cnv = createCanvas(900, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height)-40 ;
  cnv.position(x, y);
  background(220);
  strokeWeight(0.5);
  textAlign(CENTER,CENTER);
  stroke(0,0,0);
}

function draw() {
  if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0){
    if(mouseIsPressed){
      background(220);
      for(var c=1;c<j;c++){
        line(array2D[line2D[c][0]][0],array2D[line2D[c][0]][1],array2D[line2D[c][1]][0],array2D[line2D[c][1]][1])
      }
      for(var c=1;c<i;c++){
        fill(255);
        ellipse(array2D[c][0],array2D[c][1], 30, 30);
        fill(0);
        text(c,array2D[c][0],array2D[c][1]);  
      }

      line(fx, fy, mouseX, mouseY);
    }
  }

}

function mousePressed(){
if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0){

    fx=mouseX;
    fy=mouseY;
    var flag=true;
    for(var c=1;c<i;c++){

        if(overCircle(array2D[c][0],array2D[c][1],fx,fy, 15)) {
          current=c;
          console.log(array2D)
          flag=false;
        }    
    }
    if(flag){
      fill(255);
      ellipse(mouseX,mouseY, 30, 30);
      fill(0);
      text(i,mouseX,mouseY);
      g.addVertex(i);
      array2D[i] = [];
      array2D[i][0] = mouseX;
      array2D[i][1] = mouseY;
      current=i;
      i=i+1;
    }
  }
}

function mouseReleased() {
  if (mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0){
    background(220);
    for(var c=1;c<i;c++){
      if (overCircle(array2D[c][0],array2D[c][1],mouseX,mouseY, 15) && c!=current) {
        line2D[j] = [];
        line2D[j][0] =current;
        line2D[j][1]=c;
        g.addEdge(c, current);
        j++;
      }
    }
    for(var c=1;c<j;c++){
      line(array2D[line2D[c][0]][0],array2D[line2D[c][0]][1],array2D[line2D[c][1]][0],array2D[line2D[c][1]][1])
    }
    for(var c=1;c<i;c++){
        fill(255);
        ellipse(array2D[c][0],array2D[c][1], 30, 30);
        fill(0);
        text(c,array2D[c][0],array2D[c][1]);
    }

    g.printGraph();
  }

}






