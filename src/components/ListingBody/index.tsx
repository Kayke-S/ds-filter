import { useState } from "react";
import CardFilter from "../CardFilter";
import CardListing from "../CardListing";
import "./styles.css";
import { type ProductDTO } from "../../model/product-model";
import * as productService from "../../services/product-service";

export default function ListingBody() {
  const [products, setProducts] = useState<ProductDTO[]>(
    productService.findByPrice(0, Number.MAX_VALUE),
  );

  function onFilter(min: number, max: number) {
    const p = productService.findByPrice(min, max);
    setProducts(p);
  }

  return (
    <main>
      <section id="section-filter">
        <CardFilter onFilter={onFilter} />
        <CardListing products={products} />
      </section>
    </main>
  );
}
