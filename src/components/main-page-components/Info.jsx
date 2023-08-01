import React, { Component } from "react";

// NOTE: CSS styling for this component is found in MainPage.css
class Info extends Component {
  // state = {  }
  render() {
    return (
      <main className="MainPage">
        <h1>Important Notes</h1>
        <ul>
          <li>
            <p>
              The app will search for companies listed on US exchanges by
              default. To search for companies listed on other exchanges, add
              the country code after the ticker symbol in the search bar.
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
          <li>
            Some companies will not have applicable data available. Notably,
            banking and insurance companies do not report profits.
          </li>
          <li>
            The Common Stocks list will be reset if the page is refreshed.
          </li>
          <li>
            The API being used has a limited amount of calls available per day.
            If there is no data showing, it may be because the daily limit has
            been reached.
          </li>
        </ul>
      </main>
    );
  }
}

export default Info;
