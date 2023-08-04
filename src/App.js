import StarRating from "./StarRating";

/*
----DEFAULT PARAMETERS-----
maxRating = 5,
  color = "#fcc419",
  size = 48,
  messages = [],
  defaultRating = 0,
  onSetRating = (rating) => console.log("Selected rating:", rating)
*/

function App() {
  return (
    <div>
      <StarRating maxRating={10} size={70} />
      <StarRating
        maxRating={5}
        size={50}
        color={"red"}
        messages={["Çok kötü", "Kötü", "Orta", "İyi", "Çok iyi"]}
      />
      <StarRating
        maxRating={5}
        size={30}
        color={"#000"}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      />
    </div>
  );
}

export default App;
