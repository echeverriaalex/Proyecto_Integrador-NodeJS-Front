import { useEffect, useState } from "react";
import TvGenres from "../../../components/Genres/Components/TvGenres";
import { GenresListContainerStyled, TypeProductsPageWrapper } from "../TypeProductsPageStyles";
import { useNavigate } from "react-router-dom";
import { getTvbyGenreFromAPI, getTvGenresFromAPI } from "../../../axios/axios-tv";
import { useDispatch, useSelector } from "react-redux";

import { isError, isFetching, success } from "../../../redux/slice/tvSlice";
import { isError as isErrorGenres, isFetching as isFetchingGenres, success as successGenres } from "../../../redux/slice/genresSlice";
import TvSerieGenresSlider from "../../../components/Genres/Components/TvSeries/TvSerieGenresSlider";

const TvSeriesPage = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tvList, isLoading, error} = useSelector((state) => state.tv);
  const { genresList, isLoading: isLoadingGenres, error: errorGenres} = useSelector((state) => state.genres);
  const [showLoading, setShowLoading] = useState(true);

  const [genresAndLists, setGenresAndLists] = useState([]);

  const fetchGenresList = async () => {
    try{
      dispatch(isFetchingGenres());
      const genresList = await getTvGenresFromAPI();
      
      if(genresList) {
        dispatch(successGenres(genresList?.genres));
        return genresList;
      }
      else{
        console.error(`Genres not found.`);
      }
    }catch(error){
      dispatch(isErrorGenres(error));
      console.error(`Error loading ${genre} tv shows.`, error);
    }
  }


  const fetchTvGenres = async () => {
    const genresList = await fetchGenresList();

    if (!genresList) return;

    try{
      dispatch(isFetching());
      if(genresList) {

        //console.log("Genres list tv page ----->", genresList);
        // genresList?.genres.map( async (genre) => {

        const genresWithLists = await Promise.all(genresList?.genres.map( async (genre) => {
          //console.log("Current Genre selected name ----->", genre.name);
          const tvData = await getTvbyGenreFromAPI(genre?.id, 1); // Always fetch page 1 for genres list, 1 es la pagina inicial solo voy a mostrar esa
          //console.log(tvData);
          //console.log(tvData.results);
          //dispatch(success(tvData.results));

          let genreWithList = {
            genre: genre.name,
            list: tvData.results
          };

          setGenresAndLists((prevState) => [...prevState, genreWithList]);

          return genreWithList;
        }));
        console.log("Genres with lists ----->", genresWithLists);
      }
    }catch(error){
      dispatch(isError(error));
      console.error(`Error loading genres tv series.`, error);
    }
  }

  useEffect(() => {
    fetchTvGenres();
    
    const timer = setTimeout(() => {
        setShowLoading(false);
    }, 3000);
    return () => clearTimeout(timer);

  }, []);
  
  return (
    <TypeProductsPageWrapper>
      <h1 className="font-bold text-center text-white">TV & Series</h1>
      
      
      <TvGenres />


      <GenresListContainerStyled>
        {
          genresAndLists?.map((genreItem) => (
            <TvSerieGenresSlider
              genre={genreItem.genre}
              itemsList={genreItem.list}
            />
          ))
        }
            


      </GenresListContainerStyled>

      
    </TypeProductsPageWrapper>
  );
}

export default TvSeriesPage;