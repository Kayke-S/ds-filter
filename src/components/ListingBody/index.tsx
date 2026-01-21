import { useContext, useEffect, useState } from "react";
import CardFilter from "../CardFilter";
import CardListing from "../CardListing";
import "./styles.css";
import { type ProductDTO } from "../../models/product-model";
import * as productService from "../../services/product-service";
import { ContextProductCount } from "../../utils/context-products";

export default function ListingBody() {
  const [products, setProducts] = useState<ProductDTO[]>(
    productService.findByPrice(0, Number.MAX_VALUE),
  );

  const { setContextProductCount } = useContext(ContextProductCount);

  useEffect(() => {
    setContextProductCount(products.length);
  });

  function onFilter(min: number, max: number) {
    
    const p = productService.findByPrice(min, max);
    setContextProductCount(p.length);
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
