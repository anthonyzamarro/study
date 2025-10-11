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