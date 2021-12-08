import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';
import { CartState } from '../../context/Context.js';
import './style.scss';


const GridCategorias = ({prod}) => {

    const {state: {products}} = CartState();

    // Para alterar o botão
    const {
        state: {cart},
        dispatch,
    } = CartState();

    // Para o head da página com o helmet
    // const pgTitle = category;

    return (
        <>
            {/* HEAD */}
             {/* <Helmet>
                <title>Amar e Cuidar | {pgTitle}</title>
            </Helmet> */}
            <section id="produtos-categoria">
                <Container fluid className="radios">
                    {/* RADIOS COM AS CATEGORIAS */}
                    <Form>
                        <h4>Categorias</h4>
                        <Form.Check as={Link} to={"/produtos"} type="radio" aria-label="radio 1" name="categorias" label="Todas as categorias" />
                        <Form.Check as={Link} to={"/produtos/skincare"} type="radio" aria-label="radio 1" name="categorias" label="Skin care" />
                        <Form.Check as={Link} to={"/produtos/makeup"} type="radio" aria-label="radio 1" name="categorias" label="Make up" />
                        <Form.Check as={Link} to={"/produtos/haircare"}  type="radio" aria-label="radio 1" name="categorias" label="Hair care" />
                        <Form.Check as={Link} to={"/produtos/perfume"}  type="radio" aria-label="radio 1" name="categorias" label="Perfumes" />
                        <Form.Check as={Link} to={"/produtos/vegano"} type="radio" aria-label="radio 1" name="categorias" label="Veganos" />
                    </Form>
                    {/* CARDS DE PRODUTOS */}
                    <Row xs={1} md={2} xl={3} className="grid-cards">
                        {products.map(({id, title, price, shortdescription, image}) => (
                            <Col>
                            <Card className="cards-produtos">
                                <Link to={"/produtos/"+id}>
                                    <Card.Img variant="top" src={image} />
                                </Link> 
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Subtitle>R$ {price},00</Card.Subtitle>
                                    <Card.Text>{shortdescription}</Card.Text>
                                    {/* BOTÃO ADD AO CARRINHO */}
                                    {cart.some(p => p.id === prod.id) ? (
                                            <button onClick={() => {
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: prod
                                            })
                                        }} className="btn-prod">Remover do carrinho</button>
                                        ) : (<button onClick={() => {
                                            dispatch({
                                                type: "ADD_TO_CART",
                                                payload: prod
                                            })
                                        }} className="btn-prod">Add ao carrinho</button>)
                                    }

                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>   
    )
}

export default GridCategorias;