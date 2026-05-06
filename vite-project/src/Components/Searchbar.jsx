function Searchbar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      className="searchbar"
      placeholder="Search projects..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default Searchbar;