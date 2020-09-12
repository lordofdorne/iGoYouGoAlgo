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