import { Header } from "../../components/Header";
import '../../components/Projetos/style.css'

import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



import Head from '../../Helper/Head'


export function Projetos() {
    return (
        <>
            <Head title="Projetos" />
           <Header />
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
            </section>
        </>
    )
}