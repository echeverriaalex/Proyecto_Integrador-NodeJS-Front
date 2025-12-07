import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonCard() {
  return (
    <SkeletonTheme baseColor="#063885ff" highlightColor="#0a5796ff">
      <Skeleton width="300px" height="450px" />
    </SkeletonTheme>
  );
}

export default SkeletonCard;