import FAQList from "../../components/faqList/FAQList";
import { positionsConfig, faqs } from "./config";
import "./style.css";
import PositionsList from "../../components/positionsList/PositionsList";

function Apply() {
  return (
    <div className="applyContainer">
      <div className="applyTitleContainer">
        <h1>Join our Team</h1>
        <p>
          Build cool stuff with us!
          <br />
          Found something that you’re interested in?
          Then send us an e-mail with your motivation and your cv and we will
          get back to you within a few days.<br />
          Haven&apos;t found anything? Let us know what you miss.
          Unsolicited applications are also welcome!
        </p>
      </div>
      <div className="applyPositions">
        <h2 className="positionsText">Open positions</h2>
        <PositionsList positions={positionsConfig} />
      </div>
      <div className="applyFaq">
        <h2 className="faqText">FAQ</h2>
        <FAQList faqConfig={faqs} />
      </div>
    </div>
  );
}

export default Apply;
