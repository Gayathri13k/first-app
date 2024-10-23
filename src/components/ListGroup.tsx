function ListGruop() {
  const items = ["coimbatore", "chennai", "mettuplayam"];
  return (
    <>
      <h1>My List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGruop;
