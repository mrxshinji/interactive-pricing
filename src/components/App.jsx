import React from 'react';
import '../css/App.css';
import Pricing from './Pricing'

function App() {
  return (
    <div className="container">
      <section id="title-text">
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial.</p>
        <p>No credit card required.</p>
      </section>
      <Pricing />
    </div>
  );
}

export default App;


