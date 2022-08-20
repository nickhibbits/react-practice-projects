// Without modifying any existing code other than the content of the formatString method, complete the code to
// accomplish the the following:

// The method, formatString, should determine and set the value of myResult for each test. For each test,
// myResult will be similar to the input string, myString, but with certain characters removed.
// formatString is going to remove characters from consecutive runs of the same character, where the length of
// the run is greater than the test parameter, maxRepeat.

// Ex: "xxxy", 2 => "xxy"
// Ex: "xxyy", 1 => "xy"
// Ex: "xxxxyyyyxx", 1 => "xyx"

const testObject = {
  tests: [
    {
      name: "Test 1",
      myString: "xxxy",
      maxRepeat: 2,
      testCompleted: false,
      myResult: "",
    },
    {
      name: "Test 2",
      myString: "xxyy",
      maxRepeat: 1,
      testCompleted: false,
      myResult: "",
    },
    {
      name: "Test 3",
      myString: "xxxxyyyyxx",
      maxRepeat: 1,
      testCompleted: false,
      myResult: "",
    },
    {
      name: "Test 4",
      myString: "aaaabbbbccccdddd",
      maxRepeat: 1,
      testCompleted: false,
      myResult: "",
    },
    {
      name: "Test 5",
      myString: "aaaabbbbccccdddd",
      maxRepeat: 2,
      testCompleted: false,
      myResult: "",
    },
    {
      name: "Test 6",
      myString: "aaaabbbbccccdddd",
      maxRepeat: 3,
      testCompleted: false,
      myResult: "",
    },
  ],
  methods: {
    formatString: function (test) {
      //INSERT YOUR CODE HERE
      let { myString, maxRepeat } = test;
      const stringArray = myString.split("");

      const parsedArray = stringArray.filter((item, i, array) => {
        switch (maxRepeat) {
          case 1:
            if (array[i] === array[i - 1]) {
              return;
            }
            return item;
          case 2:
            if (array[i] === array[i - 1]) {
              return item;
            }
            if (array[i] === array[i + 1]) {
              return;
            }
          default:
            if (array[i] === array[i - 1] && array[i] === array[i + 1]) {
              return item;
            }
            if (array[i] === array[i + 2]) {
              return;
            }
            break;
        }
      });

      test.myResult = parsedArray.join("");
      console.log("myResult", parsedArray);
    },
  },
};

const [...tests] = testObject.tests;
const formatString = testObject.methods.formatString;

const testOne = formatString(tests[0]);

console.log(tests[0]);
