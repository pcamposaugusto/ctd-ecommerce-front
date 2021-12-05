import React from 'react';
import './style.scss';
import { Carousel, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Item } from './item';
/* import {Produtos} from './produtos'; */


export const Carouselmd = (props) => {

/*     var produtos1=[];
    var produtos2=[];
    var produtos3=[];
    var produtos4=[];
    var produtos5=[];
    var produtos6=[];
    
    function primeirosCards() {
        for (var i=0; i<6; i++){

            if(i<2){
                produtos1.push(Produtos[i])
            }
            if(i>1 && i<4){
                produtos2.push(Produtos[i])
            }
            if(i>3 && i<6){
                produtos3.push(Produtos[i])
            }

            if(i>5 && i<8){
                produtos4.push(Produtos[i])
            }
            if(i>7 && i<10){
                produtos5.push(Produtos[i])
            }
            if(i>9 && i<12){
                produtos6.push(Produtos[i])
            }
        }
    }
    
    primeirosCards(); */

    
    return (
        <>
            {/* CARROSSEL TELA MÉDIA 1 */}

            <Carousel className="carousel-md">
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price }, index) => {
                            if(index < 2){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price }, index) => {
                            if(index < 2){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price }, index) => {
                            if(index < 2){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* CARROSSEL TELA MEDIA 2 */}

            <Carousel className="carousel-md">
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price }, index) => {
                            if(index < 2){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price }, index) => {
                            if(index < 2){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price }, index) => {
                            if(index < 2){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}