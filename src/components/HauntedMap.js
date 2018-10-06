import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import axios from 'axios'

class HauntedMap extends Component {

    // Set Constructor and State
    constructor(props) {
        super(props);
        this.state = {
                haunts: [
                  {name: "Green Man's Tunnel", location: {lat: 40.272873, lng:  -79.969088}},
                  {name: "The House The Devil Built", location: {lat: 40.449524, lng: -80.020125}},
                  {name: "13 Bends", location: {lat: 40.5426195, lng: -79.864586}},
                  {name: "Broughton School", location: {lat: 40.325901, lng: -80.003950}},
                  {name: "Frick Mansion", location: {lat: 40.4474811, lng: -79.903945}},
                  {name: "Dead Man's Hollow", location: {lat: 40.3207147, lng: -79.859266}},
                  {name: "The Early American Room", location: {lat: 40.4442526, lng: -79.9554277 }}, 
                  {name: "The Pittsburgh Playhouse", location: {lat: 40.4363853, lng: -79.9649387}},
                  {name: "Carnegie Library of Homestead", location: {lat: 40.407014, lng: -79.9051367}},
                  {name: "Chatham University", location: {lat: 40.4482193, lng: -79.9264512}},
                  {name: "Allegheny County Jail", location: {lat: 40.4349535, lng: -80.0019346}},
                  {name: "Omni William Penn Hotel", location: {lat: 40.440719, lng: -79.999033}},
                  {name: "Demon House of Brownsville Road", location: {lat: 40.376181, lng: -79.9780654}}
                ],
            markers: [],
            // query: '', // Do I need query?
            // venues: [], // Keep for now, may not need this
            // map: '',
            // infowindow: '',
            //prevmarker: ''
        };
        // this.initMap = this.initMap.bind(this); // have this in initMap as well
        // this.openInfoWindow = this.openInfoWindow.bind(this);
        // this.closeInfoWindow = this.closeInfoWindow.bind(this);
    }

  componentDidMount() {
    scriptSrc()
    // this.getVenues()
    window.initMap = this.initMap
    
    }
 
  initMap = () => {

    const google = window.google
    const styles = [{"featureType":"all","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#000000"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#454a4e"},{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"simplified"},{"color":"#1b1d1e"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#db611d"},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#1b1d1e"},{"lightness":"-2"},{"gamma":"1"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#1b1d1e"},{"lightness":"-2"},{"gamma":"1"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#1b1d1e"},{"lightness":"5"},{"gamma":"1"},{"weight":"0.20"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1b1d1e"},{"lightness":29},{"weight":0.2},{"gamma":"1"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#1b1d1e"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#1b1d1e"},{"lightness":"12"},{"gamma":"1"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#1b1d1e"},{"lightness":"3"},{"gamma":"1"}]}]

    // create a map 
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.448506, lng: -80.002501},
      zoom: 12,
      styles: styles,
      mapTypeId: 'terrain' 
    });

    this.setState({
      'map': map
    })

    this.state.haunts.forEach((location, ind) => {
      const marker = new google.maps.Marker({
          position: {lat: location.location.lat, lng: location.location.lng},
          map: map,
      })
    })
    // let markerImage = new google.maps.MarkerImage(Map_marker_icon_-Nicholas_Mollet_-_Ghost_-_Events_-_Dark.png)
    


    // add markers
    // let markers = this.state.haunts.map(haunt => 
       
  }

  

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