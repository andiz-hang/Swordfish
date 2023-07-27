import React, { Component } from "react";

class Home extends Component {
  // state = {  }
  render() {
    return (
      <main className="MainPage">
        <h1>Welcome to the Site!</h1>

        <h2>Tips:</h2>
        <p>
          The app will search for companies listed on US exchanges by default.
          To search for companies listed on other exchanges, add the country
          code after the ticker symbol in the search bar
        </p>
        <h2>The supported countries are:</h2>
        <ul>
          <li>Canada (:CA)</li>
          <li>Australia (:AU)</li>
          <li>New Zealand (:NZ)</li>
          <li>Mexico (:MM)</li>
          <li>United Kingdom (:LN)</li>
        </ul>
        <p>Examples: "T:CA", "GFNORTEO:MM"</p>
      </main>
    );
  }
}

export default Home;
