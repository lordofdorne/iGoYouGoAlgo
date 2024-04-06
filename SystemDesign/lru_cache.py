# // Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

# // Implement the LRUCache class:

# // LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
# // int get(int key) Return the value of the key if the key exists, otherwise return -1.
# // void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

# // 1 Get the key / Check if the key exists

# // 2 Put the key

# // 3 Delete the first added key

# // The first two operations in O(1) time are provided by the standard hashmap, and the last one - by linked list.

# // There is a structure called ordered dictionary, it combines behind both hashmap and linked list. In Python this structure is called OrderedDict and in Java LinkedHashMap.

# // Time: O(1)
# // Space: O(capacity) since the space is used only for an ordered dictionary with at most capacity + 1 elements.

# //create map and capacity in class
# // get funciton, if no key in map return -1 and create value
# //delete key, set keyval, return val
# //put function, update map by delete and set, check for size less than capacity
# //if so create first item, delete firstItem 

class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:

    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {} # map key to node

        # Left=LRU, Right = MRU
        self.left, self.right = Node(), Node()
        self.left.next, self.right.prev = self.right, self.left
    
    # remove from list
    def remove(self, node):
        prev,nxt = node.prev, node.next
        prev.next, nxt.prev = nxt, prev

    
    #insert at right
    def insert(self, node):
        prev, nxt = self.right.prev, self.right
        prev.next = nxt.prev = node
        node.next, node.prev = nxt, prev

    def get(self, key: int) -> int:
        if key in self.cache:
            self.remove(self.cache[key])
            self.insert(self.cache[key])
            return self.cache[key].val
        return -1
        

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.remove(self.cache[key])
        self.cache[key] = Node(key, value)
        self.insert(self.cache[key])

        if len(self.cache) > self.cap:
            # remove from list and delete the LRU from cache
            lru = self.left.next
            self.remove(lru)
            del self.cache[lru.key]
        


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)