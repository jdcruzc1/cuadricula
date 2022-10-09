function setup() {
    createCanvas(300, 300);
    background (100,100,255);
    let grosor = 1;

    for(let i = 0; i < width; i = i + 10){ 
    stroke(0, 0, 0);
    strokeWeight(grosor);
   line (i, 0, i, 300);

   
   strokeWeight(1);
   stroke(0, 0, 0);
   line (0, i, 300, i);
   grosor ++;
   console.log(grosor);
console.log(i);
    }

  
  }
  
  function draw() {
    
  
    }
    
  
 