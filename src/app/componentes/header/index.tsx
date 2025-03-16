
'use client';

import Link from 'next/link';
import styles from './styles.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                <Link href="/cliente">Clientes</Link>
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
                <Link href="/grupo">Dados</Link>
                </li>
            </ul>
        </nav>
  );
};

export default Navbar;