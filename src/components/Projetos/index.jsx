import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {NavLink} from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'

export function Projetos() { 
    return (
        <>
            <section className="container" id="projetos">
                <h2>Projetos</h2>
                <div className="projeto">
                    <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <img src="src/Assets/Images/print1.png" alt="Imagem do projeto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src/Assets/Images/print1.png" alt="Imagem do projeto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src/Assets/Images/print1.png" alt="Imagem do projeto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src/Assets/Images/print1.png" alt="Imagem do projeto" />
                        </SwiperSlide>
                    </Swiper> 
                    <div className="descricao-projeto">
                        <p>ReactStore</p>
                        <p>Projeto para ecommerce desenvolivdo com:</p>
                        <ul>
                            <li>- React</li>
                            <li>- React Hooks</li>
                            <li>- Redux</li>
                            <li>- Bootstrap</li>
                        </ul>
                    </div>
                </div>
                <NavLink to='/projetos'>Ver mais</NavLink>
            </section>
        </>
    )
}