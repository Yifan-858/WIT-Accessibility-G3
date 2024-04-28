import "../style/Search.css";

export const Search = () => {
  return (
    <section className="search-section">
      <ul className="booking-genre">
        <li>
          <button className="genre-btn" aria-label="Search for flights">
            Flight
          </button>
        </li>
        <li>
          <button className="genre-btn" aria-label="Search for hotels">
            Hotel
          </button>
        </li>
        <li>
          <button className="genre-btn" aria-label="Search for car hire">
            Car rental
          </button>
        </li>
      </ul>
    </section>
  );
};
