import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '100%'
};


function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds({ lat: 60, lng: 50});
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const [coords, setCoOrds] = React.useState()
  React.useEffect(() => {
    setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => { setCoOrds(position) });
    }, 5000)
  }, [])

  React.useEffect(() => {
    console.log(coords)
  }, [coords])

  return isLoaded && coords &&
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: parseFloat(coords?.coords?.latitude), lng: parseFloat(coords?.coords?.longitude) }}
      zoom={0}
      onLoad={onLoad}
      onUnmount={onUnmount}
      width='100%'
      height='100%'
      options={{ mapTypeControl: false, zoom: 18, minZoom: 12, maxZoom: 20 }}
      
    >
      <Marker position={{ lat: parseFloat(coords?.coords?.latitude), lng: parseFloat(coords?.coords?.longitude) }} icon={{
            // path: google.maps.SymbolPath.CIRCLE,
            url: (require('../smile.png')),
            fillColor: '#EB00FF',
            scaledSize: {
              height: 50,
              width: 50
            },

        }}></Marker>
    </GoogleMap>
}

export default React.memo(Map)