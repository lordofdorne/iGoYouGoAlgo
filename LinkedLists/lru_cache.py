from collections import OrderedDict
# Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

# Implement the LRUCache class:

# LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
# int get(int key) Return the value of the key if the key exists, otherwise return -1.
# void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
# The functions get and put must each run in O(1) average time complexity.


class Node:
    def __init__(self,key,val):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.map = {}
        self.left = Node(0,0)
        self.right = Node(0,0)

        #connect nodes
        #LRU = Left, MRU = Right
        self.left.next = self.right
        self.right.prev = self.left

    # remove from list
    def remove(self, node):
        # mode is middle not
        prev = node.prev
        nxt = node.next

        prev.next = nxt
        nxt.prev = prev 

    # insert at right
    def insert(self, node):
        prev = self.right.prev
        nxt = self.right

        prev.next = node
        nxt.prev = node

        node.next, node.prev = nxt, prev

    def get(self, key: int) -> int:
        if key in self.map:
            # update to most recent
            self.remove(self.map[key])
            self.insert(self.map[key])
            return self.map[key].val
        return -1

        # everytime we get a val it should be updated to most recent


    def put(self, key: int, value: int) -> None:
        # if the key we put is in cache we should rm it and re-add it
        if key in self.map:
            self.remove(self.map[key])

        # now we can create a new node and add it to our map
        self.map[key] = Node(key, value)
        self.insert(self.map[key])

        # check capacity
        if len(self.map) > self.capacity:
            # remove from the list and delete the LRU from the map
            lru = self.left.next
            self.remove(lru)
            del self.map[lru.key]


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)



class LRUCache2:

    def __init__(self, capacity: int):
        self.capacity=capacity
        self.cache=OrderedDict()
        

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1

        value=self.cache.pop(key)
        self.cache[key]=value
        return value 

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.pop(key)

        elif len(self.cache)==self.capacity:
            self.cache.popitem(last=False)

        self.cache[key]=value          
