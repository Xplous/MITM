'use client'
import styles from '@/app/page.module.scss'
import {Usable, use} from "react";
import {ProductInterface, SpecializedSubject} from "@/type/type";
import { useState, useEffect } from "react";

export default function ProductBlock({ product }: { product: Usable<ProductInterface[]> }) {
    const productData = use(product).filter(product => product.baseSubjects.length && product.baseSubjects[0].skills.length).slice(0, 5);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 375);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);
    return (
        <>
            <div>
                <h1 className={styles.page__title}>Специализированные дисциплины</h1>
                <div className={styles.programs}>
                    {productData.map((product, index) => (
                        <section key={product.id}>
                            <h3 className={styles.section__title}>{product.title}</h3>
                            <div className={styles.program}>
                                {product.baseSubjects.slice(0 + 2 * index, 2 + 2 * index).map(subject => (
                                    <ModuleBlock key={subject.id} subject={subject} isMobile={isMobile} />
                                ))}
                            </div>
                        </section>
                    ))}
                    <section className={styles.squares}>
                        <div className={styles.folded_square}>
                            <h3>Практические модули</h3>
                            <p>Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе</p>
                        </div>
                        <div className={styles.gray_square}>
                            <h3>Итоговая аттестация</h3>
                            <ul className={styles.program__module__list}>
                                <li>
                                    Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)
                                </li>
                                <li>Защита итоговой аттестационной работы</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

function ModuleBlock({ subject, isMobile }: { subject: SpecializedSubject; isMobile: boolean }) {
    const [isOpen, setIsOpen] = useState(!isMobile);

    useEffect(() => {
        setIsOpen(!isMobile);
    }, [isMobile]);

    return (
        <div className={`${styles.program__module} ${isOpen ? styles.open : ""}`}>
            {isMobile && (
                <div aria-checked={isOpen} className={styles.module_header} onClick={() => setIsOpen(!isOpen)}>
                    <span aria-label={isOpen ? `Скрыть содержимое ${subject.title}` : `Раскрыть содержимое ${subject.title}`} className={styles.symbol_module}>{isOpen ? "-" : "+"}</span>
                    <h4 className={styles.program__module__title}>{subject.title}</h4>
                </div>
            )}
            {!isMobile && <h4 className={styles.program__module__title}>{subject.title}</h4>}
            {isOpen && (
                <ul
                    className={styles.program__module__list}
                    style={{ display: isOpen ? "flex" : "none" }}
                >
                    {subject.skills.map(skill => (
                        <li key={skill.id}>{skill.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
