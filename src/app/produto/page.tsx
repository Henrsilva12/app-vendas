"use client";

import React, { useState } from "react";
import styles from './styles.module.css';
import Input from "../componentes/inputs";   
import Navbar from "../componentes/header";
import { useRouter } from "next/navigation";

export default function Produto(){
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const [loading, setLoading] = useState(false); // Estado para o spinner
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Validação dos campos
        if (!nome || !quantidade || !valor) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        setLoading(true); // Ativa o spinner

        try {
            // Faz a requisição para a API
            const response = await fetch('/api/produtos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, quantidade, valor }),
            });

            // Verifica se a requisição foi bem-sucedida
            if (response.ok) {
                setNome('');
                setQuantidade('');
                setValor('');
                alert('Produto adicionado com sucesso');
                router.push('/produto'); //
            } else {
                const errorData = await response.json();
                console.error('Erro ao adicionar produtos:', errorData.error);
                alert('Erro ao adicionar produtos: ' + errorData.error);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro ao adicionar produtos. Verifique o console para mais detalhes.');
        } finally {
            setLoading(false); // Desativa o spinner
        }
    };

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.header}>
                <p className={styles.title}>Cadastro de Produtos</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.formularios}>
                    <div className={styles.nome}>
                        <p>Nome do produto</p>
                        <Input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite ao nome do produto"
                            required
                        />
                    </div>

                    <div className={styles.quantidade}>
                        <p>Quantidade</p>
                        <Input
                            type="number"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                            placeholder="Digite a quantidade do produto"
                            required
                        />
                    </div>

                    <div className={styles.valor}>
                        <p>Valor</p>
                        <Input
                            type="number"
                            value={valor}
                            onChange={(e) => setValor(e.target.value)}
                            placeholder="Digite o valor do produto"
                            required
                        />
                    </div>

                    <button type="submit" className={styles.button} disabled={loading}>
                        {loading ? "Adicionando..." : "Adicionar"}
                    </button>
                </div>
            </form>
        </div>
    );
}