import styles from './Description.module.sass'
import Image from 'next/image'

export const Description = ()=>{
    return (
        <section className={styles.Description}>
            <Image src="/img/imagen.png" 
            alt="photo" 
            width={300} 
            height={300}
            //priority={false}
            />

            <div className={styles.Description__text}>
            <h2>Aguacatito </h2>
            <p>Criatura alienígena emergiendo de un pequeño "Aguacatito" confundido y asustado. </p>
            </div>
        </section>
    )
}