// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

// 1 Get the key / Check if the key exists

// 2 Put the key

// 3 Delete the first added key

// The first two operations in O(1) time are provided by the standard hashmap, and the last one - by linked list.

// There is a structure called ordered dictionary, it combines behind both hashmap and linked list. In Python this structure is called OrderedDict and in Java LinkedHashMap.

// Time: O(1)
// Space: O(capacity) since the space is used only for an ordered dictionary with at most capacity + 1 elements.

class LRUCache {
  constructor(capacity) {
    this.map = new Map
    this.capacity = capacity
  }

  get(key) {
    if (!this.map.has(key)) return -1
    const val = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, val)
    return val
  }

  put(key, value) {
    this.map.delete(key)
    this.map.set(key, value)
    if (this.map.size > this.capacity) {
      const firstItem = this.map.keys().next().value
      this.map.delete(firstItem)
    }
  }
}