import React, { useState } from 'react';

function RewardsApp() {
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

  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-header">
          <h1>Rewards for Recycling</h1>
        </div>
        <div className="card-body">
          <p className="card-text">Collected Bottles: {collectedBottles}</p>
          <p className="card-text">Rewards Points: {rewardsPoints}</p>
          <button className="btn btn-primary mr-3" onClick={collectBottle}>Collect Bottle</button>
          <button className="btn btn-success" onClick={redeemPoints}>Redeem Points</button>
        </div>
      </div>
    </div>
  );
}

export default RewardsApp;
