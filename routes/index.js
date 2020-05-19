var express = require('express');
var router = express.Router();
var gpiop = require('rpi-gpio').promise;
var ledState = 0;
var ledSwitch = 0
//if(ledSwitch off and ledState off) //do nothing
//elseif (ledSw off and ledSt on) turn off led
//elif ledSw on and ledStat off - turn on led
//else do nothing

function checkLock(){
  if(ledSwitch == ledState){
    ledSwitch=0
  }
  else if(ledSwitch && !ledState){
    ledState=1
    turnOn();
  }
  else{
    ledState=0;
    turnOff();
  }
  return;
}
function turnOn(){
  gpiop.setup(7, gpiop.DIR_OUT)
  .then(() => {
      return gpiop.write(7, true)
  })
  .catch((err) => {
    console.log('Error: ', err.toString())
  })
}

function turnOff(){
  gpiop.setup(7, gpiop.DIR_OUT)
  .then(() => {
      return gpiop.write(7, false)
  })
  .catch((err) => {
    console.log('Error: ', err.toString())
  })
}

/* GET home page. */
router.get('/', function(req, res, next) {
  setInterval(function(){checkLock()},500);
  res.render('index', { title: 'Express' });
});

router.get('/on',(req,res)=>{
  ledSwitch=1

  res.render('index', { title: 'Express' });
})


router.get('/off',(req,res)=>{
  ledSwitch=0

  res.render('index', { title: 'Express' });
})

module.exports = router;
