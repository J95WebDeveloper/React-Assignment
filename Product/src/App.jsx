import "./App.css";
import headphone from "./assets/phone.jpg";

function App() {
  return (
    <div className="product">
      <div className="product-body">
        <img src={headphone} className="img" />
        <h6>Headphones | High Base Clear Sound</h6>
        <p>
          The flagship-level battery life for the all-new OnePlus Nord Buds 2r
          delivers up to 38 hrs of non-stop music on a single charge.
        </p>
        <p>$12</p>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default App;
