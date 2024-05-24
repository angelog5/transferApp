import "../assets/css/Splash.css";

export default function Splash({ setPage }) {
  return (
    <div className="splash-container">
      <div className="splash-img-container">
        <img
          src="/macchinaGialla.png"
          alt="macchina gialla"
          width={1776}
          height={1060}
        />
      </div>
      <div className="splash-text-container">
        <div className="splash-header">
          <h1>Find ideal car for your next trip</h1>
        </div>
        <div className="splash-paragraph">
          <p>
            The point of using Lorem ipsum is that Readable content of a page
          </p>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setPage("booking")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
