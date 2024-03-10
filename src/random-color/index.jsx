import { useState , useEffect} from "react";
import "./styles.css";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if(typeOfColor === "hex"){
      handleCreateRandomHexColor()
    }else{
      handleCreateRandomRgbColor()
    }
  }, [typeOfColor])

  return (
    <div className="container" style={{backgroundColor:color}}>
      <button onClick={() => setTypeOfColor("hex")} className="hexColor">
        Generate HEX Color
      </button>
      <button onClick={() => setTypeOfColor("rgb")} className="rgbColor">
        Generate RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
        className="randomColor"
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: '#000000',
          fontSize: "60 px",
          marginTop: "20 px",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <h2>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h2>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
