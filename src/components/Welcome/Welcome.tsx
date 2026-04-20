import s from "../Welcome/welcome.module.scss"
import Link from "next/link"

export function Welcome() {
    return (
        <section className={s.welcome}>
            <h1 className={s.welcome__title}>Добро пожаловать на НашуМойку!</h1>
            <h2 className={s.welcome__headline}>Чистые авто — наша страсть! </h2>
            <p className={s.welcome__text}>Профессиональная мойка менее за час!</p>
            <Link href={"/booking"} className={s.welcome__link}>Записаться</Link>
        </section>
    );
};