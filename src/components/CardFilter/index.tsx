import "./styles.css";

export default function CardFilter() {
  return (
    <div className="container m20">
      <div className="card-filter-container">
        <form>
          <div>
            <input type="text"  placeholder="Preço mínimo"/>
          </div>
          <div>
            <input type="text" placeholder="Preço máximo"/>
          </div>
          <div>
            <button>Filtrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
