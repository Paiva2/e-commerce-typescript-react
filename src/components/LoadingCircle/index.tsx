// @ts-ignore
import { LoadingWrapper, Spin } from "./styles";

const LoadingCircle = () => {
  return (
    <>
      <LoadingWrapper>
        <div>
          <span>
            Loading... <Spin />
          </span>
        </div>
      </LoadingWrapper>
    </>
  );
};

export default LoadingCircle;
