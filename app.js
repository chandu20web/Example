const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isGreaterThan5 = (num) => {
  console.log(num > 5);
};
nums.map((each) => {
  isGreaterThan5(each);
});

