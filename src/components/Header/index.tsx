import { useContext } from "react";
import "./styles.css";
import { ContextProductCount } from "../../utils/context-products";

export default function Header() {
  const { contextProductCount } = useContext(ContextProductCount);

  return (
    <header>
      <nav className="container">
        <h1>DSFilter</h1>
        <div className="product-count">{contextProductCount} produto(s)</div>
      </nav>
    </header>
  );
}
