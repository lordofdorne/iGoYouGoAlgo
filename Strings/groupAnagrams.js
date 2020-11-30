var groupAnagrams = function (strs) {

  const map = new Map();
  for (let s of strs) {
    const ana = s.split("").sort().join("");
    if (!map.get(ana)) map.set(ana, []);
    map.get(ana).push(s);
  }
  return Array.from(map.values());
};