import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GenreContainerStyled, ItemsContainerStyled, PlusTextStyled, TextContainerStyled } from "./GenreSliderStyles";
import Card from "../Card/Card";

const GenresSlider = ({genre, itemsList, category}) => {

    const navigate = useNavigate();
    const [url, setUrl] = useState();

    const handleClick = () => {
        navigate(`/${url}/${genre.name}`, {
            state: { idGenre: genre.id, genre: genre.name, category: category }
        });
    };

    useEffect(() => {
        const urlCategory = category === "tvseries" ? "tvseries" : "movies";
        setUrl(urlCategory);
    }, [category]);

    return (
        <GenreContainerStyled>
            <TextContainerStyled
                onClick={ handleClick }
            >
                <h2 className="text-white font-bold text-xl cursor-pointer"> {genre.name}  </h2>
                <PlusTextStyled className="text-white font-bold text-xl cursor-pointer"> + </PlusTextStyled>
                <p className="text-white font-bold text-xl cursor-pointer"> Explore </p>
            </TextContainerStyled>
            <ItemsContainerStyled>
                {
                    itemsList.map((item) => (
                        <Card 
                            key={item.id}
                            data = {item}
                        />
                    ))
                }
            </ItemsContainerStyled>
        </GenreContainerStyled>
    );
};
export default GenresSlider;