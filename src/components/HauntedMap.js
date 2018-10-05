import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import axios from 'axios'

class HauntedMap extends Component {

    // Set Constructor and State
    constructor(props) {
        super(props);
        this.state = {
                venues: [],
            // query: '', // Do I need query?
            // venues: [], // Keep for now, may not need this
            map: '',
            infowindow: '',
            prevmarker: ''
        };
        // this.initMap = this.initMap.bind(this); // have this in initMap as well
        // this.openInfoWindow = this.openInfoWindow.bind(this);
        // this.closeInfoWindow = this.closeInfoWindow.bind(this);
    }

  componentDidMount() {
    scriptSrc()
    // this.getVenues()
    window.initMap = this.initMap

    /*
    FourSquare.search({
            near: "Pittsburgh, PA",
            query: "arts",
            limit: 10
          }).then(results => console.log(results));
    */      
    }
 
  initMap = () => {

    const google = window.google

    // create a map 
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.448506, lng: -80.002501},
      zoom: 12
    })
    
    // create an infowindow
    let infowindow = new google.maps.InfoWindow()
    
    
    
    // display dynamic markers
    this.state.venues.map(myVenue => {

    let contentString = `Venue Details: ${myVenue.venue.name}` 

    let marker = new google.maps.Marker({
      position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
      map: map,
      title: myVenue.venue.name,
      animation: window.google.maps.Animation.DROP,
      
    });

    // click on a marker
    marker.addListener('click', function() {
        infowindow.setContent(contentString)
        infowindow.open(map, marker,) 
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
            setTimeout(function(){ marker.setAnimation(null); }, 750);
    });
    this.setState({
        venues: this.venues
    });        
  });
    
}
/*
getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "F1BIU3KU3RZFBQKCLKJ2MX1AT2ZRZFYRUXTJUMFGA1YUS5ZF",
      client_secret: "N1HLP0MSWYJJATAS3CBQTTSZ2WLME5RB2TAUWHGE2UXZ5A1E",
      query: "arts", 
      near: "Pittsburgh, PA",
      //ll: "40.448506, -80.002501",
      limit: 10,
      v: "20181005"
    }
    // Run: npm install axios
    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState({
          venues: response.data.response.groups[0].items
        }, scriptSrc())
      })
      .catch(error => {
        console.log("Error: " + error)
      })
      
  }
  */
  render() { 
    return (
      <main>
        <div id="map"></div>
      </main>
    )
  }
}

function scriptSrc() {
    let index = window.document.getElementsByTagName("script")[0]
    let script = window.document.createElement("script")
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBj5AzHYC1kUPRnvaT6G6zsAONHSpKmoqQ&callback=initMap'
    script.async = true
    script.defer = true
    script.onerror = function() {
        document.write("Error: Google Maps can't be loaded");
    }
    index.parentNode.insertBefore(script, index)

}
    
export default HauntedMap