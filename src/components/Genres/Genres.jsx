import { useEffect, useRef, useState } from "react";
import { GenresContainerStyled, ItemContainerStyled, ItemsContainerStyled } from "./GenresStyles";
import WallpaperGenres from "../../utils/setWallpaperGenres";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatGenreName, selectFetchGenreByType } from "../../utils/extraFunctions";
import ArrowButton from "../UI/ArrowButton/ArrowButton";
import { isError, isError as isErrorGenres, isFetching as isFetchingGenres, success as successGenres } from "../../redux/slice/genresSlice";

const Genres = ({ type }) => {
    
    const { genresList } = useSelector((state) => state.genres);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const location = useLocation();
    const [newGenresList, setNewGenresList] = useState([]);

    const fetchGenres = async() => {
        try{
            dispatch(isFetchingGenres());
            const fetchGenresFunction = selectFetchGenreByType(type);
            const genresListProduct = await fetchGenresFunction();
            
            if(genresListProduct){
                dispatch(successGenres(genresListProduct.genres));
                
                setNewGenresList(genresListProduct.genres.map(genre => ({
                    ...genre,
                    name: genre.name,
                    nameFormated: formatGenreName(genre.name)
                })));

                return genresListProduct;
            }
            else{
                console.error(`Genres not found.`);
            }
        }catch(error){
            dispatch(isError(error));
            console.error("Error fetching genres in Genres blocks --> ", error);
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
        if (!type) return;
        const genresList = fetchGenres();
    }, [type, location.pathname]);

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
                    newGenresList.map((genre) => (
                        <ItemContainerStyled
                            key={genre.id}
                            $background={WallpaperGenres[genre.nameFormated]}
                            onClick={
                                () => navigate(`/${type}/${genre.nameFormated}`, {
                                    state: { idGenre: genre.id, genre: genre.nameFormated, type }
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