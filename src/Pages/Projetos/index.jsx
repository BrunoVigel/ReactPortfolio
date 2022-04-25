import { Header } from "../../Components/Header";
import '../../Components/Projetos/style.css'
import {Footer} from '../../Components/Footer'

import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export function Projetos() {
    return (
        <>
           <Header />
           <section className="container" id="projetos">
                <h2>Projetos</h2>
                <div className="projeto">
                    <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <img src="src\Assets\Images\Captura de tela 2022-04-11 131350.png" alt="Imagem do projeto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\Assets\Images\Captura de tela 2022-04-11 131350.png" alt="Imagem do projeto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\Assets\Images\Captura de tela 2022-04-11 131350.png" alt="Imagem do projeto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\Assets\Images\Captura de tela 2022-04-11 131350.png" alt="Imagem do projeto" />
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
            <Footer />
        </>
    )
}