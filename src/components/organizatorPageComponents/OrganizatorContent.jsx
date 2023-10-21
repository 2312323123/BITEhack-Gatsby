import * as React from "react";

import SpaceHeader from "../commonComponents/SpaceHeader";
import * as mainContentStyles from "../../styles/main_content.module.css";
import { useEffect, useRef } from "react";
import Footer from "../commonComponents/Footer";

import * as styles from "../../styles/organizator_content.module.css";

import Pawel from "../../images/Pawel.jpg";
import Anna from "../../images/Anna.jpg";
import Hubert from "../../images/Hubert.jpg";
import Marta from "../../images/Marta.jpg";
import Konrad from "../../images/Konrad.jpg";
import Maciej from "../../images/Maciej.jpg";
import Tomasz from "../../images/Tomasz.jpg";
import { useIntersection } from "../commonComponents/useIntersection";
import OrganizatorInfo from "./OrganizatorInfo";

export default function OrganizatorContent(props) {
  const { contentScrolled, setContentScrolled } = props;

  useEffect(() => {
    if (!contentScrolled) {
      setContentScrolled(true);
    }
  }, [contentScrolled, setContentScrolled]);

  const initial_offset = "-48px";

  const ref1 = useRef();
  const inViewport1 = useIntersection(ref1, initial_offset); // Trigger if 200px is visible from the element

  const ref2 = useRef();
  const inViewport2 = useIntersection(ref2, initial_offset); // Trigger if 200px is visible from the element

  const ref3 = useRef();
  const inViewport3 = useIntersection(ref3, initial_offset); // Trigger if 200px is visible from the element

  const ref4 = useRef();
  const inViewport4 = useIntersection(ref4, initial_offset); // Trigger if 200px is visible from the element

  const ref5 = useRef();
  const inViewport5 = useIntersection(ref5, initial_offset); // Trigger if 200px is visible from the element

  const ref6 = useRef();
  const inViewport6 = useIntersection(ref6, initial_offset); // Trigger if 200px is visible from the element

  const ref7 = useRef();
  const inViewport7 = useIntersection(ref7, initial_offset); // Trigger if 200px is visible from the element

  return (
    <main
      className={`${mainContentStyles["main_content"]} ${
        contentScrolled ? mainContentStyles["content_scrolled"] : ""
      }`}
    >
      <div style={{ height: "10vh" }}></div>
      <SpaceHeader header="ORGANIZATORZY" />

      <article className={styles["people"]}>
        <OrganizatorInfo
          theRef={ref1}
          isOdd={true}
          src={Pawel}
          name={"Paweł Zaręba"}
          inViewport={inViewport1}
          position={"Koordynator Projektu"}
          mailHref={"mailto:pawel.zareba@best.krakow.pl"}
          mail={"pawel.zareba@best.krakow.pl"}
        />

        <OrganizatorInfo
          theRef={ref2}
          isOdd={false}
          src={Tomasz}
          name={"Tomasz Poręba"}
          inViewport={inViewport2}
          position={"Koordynator ds. Zasobów ludzkich"}
          mailHref={"mailto:tomasz.poreba@best.krakow.pl"}
          mail={"tomasz.poreba@best.krakow.pl"}
        />

        <OrganizatorInfo
          theRef={ref3}
          isOdd={true}
          src={Anna}
          name={"Anna Ślęzak"}
          inViewport={inViewport3}
          position={"Koordynator ds. Kontaktu z firmami"}
          mailHref={"mailto:anna.slezak@best.krakow.pl"}
          mail={"anna.slezak@best.krakow.pl"}
        />

        <OrganizatorInfo
          theRef={ref4}
          isOdd={false}
          src={Marta}
          name={"Marta Chojnacka"}
          inViewport={inViewport4}
          position={"Koordynator ds. Logistyki"}
          mailHref={"mailto:marta.chojnacka@best.krakow.pl"}
          mail={"marta.chojnacka@best.krakow.pl"}
        />

        <OrganizatorInfo
          theRef={ref5}
          isOdd={true}
          src={Hubert}
          name={"Hubert Sujka"}
          inViewport={inViewport5}
          position={"Koordynator ds. Promocji"}
          mailHref={"mailto:hubert.sujka@best.krakow.pl"}
          mail={"hubert.sujka@best.krakow.pl"}
        />

        <OrganizatorInfo
          theRef={ref6}
          isOdd={false}
          src={Maciej}
          name={"Maciej Piotrowski"}
          inViewport={inViewport6}
          position={"Koordynator ds. Merytoryki"}
          mailHref={"mailto:maciej.piotrowski@best.krakow.pl"}
          mail={"maciej.piotrowski@best.krakow.pl"}
        />

        <OrganizatorInfo
          theRef={ref7}
          isOdd={true}
          src={Konrad}
          name={"Konrad Krzemiński"}
          inViewport={inViewport7}
          position={"Koordynator ds. Merytoryki"}
          mailHref={"mailto:konrad.krzeminski@best.krakow.pl"}
          mail={"konrad.krzeminski@best.krakow.pl"}
        />
      </article>

      <Footer />
    </main>
  );
}
