function Card () {
  const title = "My Awesome Boba Project";
  const description = "This is a order app for boba lovers to order from all of their favorite bubble milk tea shops!";
  const emoji = " 🧋 ";
  
  return (
    <div className="card">
    <span style={{ fontSize: "70px" }}>{emoji}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
  );
}

export default Card;