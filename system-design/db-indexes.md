# Indexes

When doing proportional work on the number of rows in a table, that equals O(n). This is for both
reads and writes.

One way to get O(1) write is to insert new updates to the bottom of the table rather than trying
to traverse over the table to find the item to update. This comes at a cost of increasing
the table as a whole and thus increasing read time complexity.

Often, we care more about read speed than write speed. O(n) is often not good enough. This is
where indexes can help.

Indexes are a way to organize our data. 
- Read speeds increase and write speeds decrease, for a specific key
- Can have multiple indexes on a single field.
- We can find rows with a specific key value.
- We can use a range query such as "show row with names between A and B"


## Hash Indexes

Use a hash function that spits out a hash key to that is the pointer to the input of the function
This allows us to have O(1) constant time for reads and writes.

h("key") -> value

If two things are hashed to the same value, this is a collision. One way to deal with this is to
use a linked list. Another way is to look for the next available spot in the hash map.

Disadvantages:
- Bad on disk. If the hash function distributes items evenly on disk, then it will take longer
for the physical mechanism to find the item on disk. Because of this, hash indexes are always kept in memory.
- Keeping things in memory (RAM) is expensive, so there is less of it. Keys have to fit in RAM.
- RAM is not durable. Use a Write Ahead Log (WAL) to mitigate this.
- Can't do range queries since each hash value is unique and to do a range query we would need
to iterate over each item. Use a binary search tree instead.

## Write Ahead Log

A list of all changes to database. It is stored on disk, sequentially. First, write to write ahead log, then change the hash index.
Now we have durability for the hash index. WAL is used in multiple different types of indexes.

