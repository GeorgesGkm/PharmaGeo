var mymap = L.map("mapid").setView([48.8608897, 2.320041], 14);

L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    {
        maxZoom: 18,
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
    }
).addTo(mymap);

var hotels;
var url = '/hotelsapi/'

fetch(url)
         .then(response => response.json())
         .then(data => hotels = data)
         .then(showhotels => showHotels())
         .then(centerhotel => centerHotel())

function showHotels() {
    hotels.forEach(room => {
        pop = L.popup({
            closeOnclick: true
        }).setContent('<img src=' + room.geo_image + 'style ="width: 150px">')

        coords = [room.coordX, room.coordY]
        marker = L.marker(coords).addTo(mymap).bindPopup(pop);


    })
};

roos = document.querySelectorAll('.room')

function centerHotel(){
    hotels.forEach((room, index) => {
        roos[index].addEventListener("mouseover", (event) =>{
            mymap.flyTo([room.coordX, room.coordY], 14)
        }
        )
    })
}
