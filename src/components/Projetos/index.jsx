import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
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
                    <p>ReactStore</p>
                    <p>Projeto para ecommerce desenvolivdo com react com hooks, redux e estilização com Bootstrap.</p>
                </div>
                <div className="projeto">
                    <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <img src="src\Assets\Images\Captura de tela 2022-04-11 163011.png" alt="Imagem do projeto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\Assets\Images\Captura de tela 2022-04-11 163011.png" alt="Imagem do projeto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\Assets\Images\Captura de tela 2022-04-11 163011.png" alt="Imagem do projeto" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="src\Assets\Images\Captura de tela 2022-04-11 163011.png" alt="Imagem do projeto" />
                        </SwiperSlide>
                    </Swiper> 
                    <p>BeautySaloon</p>
                    <p>Landpage de salão de beleza desenvolvido com html, css e javascript.</p>
                </div>
            </section>
        </>
    )
}