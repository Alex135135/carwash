import s from "./AdditionalServices.module.scss"
import { services } from "@/data/data";
export function AdditionalServices() {

    return (
        <section className={s.services}>
            <div className={s.container}>
                <h2 className={s.title}>Дополнительные услуги</h2>
                <p className={s.subtitle}>Расширьте базовый уход за авто с нашими премиум опциями</p>

                <div className={s.tableContainer}>
                    <table className={s.servicesTable}>
                        <thead>
                            <tr>
                                <th>Услуга</th>
                                <th>Цена</th>
                                <th>Время</th>
                                <th>Особенности</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service, index) => (
                                <tr key={index}>
                                    <td>{service.service}</td>
                                    <td className={s.priceCell}>{service.price}</td>
                                    <td>{service.time}</td>
                                    <td>{service.features}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

