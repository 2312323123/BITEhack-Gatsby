import React from "react";
import * as styles from "../../styles/organizator_content.module.css";

function OrganizatorInfo({
  theRef,
  isOdd,
  src,
  name,
  inViewport,
  position,
  mailHref,
  mail,
}) {
  return (
    <>
      <img
        ref={theRef}
        className={`${styles["picture"]} ${
          isOdd ? styles["picture_odd"] : styles["picture_even"]
        } ${inViewport ? styles["visible"] : ""}`}
        src={src}
        alt={name}
      />
      <div
        className={`${styles["organizator_info_container"]} ${
          isOdd
            ? styles["organizator_info_container_odd"]
            : styles["organizator_info_container_even"]
        } ${inViewport ? styles["visible"] : ""}`}
      >
        <h2 className={styles["organizator_info_container_name"]}>{name}</h2>
        <h2>{position}</h2>
        <a href={mailHref}>
          <h2>{mail}</h2>
        </a>
      </div>
    </>
  );
}

export default OrganizatorInfo;
