import CardFilter from "../CardFilter";
import CardListing from "../CardListing";
import "./styles.css";

export default function ListingBody() {
  return (
    <main>
      <section id="section-filter">
        <CardFilter  />
        <CardListing />
      </section>
    </main>
  );
}
