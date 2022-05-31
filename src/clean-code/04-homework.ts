(() => {
  // Resolve without the conditional triple inside the if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    const redFruits = ['apple', 'cherry', 'ciruela'];

    return redFruits.includes(fruit);
  }

  // Simplify this function
  // switch? Object literal? validate possible colors
  type FruitColor = 'red' | 'yellow' | 'purple';

  function getFruitsByColor(color: FruitColor) {
    /*
    if (color === 'red') return ['apple', 'strawberry'];

    if (color === 'yellow') return ['pineapple', 'banana'];

    if (color === 'purple') return ['blackberries', 'grapes'];

    throw Error('the color must be: red, yellow, purple');
    */

    const fruitsByColor = {
      red: ['apple', 'cherry'],
      yellow: ['pineapple', 'banana'],
      purple: ['grape', 'strawberry'],
    };

    if (!Object.keys(fruitsByColor).includes(color)) {
      throw Error('the color must be: red, yellow, purple');
    }
    return fruitsByColor[color];
  }

  // Simplify this function
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = false;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (!isFirstStepWorking) return 'First step is broken';

    if (!isSecondStepWorking) return 'Second step is broken';

    if (!isThirdStepWorking) return 'Third step is broken';

    if (!isFourthStepWorking) return 'Fourth step is broken';

    return 'Working properly!';
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cherry'), fruit: 'cherry' }); // true
  console.log({ isRedFruit: isRedFruit('pineapple'), fruit: 'pineapple' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['apple', 'strawberry']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['pineapple', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['blackberries', 'grapes']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Change the values in line 31 and wait for results
})();
