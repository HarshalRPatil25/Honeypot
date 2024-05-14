import React, { useEffect } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import loadScript from "load-script";

function TokenDetailHistory() {
  const location = useLocation();

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyBlVLASeYCNLF3Meu0Xn2iU4FcTNUo4iPA&callback=initMap`,
      { async: true },
      (error, script) => {
        if (error) {
          console.error("Error loading Google Maps API script:", error);
        } else {
          window.initMap = () => {
            const myLatLng = {
              lat: parseFloat(location.state.latitude),
              lng: parseFloat(location.state.longitude),
            };

            const map = new window.google.maps.Map(
              document.getElementById("map"),
              {
                zoom: 15,
                center: myLatLng,
              }
            );

            new window.google.maps.Marker({
              position: myLatLng,
              map: map,
              title: "Attacker's Location",
            });
          };
        }
      }
    );

    return () => {
      delete window.initMap;
    };
  }, [location.state]);

  if (!location.state) {
    return <div> No data available </div>;
  }

  return (
    <div>
      <Header />
      <div className="token-history">
        <div className="token-history-detail-title">
          <h1> Token Detail History </h1>{" "}
        </div>{" "}
        <div className="token-history-details">
          <div className="profile-p1">
            <div className="profile-p1-header">
              <h5> Location Information </h5>{" "}
            </div>{" "}
            <div className="profile-p1-menu">
              {" "}
              <div className="profile-p1-com">
                <div className="com-title"> City: </div>{" "}
                <div className="com-ans"> {location.state.city} </div>{" "}
              </div>{" "}
              <div className="profile-p1-com">
                <div className="com-title"> Country: </div>{" "}
                <div className="com-ans"> {location.state.country} </div>{" "}
              </div>{" "}
              <div className="profile-p1-com">
                <div className="com-title"> Token Type: </div>{" "}
                <div className="com-ans"> {location.state.type} </div>{" "}
              </div>{" "}
              <div className="profile-p1-com">
                <div className="com-title">VPN Detected:</div>
                <div
                  className="com-ans"
                  style={{
                    color: location.state.vpn === "No" ? "black":"red",
                  }}
                >
                  {location.state.vpn}
                </div>
              </div>{" "}
              <div className="profile-p1-com">
                <div className="com-title"> Ip Address: </div>{" "}
                <div className="com-ans"> {location.state.ip} </div>{" "}
              </div>{" "}
              <div className="profile-p1-com">
                <div className="com-title"> Latitude: </div>{" "}
                <div className="com-ans"> {location.state.latitude} </div>{" "}
              </div>{" "}
              <div className="profile-p1-com">
                <div className="com-title"> Longitude: </div>{" "}
                <div className="com-ans"> {location.state.longitude} </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="vertical-line"> </div>{" "}
          <div className="profile-p1">
            <div className="profile-p1-header">
              <h5> Attacker 's Location</h5>{" "}
            </div>{" "}
            <div
              id="map"
              style={{ height: "400px", width: "600px", marginTop: "20px" }}
            >
              {" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default TokenDetailHistory;
