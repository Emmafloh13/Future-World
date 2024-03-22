"use client";

import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Description.module.sass";
import Image from "next/image";


const PLACEHOLDER_IMAGE ='data:image/jpeg;base64'
  

export const Descripcion = () => {
  const [hasBorder, setBorder] =useState(false);

  const handleClick = () =>setBorder(!hasBorder);

 
  const cx = classNames.bind(styles);

  const buttonStyles = cx('Description__button',{
    'Description__button__border': hasBorder,
  });

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>

    <div className={styles.Description__imageContainer}>
        <Image
          src="/images/description.png"
          alt="product markerpe"
          fill
          placeholder="blur"
          blurDataURL={PLACEHOLDER_IMAGE}
        />
      </div>
    </button>
      <div className={styles.Descripcion__text}>
      <h2>Aguacatito </h2>
      <p>Criatura alienígena emergiendo de un pequeño "Aguacatito" confundido y asustado. </p>
      </div>
    </section>
  );
};
