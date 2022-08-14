import "../src/NumberPad.css";
function NumberPad() {
  const group1 = [1, 2, 3];
  const group2 = [4, 5, 6];
  const group3 = [7, 8, 9];

  return (
    <div className="number-pad-component">
      {/* {[...Array(10)].map((_, i) => {
        return <div className="number-button">{i}</div>;
      })} */}
      <div className="num-group" style={{ gridArea: "1 / 1 / 1 / 3" }}>
        {group1.map((num) => {
          return (
            <div key={num} className="num-button">
              {num}
            </div>
          );
        })}
      </div>
      <div className="num-group" style={{ gridArea: "1 / 1 / 1 / 3" }}>
        {group2.map((num) => {
          return (
            <div key={num} className="num-button">
              {num}
            </div>
          );
        })}
      </div>
      <div className="num-group" style={{ gridArea: "1 / 1 / 1 / 3" }}>
        {group3.map((num) => {
          return (
            <div key={num} className="num-button">
              {num}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NumberPad;
