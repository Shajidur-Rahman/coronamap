function updatemap() {
    fetch('/data.json')
        .then(Response => Response.json())
        .then(rsp => {
            console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                // marker 
                // Mark on the map
                cases = element.infected;
                if (cases>255){
                    color = "rgb(255, 0, 0)";
                }

                else{
                    color = `rgb(${cases}, 0, 0)`;
                }

                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                    // color: color
                }).setLngLat([longitude, latitude])
                    .addTo(map);
            });
        });
};
updatemap()