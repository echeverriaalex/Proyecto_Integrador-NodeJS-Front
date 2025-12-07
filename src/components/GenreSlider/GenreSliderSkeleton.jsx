import SkeletonCard from "../Card/SkeletonCard";
import { GenreContainerStyled } from "./GenreSliderStyles";
import { TextSkeletonStyled, ItemsContainerSkeletonStyled } from "./GenreSliderSkeletonStyles";

const GenreSliderSkeleton = () => {
    return (
        <GenreContainerStyled>
            <TextSkeletonStyled baseColor="#063885ff" highlightColor="#0a5796ff" />
            <ItemsContainerSkeletonStyled>
                {
                    Array.from({ length: 20 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                }
            </ItemsContainerSkeletonStyled>
        </GenreContainerStyled>
    );
};

export default GenreSliderSkeleton;