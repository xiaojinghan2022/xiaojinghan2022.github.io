var xhr = new XMLHttpRequest();
var ipUrl = "https://ipapi.co/json/";

xhr.open('GET',ipUrl,true);
xhr.send();

    
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.response);
            
        if (response.region_code == "US") {
            window.location.replace("./en_US")
        };
        if (response.region_code == "CN") {
            window.location.replace("./zh_CN")
        };
            
        console.log(response);
        
        var Ip = document.getElementById("ip");
        var City = document.getElementById("city");
        
        Ip.textContent = '当前IP为:'+response.ip+" ("+response.version+")"
        City.textContent = 'IP属地为:'+response.country_name+" "+response.city
    }
}