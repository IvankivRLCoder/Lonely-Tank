$(document).ready(function(){

  //BODIA start
  var tank = $('.tank');
  var tankWheel = $('.tank-wheel');

  var MOVE_TOP = 38;
  var MOVE_RIGHT = 39;
  var MOVE_DOWN = 40;
  var MOVE_LEFT = 37;

  //tank.css({top:0, left:0, right:0, bottom: 0});

  $(document.body).keydown(function(key){

    switch (key.keyCode) {
      case MOVE_TOP: { tank.css({'top': parseInt(tank.css('top'))-7+'px', transform: 'rotate(0deg)'}); tankWheel.toggleClass('tank-wheel-run');  break; }
      case MOVE_RIGHT: { tank.css({'left': parseInt(tank.css('left'))+7+'px', transform: 'rotate(90deg)'}); tankWheel.toggleClass('tank-wheel-run'); break; }
      case MOVE_DOWN: { tank.css({'top': parseInt(tank.css('top'))+7+'px', transform: 'rotate(180deg)'}); tankWheel.toggleClass('tank-wheel-run'); break; }
      case MOVE_LEFT: { tank.css({'left': parseInt(tank.css('left'))-7+'px', transform: 'rotate(270deg)'}); tankWheel.toggleClass('tank-wheel-run'); break; }
    }



  });
  //BODIA end

  //ANDRIY start

  var lastLoop = new Date;
    function gameLoop() { 

      var thisLoop = new Date;
      var fps = 1000 / (thisLoop - lastLoop);

      lastLoop = thisLoop;
      $("#fps").text(Math.round(fps));

    }

    setInterval(gameLoop,12);

    //function getLoxation(tank) {

    //}
    var tank2 = document.getElementsByClassName("tank")["0"];
    var elem = true;
    var num = 1;
    var arrElem = [];

      while(elem) {

        var elem2 = document.getElementsByClassName("road-"+num)["0"];
        console.log(typeof elem2);

        if(elem2) {

          arrElem.push(elem2);

        }else {
          elem = false;
        };

        num++;

      };

      var arrLocation = arrElem.map(function(e) {

        return {"top": e.offsetTop, "left": e.offsetLeft, "width": e.offsetWidth, "height": e.offsetHeight };

      });
      
      var count = arrLocation.length;
      var topTank = parseInt(tank2.offsetTop);
      var leftTank = parseInt(tank2.offsetLeft);
      var leftDiv  = parseInt(arrLocation["2"].left)
      var topDiv = parseInt(arrLocation["2"].top)
      var heiDiv = parseInt(arrLocation["2"].height);
      var widDiv = parseInt(arrLocation["2"].width);
      console.log(topTank+": y : x: "+leftTank);
      console.log(topTank - topDiv);
      console.log(leftTank - (leftDiv + heiDiv));
      if((leftTank - leftDiv) > 0 && (topTank - topDiv) > 0) {
        console.log(true);
      }
      console.log(parseInt(arrLocation["2"].top)+" :y : x: "+parseInt(arrLocation["2"].left));
     // console.log(arrLocation["0"].height);
 

      var i = 0;
      while (i < count) {

        // var top = parseInt(arrLocation[i].top);
        // var topHeight = parseInt(arrLocation[i].heigth);
        
        // var left = parseInt(arrLocation[i].left);
        // var topWidth = parseInt(arrLocation[i].width);
        
        // if(topTank > top && topTank < topHeight) {
        //   console.log("top");
        // }
        
        // if(leftTank > left && leftTank < topWidth) {
        //   console.log("left");
        // }
        //console.log(leftTank +" : "+ left +" && "+ leftTank +" : "+ topWidth);
        //console.log(left > leftTank && (left+topWidth) < leftTank);
        //console.log(left +" : "+ leftTank +" && "+ (topWidth) +" : "+ leftTank);
        
        i++;
      };
  
  //ANDRIY end

  //ROMAN start

  //ROMAN end

  //NASTIA start

  //NASTIA end

  //IRA start

  //IRA end

});