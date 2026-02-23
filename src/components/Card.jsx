  function Card({ title, description, emoji, extra, }) {

    return (
      <div className="card">
        <span style={{ fontSize: "30px" }}>{emoji}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        {extra && <p><strong>{extra}</strong></p>}
      </div>
    );
  }
  
  export default Card;