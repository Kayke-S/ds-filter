import type { ProductDTO } from "../../models/product-model";
import "./styles.css";

type Props = {
  product: ProductDTO;
};

export default function CardProduct({ product }: Props) {
  return (
    <div className="product-container">
      <div>
        <h3>{product.name}</h3>
        <div>
          <span className="product-currency">R$</span>
          <span className="product-price">{product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
