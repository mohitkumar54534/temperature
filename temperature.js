function convert(){
    let fahrenheit=document.getElementById('fahrenheit').value;
    let celsius=document.getElementById('celsius').value;
    let kelvin=document.getElementById('kelvin').value;
    if(fahrenheit!=""){
        celsius=(parseFloat(fahrenheit)-32)/1.8;
        kelvin=(parseFloat(fahrenheit)-32)*(5/9)+273.15;
        document.getElementById('celsius').value = celsius.toFixed(2)+ "°C";
       // celsius=celsius.toFixed(2);
        document.getElementById('kelvin').value = kelvin.toFixed(2)+"K";
}

else if(celsius!=""){
     fahrenheit=(parseFloat(celsius)*1.8)+32;
        kelvin=(parseFloat(celsius)+273.15);
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2)+"°F";
        document.getElementById('kelvin').value = kelvin.toFixed(2)+"K";
}

else if(kelvin!=""){
    fahrenheit=(parseFloat(kelvin)-273.15)*1.8+32;
    celsius=(parseFloat(kelvin)-273.15);
    document.getElementById('fahrenheit').value=fahrenheit.toFixed(2)+"°F";
    document.getElementById('celsius').value=celsius.toFixed(2) +"°C";
}

}
function reset(){
    document.getElementById('celsius').value="";
    document.getElementById('fahrenheit').value="";
    document.getElementById('kelvin').value="";
}
