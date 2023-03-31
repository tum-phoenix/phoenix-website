import { flightPositions, drivePositions, generalPositions, faqs } from "./config";
import "./style.css";
import FAQList from "../../components/faqList/FAQList";

function Apply() {
  return (
    <div className="applyContainer">
      <div className="applytitleText">
        <h1>Join us</h1>
        <p>
          Build cool stuff with us!
          <br />
          Found something that you’re interested in?
          Then fill out this form and we will get back to you within a few days.
          <br />
          Haven&apos;t found anything? Let us know. Other applications are also welcome!
        </p>
      </div>
      <h2 className="positionsText">Open positions</h2>
      <h3>Autonomous Flight</h3>
      <FAQList faqs={flightPositions} />
      <h3>Autonomous Drive</h3>
      <FAQList faqs={drivePositions} />
      <h3>General</h3>
      <FAQList faqs={generalPositions} />
      <h2 className="faqText">FAQ</h2>
      <FAQList faqs={faqs} />
    </div>
  );
}

export default Apply;
