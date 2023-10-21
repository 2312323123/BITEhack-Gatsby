import * as React from "react";
import SpaceHeader from "../commonComponents/SpaceHeader";
import * as styles from "../../styles/sponsors.module.css";

import IBM from "../../images/partners/IBM.svg";
import aptiv from "../../images/partners/aptiv.svg";
import avsystem from "../../images/partners/avsystem.svg";
import Pega from "../../images/partners/Pega.svg";
import Sabre from "../../images/partners/Sabre.svg";
import Unit8 from "../../images/partners/Unit8.svg";

export default function Sponsors() {
  return (
    <>
      <SpaceHeader header="PARTNER GŁÓWNY" />
      <a
        href="https://www.ibm.com/pl-pl"
        target="_blank"
        className={styles["main_partner_container"]}
      >
        <img
          src={IBM}
          className={styles["main_sponsor_image"]}
          alt="main partner"
        />
      </a>
      <div style={{ height: "2.5vh" }}></div>
      <SpaceHeader header="PARTNERZY" />
      <div className={styles["sponsors"]}>
        <a href="https://www.aptiv.com/pl/aptiv-w-polsce" target="_blank">
          <img src={aptiv} className={styles["sponsor_image"]} alt="sponsor" />
        </a>
        <a href="https://www.avsystem.com/" target="_blank">
          <img
            src={avsystem}
            className={styles["sponsor_image"]}
            alt="sponsor"
          />
        </a>
        <a
          href="https://www.pega.com/lang/pl/about/careers/pega-poland"
          target="_blank"
        >
          <img src={Pega} className={styles["sponsor_image"]} alt="sponsor" />
        </a>
        <a href="https://www.sabre.com/locations/poland/" target="_blank">
          <img src={Sabre} className={styles["sponsor_image"]} alt="sponsor" />
        </a>
        <a href="https://unit8.com/" target="_blank">
          <img src={Unit8} className={styles["sponsor_image"]} alt="sponsor" />
        </a>
      </div>
    </>
  );
}
