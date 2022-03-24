import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiper.css'

import 'swiper/css';

export default () => {
  return (
    <div className="slider">
        
        <div className="container">
            <h1 className='title'>Alguns Tópicos</h1>
            <p className='subtitle'>Aqui você pode encontrar algumas partes do anime, imagens e conteúdos de cada tópico</p>
        </div>

        <Swiper
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
        >
            <SwiperSlide>
                <div className="item">
                    <h2>Lutas</h2>
                    <img src="./src/assets/images/lutas.jpeg" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="item">
                    <h2>Piadas</h2>
                    <img src="./src/assets/images/piadas.jpeg" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="item">
                    <h2>Hashiras</h2>
                    <img src="./src/assets/images/hashiras.jpg" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="item">
                    <h2>Aprendizados</h2>
                    <img src="./src/assets/images/aprendizados.jpg" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="item">
                    <h2>Oni's</h2>
                    <img src="./src/assets/images/oni.jpg" />
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="item">
                    <h2>Treinos</h2>
                    <img src="./src/assets/images/treinos.jpg" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  );
};