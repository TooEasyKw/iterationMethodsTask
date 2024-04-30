const numbers = [10, 13, 20, 25, 38, 35, 40];
const Result = numbers.filter((num) => {
  return num >= 25;
});
const Result1 = numbers.filter((num) => {
  return num % 5 == 0;
});
const Result2 = numbers.map((num) => {
  return num * num;
});
const Result3 = numbers.map((num) => {
  return num * 2;
});
const Result4 = numbers.filter((num) => {
  return num >= 20;
});
const Result5 = Result4.map((num) => {
  return num * num;
});
const Result6 = Result1.map((num) => {
  return num * 3;
});
console.log(Result);
console.log(Result1);
console.log(Result2);
console.log(Result3);
console.log(Result5);
console.log(Result6);
/*Bonus*/
const logger = function (array) {
  array.forEach((element) => {
    return console.log(element);
  });
};
logger([10, 20, 30]);

const toCelsius = function (temperatures) {
  temperatures = temperatures.map((num) => {
    return (num - 32) * (5 / 9);
  });
  return temperatures;
};
console.log(toCelsius([100, 200, 300]));

const hottestDays = function (temperatures, threshhold) {
  temperatures = temperatures.filter((num) => {
    if (num > threshhold) {
      return true;
    } else {
      return false;
    }
  });
  return temperatures;
};

console.log(hottestDays([100, 200, 300], 100));

const logHottestDays = function (temperatures, threshhold) {
  temperatures = temperatures.map((num) => {
    return (num - 32) * (5 / 9);
  });
  threshhold = (threshhold - 32) * (5 / 9);
  temperatures = temperatures.filter((num) => {
    if (num > threshhold) {
      return true;
    } else {
      return false;
    }
  });
  return temperatures;
};

console.log(logHottestDays([100, 200, 300], 100));
