import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./style.css";
import { Link } from "react-router-dom";
import { Button, Container } from 'reactstrap';

function Main() {

    const [products, setProcucts] = useState([]);
    const [productInfo, setProductInfo] = useState({});
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadProducts(page);
    }, []);

    async function loadProducts(page) {
        const response = await api.get(`/products?page=${page}`);
        // const { docs, ...productInfo } = response.data;

        setProcucts(response.data.docs);
        setProductInfo(response.data);
    }

    const prevPage = () => {
        if (page === 1) return;

        const pageNumber = page - 1;

        setPage(pageNumber);
        loadProducts(pageNumber);
    };

    const nextPage = () => {
        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        setPage(pageNumber);
        loadProducts(pageNumber);
    };

    return (
        <Container>
            <div className="product-list">
                <Link to={'/add'} style={{ textDecoration: 'none' }}>
                    <Button type="button" color="success" size="lg" block>
                        Adicionar
                    </Button>
                </Link>
            </div>

            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <Button className="prev-page" disabled={page === 1} onClick={prevPage}>Anterior</Button>
                    <button className="next-page" disabled={page === productInfo.pages} onClick={nextPage}>Próxima</button>
                </div>
            </div>
        </Container>
    );
}

export default Main;