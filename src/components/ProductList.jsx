export default function ProductList({ product }) {
    const productCardStyle = {
    background: "#fff",
    borderRadius: "16px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const titleStyle = {
    margin: 0,
    color: "#2c3e50",
    fontSize: "20px",
  };

  const allergenListStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "10px",
  };

  const allergenStyle = {
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "12px",
    fontSize: "14px",
  };
  return (
    <div>
      {product.map((item) => (
        <div key={item.id} style={productCardStyle}>
          <h3 style={titleStyle}>{item.name}</h3>
          <div style={allergenListStyle}>
            {item.alergyIngredients.map((allergen, index) => (
              <span key={index} style={allergenStyle}>
                {allergen}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
