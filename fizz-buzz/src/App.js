import "./App.css";

function App() {
  function startFizzBuzz() {
    console.log("fizzBuzz");
  }

  startFizzBuzz();
  return (
    <div className="App">
      - Write a program that prints the numbers from 1 to 100. <br />
      - But for multiples of three print “Fizz” instead of the number and for
      the multiples of five print “Buzz”. <br />
      - For numbers which are multiples of both three and five print “FizzBuzz”.
      <br />
      Check the console for Fizz Buzz
      <br />
    </div>
  );
}

export default App;
