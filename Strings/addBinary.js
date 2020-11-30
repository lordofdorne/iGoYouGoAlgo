//First, I add "0b" to the strings, then convert them to BigIntegers. The BigInt function takes care of bin to dec conversion. Then I add the two Big decimal Ints and then convert to string using binary as the argument and return it..
//Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter

//'11' 3n
//'1' 1n
//sum = 4n = 100


const addBinary = (a, b) => {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
};