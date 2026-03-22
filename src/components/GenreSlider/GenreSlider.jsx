import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GenreContainerStyled, ItemsContainerStyled, PlusTextStyled, SliderContainerStyled, TextContainerStyled } from "./GenreSliderStyles";
import Card from "../Card/Card";
import ArrowButton from "../UI/ArrowButton/ArrowButton";
import { formatGenreName } from "../../utils/extraFunctions";

const GenresSlider = ({genre, itemsList, type}) => {

    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const normalizedGenre = formatGenreName(genre?.name);

    const handleClick = () => {
        navigate(`/${type}/${normalizedGenre}`, {
            state: { idGenre: genre.id, genre: normalizedGenre, type }
        });
    };

    const scroll = (direction) => {
        const el = containerRef.current;
        if (!el) return;
        const amount = el.clientWidth - 200;
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
    }, [itemsList, type]); // recalcula cuando cambian los ítems
    
    return (
        <GenreContainerStyled>
            <TextContainerStyled
                onClick={ handleClick }
            >
                <h2 className="font-bold text-xl cursor-pointer"> { genre?.name }  </h2>
                <PlusTextStyled className="text-white font-bold text-xl cursor-pointer"> + </PlusTextStyled>
                <p className="font-bold text-xl cursor-pointer"> Explore </p>
            </TextContainerStyled>

            <SliderContainerStyled>
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
                        itemsList?.map((item) => (
                            <Card 
                                key={item.id}
                                data = {item}
                                type = { type }
                                genre = {normalizedGenre}
                                idGenre = { genre.id }
                            />
                        ))
                    }
                </ItemsContainerStyled>
                {!atEnd && (
                    <ArrowButton
                        direction="right"
                        onClick={() => scroll('right')}
                    />
                )}
            </SliderContainerStyled>
        </GenreContainerStyled>
    );
};
export default GenresSlider;