import "./App.css";

function App() {
  function startFizzBuzz() {
    const isMultiple = (num, of) => {
      return num % of === 0;
    };

    let output = "";

    for (let i = 1; i <= 100; i++) {
      switch (true) {
        case isMultiple(i, 15):
          output = "FizzBuzz";
          break;

        case isMultiple(i, 3):
          output = "Fizz";
          break;

        case isMultiple(i, 5):
          output = "Buzz";
          break;

        default:
          output = i;
          break;
      }

      console.log(output);
    }
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
