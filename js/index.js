var tempK;

$("#inputBox").keyup(function(event){
    if(event.keyCode == 13){
        $("#getIt").click();
    }
});

function getData(){
  var cityNew = document.getElementById("inputBox").value;
  console.log(cityNew);
    $('#city').html(cityNew);
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + cityNew + "&APPID=00a54557a7a4abbeb682923ceccefcd3").done(function(json){
    console.log(json);
    tempK = json.main.temp;
    var temp1 = tempK - 273.15;
    var temperature = Math.round(temp1);
    $('#data').html(temperature + " °C");
  })
.fail(function(json){
 var errorMessage = JSON.parse(json.responseText);
   $('#city').html(errorMessage.message);
   $('#data').html("NaN °C");
    tempK = "NaN";
    console.log("API request fail");
   //alert(json.responseText);
  });
 }

function getTempC(){
    var newTempC = tempK - 273.15;
    var temperature = Math.round(newTempC);
    $('#data').html(temperature + " °C");
}

function getTempF(){
    var newTempF = (tempK*(9/5)) - 459.67;
    var temperature = Math.round(newTempF);
    $('#data').html(temperature + " °F");
}