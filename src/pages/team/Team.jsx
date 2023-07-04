import './style.css';
import BG from "../../components/BG";

export default function Team() {
  return (
    <div className="teamContainer">
      <div className="teamHeader">
        <h1>Our Team</h1>
      </div>
      <div className="teamMain">
        <BG>
          <h2>Teamleiter</h2>
        </BG>

        <BG dark="false">
          <img
            className="Olivia_Aschemann_foto"
            src="img/Olivia_Aschemann.jpg"
            alt="Olivia Aschemann"
          />
          <p>
            Name: Olivia Aschemann
            Role: Teamleader
            Email: olivia.aschemann@tum.de
          </p>
          <img
            className="Chenyu_Meng_foto"
            src="img/Chenyu_Meng.jpg"
            alt="Chenyu Meng"
          />
          <p>
            Name: Chenyu Meng
            Role: Teamleader
            Email: chenyu.meng@tum.de
          </p>
          <img
            className="Kai_Eberl_foto"
            src="img/Kai_Eberl.jpg"
            alt="Kai Eberl"
          />
          <p>
            Name: Kai Eberl
            Role: Teamleader
            Email: kai.eberl@tum.de
          </p>
        </BG>
      </div>
    </div>
  );
}
