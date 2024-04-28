import earCopy from "../assets/ear-copy.svg";
import eye from "../assets/eye.svg";
import text from "../assets/text.svg";
import "../style/Accessibility.css";

export const Accessibility = () => {
  return (
    <section className="accessibility-section">
      <div className="return-container">
        <p className="return-text">Return</p>
      </div>
      <div className="title-container">
        <h2 className="accessibility-title">Accessibility Menu</h2>
      </div>
      <ul className="accessilibity-option">
        <li className="acc-option-btn">
          <button className="acc-option-btn">
            <img
              className="acc-option-icon"
              src={earCopy}
              alt="Read out loud"
            />
            Read out loud
          </button>
        </li>
        <li className="acc-option-btn">
          <button className="acc-option-btn">
            <img className="acc-option-icon" src={eye} alt="Read out loud" />
            High Contrast
          </button>
        </li>
        <li className="acc-option-btn">
          <button className="acc-option-btn">
            <img className="acc-option-icon" src={text} alt="Read out loud" />
            Large Text
          </button>
        </li>
      </ul>
    </section>
  );
};
