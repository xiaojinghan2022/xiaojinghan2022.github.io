var xhr = new XMLHttpRequest();
var ipUrl = "https://ipapi.co/json/";

xhr.open('GET',ipUrl,true);
xhr.send();

    
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.response);
            
        if (response.region_code == "US") {
            window.location.replace("https://google.com/")
        };
        if (response.region_code == "CA") {
            window.location.replace("https://google.ca/")
        };
            
        console.log(response);
        
        var Ip = document.getElementById("ip");
        
        Ip.textContent = '当前IP为:'+response.ip+" ("+response.version+")"
        console.log('你的'+response.version+'地址为:'+response.ip)
        console.log('IP位于：'+response.country_name+" "+response.city)
    }
}