//create two maps for s and t
//loop through s setting a value for both currents s[i] s[t]
//if the letter exists in map incriment else create the values in map. 
//exit for loop, then use for in loop is smap[letter] !== tmap[letter] we know its false
//if we get through both loops return true
// asim
const anagram = (s, t) => {
  if (s.length !== t.length) return false

  let tMap = {}
  let sMap = {}

  for (let i = 0; i < s.length; i++) {
    let sLetter = s[i]
    let tLetter = t[i]

    if (sMap[sLetter]) {
      sMap[sLetter]++
    } else {
      sMap[sLetter] = 1
    }

    if (tMap[tLetter]) {
      tMap[tLetter]++
    } else {
      tMap[tLetter] = 1
    }
  }

  for (let letter in sMap) {
    if (sMap[letter] !== tMap[letter]) return false
  }
  return true
}