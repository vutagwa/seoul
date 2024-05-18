// Bottle.js
import React, { useState, useEffect } from 'react';
import Login from './lojin';
import Register from './register';

function Bottle() {
  const [collectedBottles, setCollectedBottles] = useState(0);
  const [rewardsPoints, setRewardsPoints] = useState(0);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/user', {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        setCollectedBottles(data.user.collectedBottles);
        setRewardsPoints(data.user.rewardsPoints);
        setIsLoggedIn(true);
      } else {
        throw new Error('Failed to fetch user data');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to fetch user data. Please try again.'); // Display an error message to the user
    }
  };

  const handleLogin = (token) => {
    fetchUserData();
  };

  const handleRegister = (token) => {
    fetchUserData();
  };

  const collectBottle = async () => {
    try {
      const response = await fetch('/api/collectBottle', {
        method: 'POST',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to collect bottle');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to collect bottle. Please try again.'); // Display an error message to the user
    }
  };

  const redeemPoints = async () => {
    try {
      const response = await fetch('/api/redeemPoints', {
        method: 'POST',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to redeem points');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to redeem points. Please try again.'); // Display an error message to the user
    }
  };

  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-header">
          <h1>Rewards for Recycling</h1>
        </div>
        <div className="card-body">
          {isLoggedIn ? (
            <div>
              <p className="card-text">Welcome, {user && user.username}!</p>
              <p className="card-text">Collected Bottles: {collectedBottles}</p>
              <p className="card-text">Rewards Points: {rewardsPoints}</p>
              <button className="btn btn-primary mr-3" onClick={collectBottle}>Collect Bottle</button>
              <button className="btn btn-success" onClick={redeemPoints}>Redeem Points</button>
            </div>
          ) : (
            <>
              <Login onLogin={handleLogin} />
              <Register onRegister={handleRegister} />
            </>
          )}
          <div id="map" style={{ height: '400px', marginTop: '20px' }}></div>
        </div>
      </div>
    </div>
  );
}

export default Bottle;
