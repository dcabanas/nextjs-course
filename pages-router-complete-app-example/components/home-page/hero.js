import classes from './hero.module.css'
import Image from 'next/image'
import src from '../../public/images/site/goku.png'

export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src={src} alt="An image showing myself"/>
            </div>
            <h1></h1>
            <p></p>
        </section>
    )
}