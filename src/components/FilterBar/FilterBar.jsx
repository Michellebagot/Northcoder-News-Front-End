import "./FilterBar.css";

const FilterBar = (({ setSortBy, sortBy, setOrderBy, orderBy }) => {
  return (
    <>
      <h3>This is the Filter Bar</h3>

      <label htmlFor="sortBy">Sort By </label>
      <select
        name="sortBy"
        id="sortBy"
        onChange={(event) => {
          setSortBy(event.target.value);
        }}
        value={sortBy}
        >
        <option value="created_at" defaultValue={"created_at"}>
          Date
        </option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
     

      <label htmlFor="orderBy">Order By </label>
      <select
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
    </>
      )})

export default FilterBar
