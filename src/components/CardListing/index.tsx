import type { ProductDTO } from "../../model/product-model";
import CardProduct from "../CardProduct";
import "./styles.css";

type Props = {
  products: ProductDTO[];
};

export default function CardListing({ products }: Props) {
  return (
    <div className="container">
      <div className="card-listing-container">
        {products.map((p) => (
          <CardProduct key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
