var btnState = 0;

function turnOn(){
    btnState = 1;
}
function turnOff(){
    btnState = 0;
}

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

function repeat(){
    setInterval( function(){if(btnState){
        On();
    }},300)
}