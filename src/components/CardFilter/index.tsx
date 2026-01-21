/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./styles.css";

type QueryParams = {
  maxPrice?: number;
  minPrice?: number;
};

type Props = {
  onFilter: (min: number, max: number) => void;
};

export default function CardFilter({ onFilter }: Props) {
  const [queryParams, setQueryParams] = useState<QueryParams>({});

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;

    setQueryParams({ ...queryParams, [name]: Number(value) });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    
    onFilter(
      (queryParams.minPrice || 0), (queryParams.maxPrice || Number.MAX_VALUE),
    );
  }

  return (
    <div className="container m20">
      <div className="card-filter-container">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="minPrice"
              type="text"
              placeholder="Preço mínimo"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              name="maxPrice"
              type="text"
              placeholder="Preço máximo"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button>Filtrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
