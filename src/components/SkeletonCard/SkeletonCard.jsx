import { SkeletonCardStyled, StackContainerStyled } from './SkeletonCardStyle';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonCard() {
  return (
    <SkeletonCardStyled>
      <SkeletonTheme baseColor="#919191" highlightColor="#a6a6a6">
        <Skeleton height="400px" width="100%"/>
      </SkeletonTheme>
    </SkeletonCardStyled>
  );
}

export default SkeletonCard;