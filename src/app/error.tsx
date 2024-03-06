"use client"

import Image from 'next/image'
import styles from 'app/sass/global-error.module.sass'



export default function GloblaError({reset}: ErrorPageProps){
    return(
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>Ocurrio un error</h1>
            <Image
            src='/img/error.png'
            width={500}
            height={500}
            alt='Error'
            />
            <p className={styles.Error__message}>A ocurriodo un error, intenta otra vez</p>
            <button className={styles.Error__button} onClick={reset}>Volver a intentar</button>

            
        </main>
    )
}