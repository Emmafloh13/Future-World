"use client"

import { useState } from 'react'
import styles from './Description.module.sass'
import Image from 'next/image'
import classNames from 'classnames/bind'


const  PLACEHOLDER_IMAGE ='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABjAGYDASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAAAwQFAAIBBgf/xAAfEAACAgIDAQEBAAAAAAAAAAAAAgEDBBEhMWFBEhP/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAZEQEBAQEBAQAAAAAAAAAAAAAAAQIRAxL/2gAMAwEAAhEDEQA/AP3uTljTJwzE68SPGkE0mdgDuTtNI6aTmZAtYcTb6L03DOz2JFP6+ncWDShYbiTqJFlsCKw/Q4PEnQGGO4kwcd7Mc7MBhJYE7GZgFjmtGR5Y4pZbo11hPvu1vklqq5yO9wGb/RC3I9FmyfSV2tPNXi/0It/pDjJ9DV5Hoc7a+a6l3owlhFquHKrdlZpO44qK4WGEa3Dqw/U7DP6MBhjGLwRp4FrmCtPArfILTyFMh+yVk262O5TdkXMfs5910eeS+Rfr6I2ZPPYPKt1smW3cnD6evHbjz6rLk+jVORv6fOJfO+x7Hu6B5+3Ta830uPdvXJSos6PnsWzorYz9HdjTl3lZqcaRidQ3Q5XJeVzahqGMDiTDE4O3QreNtHArdHAKEScr6RMz6XspeyNlp2Q3HV5189mb5JN29l3Kq3smXU89Hne3na7vPcJV72P42wK0zvodx6hPLzsqmtxRxPhYxfhMxU1orYy9Ho+ccXpVGgdrE6IHK4OnLl1RoMaDDpnWgXuXsclQFim4SVJyE7JWTVvZfuTZPvq38EuVc64+cyKN74ELMfno+iuo8FXx+eiOvProz6IkY/PQzTRqeh+MfnoNXR4LPIb6hY9WtcFKhDmqrwcqrK5zxLW+i0qNJBxWgwilpEbWiDBIgw3C9PzAJ1DzAN4ATpK1BS2souovYoeDKl2VC7UlN1AsgPk30n/xCLUNfg9hAfLfQddYxWh6qhkU0gfTpFDKpysBVgaQOtox1owW6ck4YxhSgOAcxhmLuCYxjM4k9gxgCIoVDGMwyhFMYLOjGMFn/9k='

export const Description = ()=>{
    const [hasBorder, setBorder] = useState(false);
    const handleClick = () => setBorder(!hasBorder);

    const  cx = classNames.bind(styles);

    const buttonStyles = cx('Description__button',{
        'Description__button__border': hasBorder,
    });

    return (
        <section className={styles.Description}>
            <button onClick={handleClick} className={buttonStyles}>
            <div className={styles.Description__imageContainer}>
            <Image 
            src="/img/imagen.png" 
            alt="photo" 
            fill
            placeholder='blur'
            blurDataURL={PLACEHOLDER_IMAGE}
            //priority={false}
            />
            </div>
            </button>

            <div className={styles.Description__text}>
            <h2>Aguacatito </h2>
            <p>Criatura alienígena emergiendo de un pequeño "Aguacatito" confundido y asustado. </p>
            </div>
        </section>
    )
}