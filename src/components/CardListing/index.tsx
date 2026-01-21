import type { ProductDTO } from "../../models/product-model";
import CardProduct from "../CardProduct";
import "./styles.css";

type Props = {
  products: ProductDTO[];
};

export default function CardListing({ products }: Props) {
  return (
    <div className="container">
      <div className="card-listing-container">
        {products.length > 0 ? (
          products.map((p) => <CardProduct key={p.id} product={p} />)
        ) : (
          <h2
            style={{
              textAlign: "center",
              color: "red"
            }}
          >
            Produto não encontrado. Verifique o filtro aplicado
          </h2>
        )}
      </div>
    </div>
  );
}
