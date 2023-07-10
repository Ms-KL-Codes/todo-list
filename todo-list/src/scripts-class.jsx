// MAP FILTER SORT - class!

const fruits = ["pear","banana","orange"]

console.log(fruits)

const result1 = fruits.map((fruit, index) => {
    return {amount: index +3, name: fruit}
})
// removes each elm from list and prints individually
// for elm in list

const result2 = fruits.filter((fruit) => {
    return fruit !== "pear"
})
// removes pear

const result3 = fruits.sort()
// sorts alphabetically

const result4 = fruits.reduce()
// 