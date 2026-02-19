function Food () {
  const food1 = "Pasta";
  const food2 = "Sushi";
  const food3 = "Fried Chicken";
  
  return (
    <div>
      <h2>My Favorite Foods</h2>
      <ul>
          <li>Bubble milk tea</li>
          <li>{food1}</li>
          <li>{food2}</li>
          <li>{food3}</li>
          <li>Ice Cream</li>
          </ul>
    </div>
  );
}

export default Food;