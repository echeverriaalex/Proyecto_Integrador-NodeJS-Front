import { IMG_URL } from "../../../utils/constants";
import { CardContainerStyled, DataContainerStyled, ImageContainerStyled } from "./CardStyles";
import { useNavigate } from "react-router-dom";


import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

//const Card = ({ product }) => {
const Card = ({ adult, backdrop_path, genre_ids, id, original_language,
    original_title, overview, popularity, poster_path, release_date, 
    title, video, vote_average, vote_count }) => {

    const navigate = useNavigate();

    return (
        poster_path ? (
            <CardContainerStyled
                onClick={()=> navigate(`/product/${id}`)}
            >
                <ImageContainerStyled>
                    <img src={`${IMG_URL}${poster_path}`} alt={title} />
                </ImageContainerStyled>
                {/*
                <DataContainerStyled>
                    <h2 className="justify-center font-bold text-center">{title}</h2>
                    <p>adult: { adult ? "Yes" : "No" }</p>
                    <p>Type: { genre_ids.join(", ") }</p>
                    <p>language: { original_language }</p>
                    <p>original_title: { original_title }</p>
                    <p>Summary: { overview }</p>
                    <p>popularity: { popularity }</p>
                    <p>video: { video }</p>
                    <p>Rating: { vote_average }</p>
                    <p>vote_count: { vote_count }</p>
                    <p>release_date: { release_date }</p>
                </DataContainerStyled>
                */}
            </CardContainerStyled>
        ) : 
        
        (
            <Box
                sx={{
                    bgcolor: '#121212',
                    p: 8,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Skeleton
                    sx={{ bgcolor: 'grey.900' }}
                    variant="rectangular"
                    width={210}
                    height={118}
                />
            </Box>
        )
    );
}

export default Card;