import { Typography, Grid, Button, } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import TabProdutos from '../produtos/tabprodutos/TabProdutos';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { TokenState } from '../../store/tokens/tokensReducer';
import Search from '../../componentes/search/Search';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';


function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])
    return (
        <>
            <Grid item xs={12} className='caixa-titulo-home' container direction='row'>
                <Box justifyContent="start" className=' sub-inicial' >
                    <img src="assets/img/icone.png" height='100' width='100' alt="" className='icone' />
                </Box>
                <Box className='search'>
                    <Search />
                </Box>
                <Typography align="center" className='sub-titulo'>Venha para o eco mais perto de você</Typography>
                <Link to="/login">
                    <Button
                        className="btn-inicial"
                        size='small'> Fazer Login
                    </Button> </Link>
            </Grid>

            <Grid alignItems="center" className='box-carrosel' justifyContent='center'>
                <Grid item>
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
            </Grid>

            <Grid item xs={12} className='caixa-titulo' container direction='row'>
            </Grid>
            <TabProdutos />

        </>
    );
}

export default Home;