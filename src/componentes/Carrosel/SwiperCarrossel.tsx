import react from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Grid } from '@material-ui/core';

export default function SwiperCarrossel() {
    return (
        <Grid>
            <Swiper modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{ clickable: true }} className='swiper-container' >
                <SwiperSlide className='slide-item'>
                    <img src="src/assets/img/ecobagHome.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className='slide-item'>
                    <img src="src/assets/img/sabonetepromo.gif" alt="" />
                </SwiperSlide>
                <SwiperSlide className='slide-item'>
                    <img src="src/assets/img/impacto.gif" alt="" />
                </SwiperSlide>
                <SwiperSlide className='slide-item'>
                    <img src="src/assets/img/frete.gif" alt="" />
                </SwiperSlide>
            </Swiper>
        </Grid>
    )
}
