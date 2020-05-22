function On(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            //cFunction(this);
        }
    }
    xhttp.open('GET','/on',true);
    xhttp.send()
}

function Off(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            //cFunction(this);
        }
    }
    xhttp.open('GET','/off',true);
    xhttp.send()
}

setInterval(()=>{
    // document.getElementById('camImage').src = `http://10.0.0.9/image/index?time=${Date.now()}`
    var imgURL = `http://10.0.0.9/image/index?time=${Date.now()}`
    console.log(imgURL)
    document.getElementById('image').style.backgroundImage = `url(${imgURL})`
    // console.log(Date.now())
},300)