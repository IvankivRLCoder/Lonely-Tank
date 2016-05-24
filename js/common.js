$(document).ready(function(){

  //BODIA start
  var tank = $('.tank');
  var tankWheel = $('.tank-wheel');

  var MOVE_TOP = 38;
  var MOVE_RIGHT = 39;
  var MOVE_DOWN = 40;
  var MOVE_LEFT = 37;

  tank.css({top:0, left:0, right:0, bottom: 0});

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

  //ANDRIY end

  //ROMAN start

  //ROMAN end

  //NASTIA start

  //NASTIA end

  //IRA start

  //IRA end

});