import "./App.css";
import thanhheadshot2 from "./thanhheadshot2.png";

function App() {
  return (
    <div className="App">
      <div className="profile">
        <div className="headshot">
          <img
            src={thanhheadshot2}
            alt="Thanh Duong's Profile"
            className="headshot"
          />
        </div>
        <h1>Thanh Duong</h1>
        <p>Financial Solution</p>
        <button type="button" class="btn btn-primary">
          Learn More About Thanh
        </button>
        <div className="who-we-are">
          <h5>Why Choose Experior Financial Group?</h5>
          <iframe
            className="video"
            src="https://www.youtube.com/embed/Rwr-_3s_0es"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <button type="button" class="btn btn-primary more">
            Explore More
          </button>
        </div>

        <button type="button" class="btn btn-primary contact">
          Exchange Contact
        </button>
      </div>
    </div>
  );
}

export default App;
