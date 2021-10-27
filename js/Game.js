class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref(rootPath+"gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref(rootPath).update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();
   // console.log("Player count = "+playerCount);
   // console.log(windowWidth);
    form = new Form();
    form.display();

    if(choice=="two"){
      // if(pc==0){
      //   car1X = width/2-50;
      // }
      // else if(pc==1){
      //   car2X = width/2+50;
      // }
      car1 = createSprite( 485, height - 100, 20,20);
      car2 = createSprite(850, height - 100, 20,20);
      cars=[car1,car2];
    }
    else if(choice=="three"){
    //   if(pc==0){
    //  //   car1X = width/2-150;
    //     car1X = 485;
    //   }
    //   else if(pc==1){
    //   //  car2X = width/2;
    //     car2X = 670;
    //   }
    //   else if(pc==2){
    //     //car3X = width/2+150;
    //     car3X = 850;
    //   }
      car1 = createSprite(485, height - 100,20,20);
      car2 = createSprite(670, height - 100,20,20);
      car3 = createSprite(850, height - 100,20,20);
      cars=[car1,car2,car3];
    }
    else if(choice=="four"){
      // if(pc==0){
      //   car1X = width/2 - 250;
      // }
      // else if(pc==1){
      //   car2X = width/2 - 100;
      // }
      // else if(pc==2){
      //   car3X = width/2+100;
      // }
      // else if(pc==3){
      //   car4X = width/2 + 250;
      // }
      car1 = createSprite(445, height - 100,20,20);
      car2 = createSprite(580, height - 100,20,20);
      car3 = createSprite(740, height - 100,20,20);
      car4 = createSprite(890, height - 100,20,20);
      cars=[car1,car2,car3, car4];

    }
    // car1 = createSprite(width / 2 - 50, height - 100);
    // car1.addImage("car1", car1_img);
    // car1.scale = 0.07;

    // car2 = createSprite(width / 2 + 100, height - 100);
    // car2.addImage("car2", car2_img);
    // car2.scale = 0.07;

    // cars = [car1, car2];
  }

  handleElements() {
    form.hide();
   // form.titleImg.position(40, 50);
   // form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    player.getCarsAtEnd();

    if (allPlayers !== undefined) {
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      var index=0;
      //var x=175;
      var y;
      for(var plr in allPlayers){
        d.push([allPlayers[plr].distance, allPlayers[plr].name]);
     //   d[allPlayers[plr].distance]=allPlayers[plr].name
        index=index+1;
      //  x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        // cars[index-1].x = x;
        cars[index-1].position.y = y;
        if (index === player.index){
         // stroke(10);
          fill("yellow");
        text(player.name,cars[index - 1].position.x-20,cars[index - 1].position.y-50);
          //ellipse(cars[index - 1].position.x,y,60,60);
          // console.log(cars);
          // console.log(cars[index-1]);
          // console.log(index-1);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = y;

          
        }
      }
      console.log(d);
      /*
                  0           1           2             3
                0   1       0   1       0     1       0   1
      d=  [  [ 90, "a"],  [20, "b"],  [200,  "c"],  [70,  "d"]       ]

      */
      if(choice == "two"){
        if(d[0][0]>d[1][0]){
          text(1+" "+d[0][1]+" "+d[0][0],50,camera.position.y-100 );
          text(2+" "+d[1][1]+" "+d[1][0],50,camera.position.y-80 );
        }
        else{
          text(1+" "+d[1][1]+" "+d[1][0],50,camera.position.y-100 );
          text(2+" "+d[0][1]+" "+d[0][0],50,camera.position.y-80 );
        }
      }
      else if(choice == "three"){
        if(d[0][0]>d[1][0] && d[0][0]>d[2][0] ){
          text(1+" "+d[0][1]+" "+d[0][0],50,camera.position.y-100 );
          if(d[1][0]>d[2][0]){
            text(2+" "+d[1][1]+" "+d[1][0],50,camera.position.y-80 );
            text(3+" "+d[2][1]+" "+d[2][0],50,camera.position.y-60 );
          }
          else{
            text(2+" "+d[2][1]+" "+d[2][0],50,camera.position.y-80 );
            text(3+" "+d[1][1]+" "+d[1][0],50,camera.position.y-60 );
          }
        }
          ////////////////

        else if(d[1][0]>d[0][0] && d[1][0]>d[2][0] ){
          text(1+" "+d[1][1]+" "+d[1][0],50,camera.position.y-100 );
          if(d[0][0]>d[2][0]){
            text(2+" "+d[0][1]+" "+d[0][0],50,camera.position.y-80 );
            text(3+" "+d[2][1]+" "+d[2][0],50,camera.position.y-60 );
          }
          else{
            text(2+" "+d[2][1]+" "+d[2][0],50,camera.position.y-80 );
            text(3+" "+d[0][1]+" "+d[0][0],50,camera.position.y-60 );
          }
        }
            ///////////////
        else if(d[2][0]>d[0][0] && d[2][0]>d[1][0] ){
          text(1+" "+d[2][1]+" "+d[2][0],50,camera.position.y-100 );
          if(d[0][0]>d[1][0]){
            text(2+" "+d[0][1]+" "+d[0][0],50,camera.position.y-80 );
            text(3+" "+d[1][1]+" "+d[1][0],50,camera.position.y-60 );
          }
          else{
            text(2+" "+d[1][1]+" "+d[1][0],50,camera.position.y-80 );
            text(3+" "+d[0][1]+" "+d[0][0],50,camera.position.y-60 );
          }
        }

      }

      ///////////////////////////////////////
      d=[];

 //     d={};


      



      
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank +=1;
      Player.updateCarsAtEnd(player.rank)
    }
    drawSprites();
     // console.log(allPlayers);
      text(mouseX+", "+mouseY, mouseX, mouseY);
  }
  end(){
    console.log("Game Ended");
    console.log(player.rank);
    swal("Your Rank", player.rank);
    gameState=3;
  }
}
