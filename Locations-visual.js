import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class LocationsVisual extends React.Component {
  render() {
    return (
      <div className="pageBody">
        <div className="pageTitle">{"Locations"}</div>
        <div id="locations">
          <div className="flavor">
            <div className="flavorTitle">{"Cincinnati, Ohio"}</div>
            <div className="flavorDesc">
              {"Address: 345 Calhoun St."}
              <br />
              {"Phone: 513-475-9999"}
              <br />
              {"Hours of Operation: 10:30AM - 3:30AM"}
            </div>
          </div>
          <hr />
          <div className="flavor">
            <div className="flavorTitle">{"Indianopolis, Indiana"}</div>
            <div className="flavorDesc">
              {"Address: 910 W 10th St. #12"}
              <br />
              {"Phone: 317-672-7777"}
              <br />
              {"Hours of Operation: 10:30AM - 3:00AM"}
            </div>
          </div>
          <hr />
          <div className="flavor">
            <div className="flavorTitle">{"Whitewater, Wisconsin"}</div>
            <div className="flavorDesc">
              {"Address: 325 W Center St."}
              <br />
              {"Phone: 262-473-4343"}
              <br />
              {"Hours of Operation: 10:30AM - 3:00AM"}
            </div>
          </div>
        </div>
        <div id="map">
          <Map
            google={this.props.google}
            zoom={8}
            initialCenter={{ lat: 39.1284, lng: 84.5203 }}
          >
            <Marker position={{ lat: 42.8336, lng: -88.7323 }} />
            <Marker position={{ lat: 39.1284, lng: 84.5203 }} />
            <Marker position={{ lat: 39.7811, lng: 86.1741 }} />
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDTE0EntZdpqDMP-1Ey5bA-yMbCSfB4q6w",
})(LocationsVisual);
