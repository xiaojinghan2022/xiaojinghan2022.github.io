var xhr = new XMLHttpRequest();
//var path_language;
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.response);
        if (response.country_code == "US") {
            window.location.replace("./en-US")
        };
        if (response.country_code == "CN") {
            window.location.replace("./zh-CN")
        };
        
        var Ip = document.getElementById("ip");
        var Region = document.getElementById("region");
        
        Ip.textContent = '当前IP为:'+response.ip+" ("+response.version+")";
        Region.textContent = 'IP属地为:'+response.country_name+" "+response.region;
        var path_language = "https://xiaojinghan2022.github.io/"+response.languages;
        window.path_language=path_language
        var lat= "&lat="+response.latitude
        var lng= "lng="+response.longitude
        try {
            xhr.open('GET',"https://res.abeim.cn/api-location_geocoder_address?"+lng+lat,true);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var response = JSON.parse(xhr.response);
                    var ipPlace = document.getElementById("place")
                    var ipAddress = response.data
                    if(response.code !== 200) {
                        ipPlace.textContent = 'Error: ' + response.msg;
                        return
                    };
                    if(ipAddress.city === undefined) {
                        ipPlace.textContent = '你可能在 ' + ipAddress.recommend
                        return
                    };
                    ipPlace.textContent = ' '+ipAddress.city+
                                    ' '+ipAddress.district+
                                    ' '+ipAddress.street+
                                    ' '+ipAddress.title

                }
            }
        } catch (err) {
            document.getElementById("place").textContent = '你在 ' +response.longitude+","+response.latitude
        };
    }
};
xhr.open('GET',"https://ipapi.co/json/",true);
xhr.send();