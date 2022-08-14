function NumberPad() {
  return (
    <div className="number-pad-component">
      {[...Array(10)].map((_, i) => {
        return <div className="number-button">{i}</div>;
      })}
    </div>
  );
}

export default NumberPad;
