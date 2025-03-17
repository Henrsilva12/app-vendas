'use client';

import Link from 'next/link';
import styles from './styles.module.css';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <button className={styles.menuButton} onClick={toggleMenu}>
                {isMenuOpen ? 'Fechar' : 'Menu'}
            </button>

            <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
                <li className={styles.navItem}>
                    <Link href="/clientes">Clientes</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/fornecedores">Fornecedor</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/venda">Vendas</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/classificacao">Classificação</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/local">Local</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/compra">Compra</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/produto">Produto</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;