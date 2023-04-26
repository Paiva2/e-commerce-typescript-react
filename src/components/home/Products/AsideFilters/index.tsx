import { Dispatch, SetStateAction, useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { AsideContainer, ColorsWrapper, GenreWrapper } from "./styles";
import { ProductsContext } from "../../../../context/ProductsContext";

interface Props {
  genreFilter: string;
  colorFilter: string;
  setGenreFilter: Dispatch<SetStateAction<string>>;
  setColorsFilter: Dispatch<SetStateAction<string>>;
}

const AsideFilters = ({
  genreFilter,
  setGenreFilter,
  setColorsFilter,
  colorFilter,
}: Props) => {
  const { data } = useContext(ProductsContext);

  const removeDuplicatedColors = () => {
    let colorsAccumulator: Array<string> = [];

    const aSideColorFilters = data.map((info) => info.filterParams.colors);
    aSideColorFilters.map((item) => item.map((color) => colorsAccumulator.push(color)));

    return colorsAccumulator;
  };

  const uniqueColorsForAside = [...new Set(removeDuplicatedColors())];

  return (
    <AsideContainer>
      <GenreWrapper>
        <h2>Genre</h2>
        <ul>
          <div>
            <li onClick={(e) => setGenreFilter(e.currentTarget.innerText)}>Male</li>
            {genreFilter === "Male" && <IoIosClose onClick={() => setGenreFilter("")} />}
          </div>
          <div>
            <li onClick={(e) => setGenreFilter(e.currentTarget.innerText)}>Female</li>
            {genreFilter === "Female" && (
              <IoIosClose onClick={() => setGenreFilter("")} />
            )}
          </div>
        </ul>
      </GenreWrapper>
      <div>
        <h2>Color</h2>
        <ul>
          {uniqueColorsForAside.map((color, index) => (
            <ColorsWrapper key={index}>
              <li onClick={() => setColorsFilter(color)}>{color}</li>
              <IoIosClose
                className={colorFilter === color ? "closeVisible" : ""}
                onClick={() => setColorsFilter("")}
              />
            </ColorsWrapper>
          ))}
        </ul>
      </div>
    </AsideContainer>
  );
};

export default AsideFilters;
