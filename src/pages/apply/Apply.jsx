import FAQList from "../../components/faqList/FAQList";
import { flightPositions, drivePositions, generalPositions, faqs } from "./config";
import "./style.css";

function Apply() {
  const applicationsOpen = false;

  return (
    <div className="applyContainer">
      <div className="applyTitleContainer">
        <h1>Join our Team</h1>
        {applicationsOpen ? (
          <p>
            Build cool stuff with us!
            <br />
            Found something that you’re interested in?
            Then send us an e-mail with your motivation and your cv and we will
            get back to you within a few days.<br />
            Haven&apos;t found anything?
            Unsolicited applications are also welcome!
          </p>
        ) : (
          <p>
            Thank you for all your applications.
            Please come back end of September.
          </p>
        )};
      </div>
      <div className="applyPositions">
        <h2 className="positionsText">Open positions</h2>
        <h3 className="subtitle">Autonomous Flight</h3>
        <FAQList faqConfig={flightPositions} />
        <h3 className="subtitle">Autonomous Drive</h3>
        <FAQList faqConfig={drivePositions} />
        <h3 className="subtitle">General</h3>
        <FAQList faqConfig={generalPositions} />
      </div>
      <div className="applyFaq">
        <h2 className="faqText">FAQs</h2>
        <FAQList faqConfig={faqs} />
      </div>
    </div>
  );
}

export default Apply;
