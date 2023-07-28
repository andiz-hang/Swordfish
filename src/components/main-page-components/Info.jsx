import React, { Component } from "react";

class Info extends Component {
  // state = {  }
  render() {
    return (
      <main className="MainPage">
        <h1>This is the Info Page</h1>

        <h1>Please read before proceeding!</h1>
        <ul>
          <li>Bank/Insurance Stocks</li>
          <li>Api Daily Limit</li>
          <li>Stock list refresh</li>
          <li>
            <p>
              The app will search for companies listed on US exchanges by
              default. To search for companies listed on other exchanges, add
              the country code after the ticker symbol in the search bar
            </p>
            <p>The supported countries are:</p>
            <ul>
              <li>Canada (:CA)</li>
              <li>Australia (:AU)</li>
              <li>New Zealand (:NZ)</li>
              <li>Mexico (:MM)</li>
              <li>United Kingdom (:LN)</li>
            </ul>
            <p>Examples: "T:CA", "GFNORTEO:MM"</p>
          </li>
        </ul>
      </main>
    );
  }
}

export default Info;
