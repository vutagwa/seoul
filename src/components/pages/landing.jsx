import React from 'react';

function Land() {
  return (
    <div className="App">
      <header className="header">
        <h1>R-Gamers</h1>
        <p>An eco-friendly solution for waste management</p>
      </header>

      <main>
        <section className="features-section">
          <h2>Why Recycle Now?</h2>
          <div className="feature">
            <img src="src\components\assets\recy.jpg" alt="Feature 1" />
            <h3>Reduce Waste</h3>
            <p>Contribute to a cleaner environment by reducing waste through recycling.</p>
          </div>
          <div className="feature">
            <img src="src\components\assets\earn.png" alt="Feature 2" />
            <h3>Earn Rewards</h3>
            <p>Get rewarded for your recycling efforts with discounts and coupons from partnering businesses.</p>
          </div>
          <div className="feature">
            <img src="src\components\assets\track.png" alt="Feature 3" />
            <h3>Track Progress</h3>
            <p>Track your recycling progress and see your positive impact on the environment.</p>
          </div>
        </section>

        <section className="how-it-works-section">
          <h2>How It Works</h2>
          <ol>
            <li>Sign up for an account</li>
            <li>Collect recyclable materials</li>
            <li>Drop off materials at designated recycling centers</li>
            <li>Earn rewards and track your progress</li>
          </ol>
        </section>

        <section className="contact-section">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 faith and marion</p>
      </footer>
    </div>
  );
}

export default Land;
