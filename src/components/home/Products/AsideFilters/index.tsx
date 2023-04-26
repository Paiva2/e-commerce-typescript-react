import { Dispatch, SetStateAction, useContext } from "react";
import { IoIosClose } from "react-icons/io";
import {
  AsideContainer,
  ColorsWrapper,
  GenreWrapper,
  PriceWrapper,
} from "./styles";
import { ProductsContext } from "../../../../context/ProductsContext";

interface Props {
  genreFilter: string;
  colorFilter: string;
  priceFilters: number[];
  setPriceFilters: Dispatch<SetStateAction<number[]>>;
  setGenreFilter: Dispatch<SetStateAction<string>>;
  setColorsFilter: Dispatch<SetStateAction<string>>;
}

const AsideFilters = ({
  genreFilter,
  colorFilter,
  priceFilters,
  setPriceFilters,
  setGenreFilter,
  setColorsFilter,
}: Props) => {
  const { data } = useContext(ProductsContext);

  const removeDuplicatedColors = () => {
    let colorsAccumulator: Array<string> = [];

    const aSideColorFilters = data.map((info) => info.filterParams.colors);
    aSideColorFilters.map((item) =>
      item.map((color) => colorsAccumulator.push(color))
    );

    return colorsAccumulator;
  };

  const uniqueColorsForAside = [...new Set(removeDuplicatedColors())];

  const PriceFilters = (index: number, value: number) => {
    const newPriceFilters = [...priceFilters];
    newPriceFilters[index] = Number(value);
    setPriceFilters(newPriceFilters);
  };

  return (
    <AsideContainer>
      <h1>Filters</h1>
      <GenreWrapper>
        <h2>Genre</h2>
        <ul>
          <div>
            <li onClick={(e) => setGenreFilter(e.currentTarget.innerText)}>
              Male
            </li>
            {genreFilter === "Male" && (
              <IoIosClose onClick={() => setGenreFilter("")} />
            )}
          </div>
          <div>
            <li onClick={(e) => setGenreFilter(e.currentTarget.innerText)}>
              Female
            </li>
            {genreFilter === "Female" && (
              <IoIosClose onClick={() => setGenreFilter("")} />
            )}
          </div>
        </ul>
      </GenreWrapper>
      <PriceWrapper>
        <h2>Price</h2>
        <label>
          Min
          <input
            onChange={(e) => PriceFilters(0, +e.currentTarget.value)}
            placeholder="Ex: 20.99"
            type="number"
            min={0}
          />
        </label>
        <label>
          Max
          <input
            onChange={(e) => PriceFilters(1, +e.currentTarget.value)}
            placeholder="Ex: 100"
            type="number"
          />
        </label>
      </PriceWrapper>
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
