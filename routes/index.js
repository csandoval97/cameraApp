var express = require('express');
var router = express.Router();
var gpiop = require('rpi-gpio').promise;
var ledState = 0;
var ledSwitch = 0
//if(ledSwitch off and ledState off) //do nothing
//elseif (ledSw off and ledSt on) turn off led
//elif ledSw on and ledStat off - turn on led
//else do nothing

function On(){
  gpiop.setup(7, gpiop.DIR_OUT)
  .then(() => {
      return gpiop.write(7, true)
  })
  .catch((err) => {
    console.log('Error: ', err.toString())
  })
}

function Off(){
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
  //setInterval(function(){checkLock()},500);
  res.render('index', { title: 'Express' });
});

router.get('/on',(req,res)=>{
  On()
  res.render('index', { title: 'Express' });
})


router.get('/off',(req,res)=>{
  Off()
  res.render('index', { title: 'Express' });
})

router.get('/opendoor',(req,res)=>{
  On()
  setTimeout(Off,3000)
  res.render('index', { title: 'Express' });
})

module.exports = router;
