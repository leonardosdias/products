import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./style.css";
import { Container, Form, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { ArrowLeft } from 'react-bootstrap-icons';

function Product(props) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        loadProductsInfo();
    }, []);

    async function loadProductsInfo() {
        const { id } = props.match.params;

        const response = await api.get(`/products/${id}`);

        setProduct(response.data);
    }

    async function loadAllProducts() {
        const response = await api.get(`/products`);

        // const { docs, ...productInfo } = response.data;

        // setProcucts(response.data.docs);
        // setProductInfo(response.data);
    }

    const remove = async () => {
        const idProduct = product._id;

        const response = await api.delete(`/products/${idProduct}`);

        // loadProductsInfo(product);
    };

    return (
        <Container>

            <Form>
                <div className="product-info">
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Button
                            type="button"
                            color="primary"
                            size="md"
                        >
                            {/* <ArrowLeft  /> */}
                            Voltar
                        </Button>
                    </Link>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>URL: <a href="product.url">{product.url}</a></p>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Button
                            type="button"
                            onClick={remove}
                            color="danger"
                            size="lg"
                            block
                        >
                            Excluir
                        </Button>
                    </Link>
                </div>
            </Form>
        </Container>
    );
}

export default Product;