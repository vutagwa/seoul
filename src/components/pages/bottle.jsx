import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Bottle() {
  const [collectedBottles, setCollectedBottles] = useState(0);
  const [rewardsPoints, setRewardsPoints] = useState(0);

  const collectBottle = () => {
    setCollectedBottles(collectedBottles + 1);
    setRewardsPoints(rewardsPoints + 1);
  };

  const redeemPoints = () => {
    if (rewardsPoints >= 10) {
      setRewardsPoints(rewardsPoints - 10);
      alert("Congratulations! You've redeemed 10 points for $1.");
    } else {
      alert('You need at least 10 points to redeem.');
    }
  };

  // Coordinates of the nearest station (example)
  const nearestStationCoords = { lat: 40.7128, lng: -74.0060 };

  return (
    <div className="container mt-5">
      <div className="d-flex flex-row">
        <div className="card text-center bottle-card mr-3">
          <div className="card-header">
            <h1 className="card-title">Rewards for Recycling</h1>
          </div>
          <div className="card-body">
            <p className="card-text">Collected Bottles: {collectedBottles}</p>
            <p className="card-text">Rewards Points: {rewardsPoints}</p>
            <button className="btn btn-primary mr-3" onClick={collectBottle}>Collect Bottle</button>
            <button className="btn btn-success" onClick={redeemPoints}>Redeem Points</button>
          </div>
        </div>
        <div className="map-container">
          <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
              mapContainerStyle={{ height: '400px', width: '600px' }}
              center={nearestStationCoords}
              zoom={14}
            >
              <Marker position={nearestStationCoords} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}

export default Bottle;
