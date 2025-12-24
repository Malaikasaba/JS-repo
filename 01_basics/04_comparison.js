// Comparison Operators
// console.log(2 > 1);  => true
// console.log(2 >= 1); => true
// console.log(2 < 1);  => false
// console.log(2 <= 1); => false
// console.log(2 == 1); => false
// console.log(2 != 1); => true

// console.log("2" > 1); Not a predictable result => Output true becoz JS automatically converts the datatypes.
// console.log("02" > 1); Always compare data of same datatypes.

// console.log(null > 0); => false
// console.log(null == 0); => false
// console.log(null >= 0); => true
// Comparison coverts null to a number. Better practice is to avoid such comaprisons

// console.log(undefined > 0);  => false
// console.log(undefined == 0); => false
// console.log(undefined >= 0); => false

// === strictly check (checks the datatypes as well)
// console.log("2" === 2);