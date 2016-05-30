(function () {
  'use strict';
  var tank = document.getElementById('tank');
  var gameWindow = document.getElementById('game-window');
  tank.style.left = '242px';
  tank.style.top = '82px';
  // Sound
  soundOn();
  // FPS
  showFps();
  // On moving
  document.body.onkeydown = function (e) {
    var cordWindow = gameWindow.getBoundingClientRect();
    var cordTank = tank.getBoundingClientRect();
    // Window cordinates
    var cordWindowLeft = cordWindow.left;
    var cordWindowRight = cordWindow.right;
    var cordWindowTop = cordWindow.top;
    var cordWindowBottom = cordWindow.bottom;
    // Tank cordinates
    var cordTankLeft = cordTank.left;
    var cordTankRight = cordTank.right;
    var cordTankTop = cordTank.top;
    var cordTankBottom = cordTank.bottom;
    // Keys
    var KEYCODE_LEFT = 37;
    var KEYCODE_TOP = 38;
    var KEYCODE_RIGHT = 39;
    var KEYCODE_DOWN = 40;
    var KEYCODE_FIRE = 32;
    // Map
    var map = {
      block1: document.getElementById('block1'),
      block2: document.getElementById('block2'),
      block3: document.getElementById('block3'),
      block4: document.getElementById('block4'),
      block5: document.getElementById('block5'),
      block6: document.getElementById('block6'),
      block7: document.getElementById('block7'),
      block8: document.getElementById('block8'),
      block9: document.getElementById('block9'),
      block1Reverse: document.getElementById('block1Reverse'),
      block2Reverse: document.getElementById('block2Reverse'),
      block3Reverse: document.getElementById('block3Reverse'),
      block4Reverse: document.getElementById('block4Reverse'),
      block5Reverse: document.getElementById('block5Reverse'),
      block6Reverse: document.getElementById('block6Reverse'),
      block7Reverse: document.getElementById('block7Reverse'),
      block10: document.getElementById('block10'),
      block11: document.getElementById('block11')
    };
    // Check map
    var topYes = checkCanMove(map).top;
    var leftYes = checkCanMove(map).left;
    var downYes = checkCanMove(map).down;
    var rightYes = checkCanMove(map).right;
    // Check if can move tank
    function checkCanMove(map) {
      var top = true;
      var left = true;
      var down = true;
      var right = true;
      for (var block in map) {
        if (checkMoving(map[block]).top === false) {
          top = false;
        }
        if (checkMoving(map[block]).down === false) {
          down = false;
        }
        if (checkMoving(map[block]).left === false) {
          left = false;
        }
        if (checkMoving(map[block]).right === false) {
          right = false;
        }
      }
      return {
        top: top,
        down: down,
        left: left,
        right: right
      };
      // Return object
      function checkMoving(block) {
        var canMoveTop = true;
        var canMoveDown = true;
        var canMoveLeft = true;
        var canMoveRight = true;
        var cordBlock = block.getBoundingClientRect();
        if (cordBlock.bottom === cordTankTop && cordBlock.left - 36 < cordTankLeft && cordBlock.right + 36 > cordTankRight) {
          canMoveTop = false;
        }
        if (cordBlock.top === cordTankBottom && cordBlock.left - 36 < cordTankLeft && cordBlock.right + 36 > cordTankRight) {
          canMoveDown = false;
        }
        if (cordBlock.left === cordTankRight && cordBlock.bottom > cordTankTop && cordBlock.top < cordTankBottom) {
          canMoveRight = false;
        }
        if (cordBlock.right === cordTankLeft && cordBlock.bottom > cordTankTop && cordBlock.top < cordTankBottom) {
          canMoveLeft = false;
        }
        return {
          top: canMoveTop,
          down: canMoveDown,
          left: canMoveLeft,
          right: canMoveRight
        };
      }
    }
    // Move buttons
    if (e.keyCode == KEYCODE_LEFT && leftYes) {
      if (cordTankLeft - 2 > cordWindowLeft) {
        tank.style.left = (parseInt(tank.style.left) - 2) + 'px';
        tank.className = 'tankLeft';
        tank.classList.add('tank-wheel-run');
      } else {
        tank.style.left = (parseInt(tank.style.left) + cordWindowLeft - cordTankLeft) + 'px';
        tank.className = 'tankLeft';
        tank.classList.add('tank-wheel-run');
      }
    } else if (e.keyCode == KEYCODE_RIGHT && rightYes) {
      if (cordTankRight + 2 < cordWindowRight) {
        tank.style.left = (parseInt(tank.style.left) + 2) + 'px';
        tank.className = 'tankRight';
        tank.classList.add('tank-wheel-run');
      } else {
        tank.style.left = (parseInt(tank.style.left) + cordWindowRight - cordTankRight) + 'px';
        tank.className = 'tankRight';
        tank.classList.add('tank-wheel-run');
      }
    } else if (e.keyCode == KEYCODE_TOP && topYes) {
      if (cordTankTop - 2 > cordWindowTop) {
        tank.style.top = (parseInt(tank.style.top) - 2) + 'px';
        tank.className = 'tankTop';
        tank.classList.add('tank-wheel-run');
      } else {
        tank.style.top = (parseInt(tank.style.top) + cordWindowTop - cordTankTop) + 'px';
        tank.className = 'tankTop';
        tank.classList.add('tank-wheel-run');
      }
    } else if (e.keyCode == KEYCODE_DOWN && downYes) {
      if (cordTankBottom + 2 < cordWindowBottom) {
        tank.style.top = (parseInt(tank.style.top) + 2) + 'px';
        tank.className = 'tankDown';
        tank.classList.add('tank-wheel-run');
      } else {
        tank.style.top = (parseInt(tank.style.top) + cordWindowBottom - cordTankBottom) + 'px';
        tank.className = 'tankDown';
        tank.classList.add('tank-wheel-run');
      }
    }
  };
  // Up key action
  document.body.onkeyup = function () {
    tank.classList.remove('tank-wheel-run');
  };
  // FPS function
  function showFps() {
    var lastLoop = new Date();
    function gameLoop() {
      var thisLoop = new Date();
      var fps = 1000 / (thisLoop - lastLoop);
      lastLoop = thisLoop;
      $('#fps-block').text('fps: ' + Math.round(fps));
    }
    setInterval(gameLoop, 12);
  }
  // Sound function
  function soundOn() {
    var snd = new Audio("sounds/start.mp3");
    snd.play();
    snd.volume = 0.8;
    setTimeout(function () {
      var sound = new Audio('sounds/loop.wav');
      sound.volume = 0.8;
      sound.loop = true;
      sound.play();
    }, 7000);
  }
})();