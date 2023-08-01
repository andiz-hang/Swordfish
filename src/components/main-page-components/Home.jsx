import React, { Component } from "react";

// NOTE: CSS styling for this component is found in MainPage.css
class Home extends Component {
  // state = {  }
  render() {
    return (
      <main className="MainPage">
        <h1>Welcome to Swordfish!</h1>
        <h3 className="home-description">
          Swordfish is a financial data visualization tool. It retrieves data
          from financial statements and presents it in aesthetically pleasing
          and intuitive charts.
        </h3>
        <h3 className="home-description">
          Swordfish will display data from annual financial statements going 20
          years back. That way, Swordfish allows you to find only the best and
          most proven, reliable companies on the market!
        </h3>
        <p>
          To begin, click on one of the companies listed in the Common Stocks
          list located on the left. Alternatively, you can also search for a
          stock by typing in the company's ticker symbol in the search box
          located at the top.
        </p>
        <p>
          Furthermore, please take the time to read the disclaimers located in
          the
          <button
            className="to-info-button"
            onClick={() => {
              this.props.onUpdatePage("Info", "");
            }}
          >
            Info Section.
          </button>
        </p>
      </main>
    );
  }
}

export default Home;
