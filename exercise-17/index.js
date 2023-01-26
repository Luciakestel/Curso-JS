function initMap(){
    const posicionDenmark = {
        lat: 55.67594,
        lng: 12.56553
    }
    const posicionMálaga = {
        lat: 36.7201600,
        lng: -4.4203400
    }
    const posicionCroacia = {
        lat: 45.1667000,
        lng: 15.5000000
    }
    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 3,
        center: posicionCroacia
    })
    const markerDk = new google.maps.Marker({
        position: posicionDenmark,
        map,
        title: 'Cophenague'
    })
    const markerMlg = new google.maps.Marker({
        position: posicionMálaga,
        map,
        title: 'Málaga'
    })
    const markerCr = new google.maps.Marker({
        position: posicionCroacia,
        map,
        title: 'Croacia'
    })

    // marker.setPosition({lat, lng})

}
