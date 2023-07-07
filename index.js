var xhr = new XMLHttpRequest();

xhr.open('GET',"https://ipapi.co/json/",false);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.response);
        if (response.country_code == "US") {
            window.location.replace("./US")
        };
        if (response.country_code == "CN") {
            window.location.replace("./CN")
        };
        
        var Ip = document.getElementById("ip");
        var Region = document.getElementById("region");
        
        Ip.textContent = '当前IP为:'+response.ip+" ("+response.version+")";
        Region.textContent = 'IP属地为:'+response.country_name+" "+response.region;
        var path_language = "https://xiaojinghan2022.github.io/"+response.language;
        console.log(path_language)
        var lat= "&lat="+response.latitude
        var lng= "lng="+response.longitude  
    };
    window.lat=lat;
    window.lng = lng;
};
console.log(lat);
console.log(lng);

xhr.open('GET',"http://res.abeim.cn/api-location_geocoder_address?"+lng+lat,false);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.response);
        var ipPlace = document.getElementById("place")
        ipPlace.textContent = ' '+response.city+
            ' '+response.district+
            ' '+response.street+
            ' '+response.title
    }
}