import "./FilterBar.css";

const FilterBar = ({ setSortBy, sortBy, setOrderBy, orderBy }) => {
  return (
    <div className="filter-bar">
      <section className="sort-by-section">
        <label htmlFor="sortBy" className="filter-label">
          Sort By{" "}
        </label>
        <select
          name="sortBy"
          id="sortBy"
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
          value={sortBy}
          className="sort-by-dropdown"
        >
          <option value="created_at" defaultValue={"created_at"}>
            Date
          </option>
          {/* <option value="comment_count">Comment Count</option> //current issues with this code*/}
          <option value="votes">Votes</option>
        </select>
      </section>

      <section className="order-by-section">
        <label htmlFor="orderBy" className="filter-label">
          Order By{" "}
        </label>
        <select
          className="order-by-dropdown"
          name="orderBy"
          id="orderBy"
          onChange={(event) => {
            setOrderBy(event.target.value);
          }}
          value={orderBy}
        >
          <option value="desc" defaultValue={"desc"}>
            Descending
          </option>
          <option value="asc">Ascending</option>
        </select>
      </section>
    </div>
  );
};

export default FilterBar;
