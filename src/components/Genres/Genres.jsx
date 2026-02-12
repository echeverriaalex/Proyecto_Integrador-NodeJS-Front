import { useEffect, useRef, useState } from "react";
import { GenresContainerStyled, ItemContainerStyled, ItemsContainerStyled } from "./GenresStyles";
import WallpaperGenres from "../../utils/setWallpaperGenres";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectFetchGenreByType } from "../../utils/extraFunctions";
import { isError, isFetching, success } from "../../redux/slice/genresSlice";
import ArrowButton from "../UI/ArrowButton/ArrowButton";

const Genres = () => {
    
    // Constantes correctas y utilizadas    
    const { genresList } = useSelector((state) => state.genres);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    // Constantes a revisar tu implementacion
    const { typeProduct } = useSelector((state) => state.typeProductShow);
    
    const fetchGenres = async() => {
        try{
            dispatch(isFetching());
            const fecthGenresProduct  = selectFetchGenreByType(typeProduct);
            const genresData = await fecthGenresProduct();
            console.log("Estoy en Genres fetched:", genresData);
            dispatch(success(genresData.genres));
            return genresData;
        }catch(error){
            dispatch(isError(error));
            console.error("Error fetching genres:", error);
        }
    };

    const scroll = (direction) => {
        const el = containerRef.current;
        if (!el) return;
        const amount = el.clientWidth - 70;
        el.scrollBy({ left: direction === 'right' ? amount : -amount, behavior: 'smooth' });
        // Recalcula tras el movimiento (pequeño delay para el smooth)
        setTimeout(updateEdges, 350);
    };
    
    const updateEdges = () => {
      const el = containerRef.current;
      if (!el) return;
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      setAtStart(el.scrollLeft <= 0);
      setAtEnd(el.scrollLeft >= maxScrollLeft - 1);
    };

    useEffect(() => {
        if (!typeProduct) return;
        fetchGenres();
    }, [typeProduct]);

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;
  
      updateEdges(); // inicial
      const onScroll = () => updateEdges();
      el.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', updateEdges);
  
      return () => {
        el.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', updateEdges);
      };
    }, [genresList]); // recalcula cuando cambian los ítems

    return (
        <GenresContainerStyled>
            {!atStart && (
                <ArrowButton
                    direction="left"
                    onClick={() => scroll('left')}
                />
            )}
            <ItemsContainerStyled
                ref={containerRef}
            >
                {
                    genresList.map((genre) => (
                        <ItemContainerStyled
                            key={genre.id}
                            $background={WallpaperGenres[genre.name]}
                            onClick={
                                typeProduct === "tvseries" ? 
                                    () => navigate(`/tvseries/${genre.name}`, {
                                        state: { idGenre: genre.id, genre: genre.name, category: "tvseries" }
                                    })
                                    :
                                    () => navigate(`/movies/${genre.name}`, {
                                        state: { idGenre: genre.id, genre: genre.name, category: "movies" }
                                    })
                            }
                        >
                            <p className="font-bold text-xl">{genre.name}</p>
                        </ItemContainerStyled>
                    ))
                }
            </ItemsContainerStyled>
            {!atEnd && (
                <ArrowButton
                    direction="right"
                    onClick={() => scroll('right')}
                />
            )}
        </GenresContainerStyled>
    );
};
export default Genres;