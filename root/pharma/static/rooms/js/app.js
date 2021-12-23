var roomAddress = document.querySelector('#address')

var addresses = document.querySelector('#addresses')

var address = document.querySelector('#id_address')
var coordX  = document.querySelector('#id_coordX')
var coordY  = document.querySelector('#id_coordY')

function showAddresses(){
    addresses.innerHTML = ""
    if(addressData.length > 0){
        addressData.forEach(address =>{
            addressName = address.display_name.replace("'", " ")
            addresses.innerHTML += "<div class='results' onclick = 'selectAddress("
                                + address.lat + "," + address.lon + "," + '"'+ addressName +'"' +")'>"
                                + address.display_name + "</div>"
        });
    }
    
}

function selectAddress(x,y,adr){
    address.value = adr
    coordX.value = x
    coordY.value = y
    mymap.flyTo([x,y], 16)
    marker.closePopup()
    marker.setLatLng([x,y])
    marker.closePopup()
}

function findAddresses(){
    url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + roomAddress.value
    fetch(url)
            .then(response => response.json())
            .then(data => addressData = data)
            .then(showAddress => showAddresses())
}

var mymap = L.map('mapid').setView([48.8588897, 2.3200410], 12)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

var marker = L.marker([48.8588897, 2.3200410]).addTo(mymap)
