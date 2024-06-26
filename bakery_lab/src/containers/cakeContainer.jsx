import { useState } from "react";
import Cake from "../components/cake";

  const CakeContainer = () => {
  
    const [cakes, setCakes] = useState([
        {
        
          cakeName: "Victoria Sponge",
          ingredients: [
            "eggs",
            "butter",
            "sugar",
            "self-raising flour",
            "baking powder",
            "milk"
          ],
          price: 5,
          rating: 5
        },
        {
          cakeName: "Tea Loaf",
          ingredients: [
            "eggs",
            "oil",
            "dried fruit",
            "sugar",
            "self-raising flour",
            "strong tea"
          ],
          price: 2,
          rating: 3
        },
        {
          cakeName: "Carrot Cake",
          ingredients: [
            "carrots",
            "walnuts",
            "oil",
            "cream cheese",
            "flour",
            "sugar"
          ],
          price: 8,
          rating: 5
        }
      ]);

      const [totalSales, setTotalSales] = useState(0);

      const averageRating = cakes.reduce((acc, cake) => acc + cake.rating, 0) / cakes.length;


      const handleSellCake = (price) => {
        setTotalSales(totalSales + price);
      };
    return (
      <div>
        <h2>Cake List</h2>
        {cakes.map((cake, index) => (
          <Cake key={index} cake={cake} onSellCake={handleSellCake} />
        ))}
        <p>Average Rating: {averageRating}</p>
        <p>Total Sales: £{totalSales}</p>


      </div>
    );
  }
  
  export default CakeContainer;