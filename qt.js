// ---------------------------------------------------------------------------------------------------------------------
// This script implements QList, QString and QHash styles apis on top of javascript's Array, String, and Object types.
// It should be noted that this modifies the prototypes of the built-in classes, and may cause issue with some third
// party libraries.
//
// This is intended for use in QML, however, it is tested inside a normal web browser, and therefore should work there
// as well.
//
// @module qt.js
// ---------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------
// QList API
//
// Incompatibilities:
// ==================
//
//      QList.length() - This would shadow Array.length, which would break a large percentage of javascript libraries. As
//          such, we don't implement this. Use the `Array.length` property or `size()` instead.
//
// ---------------------------------------------------------------------------------------------------------------------

/*
    API To Be Implemented:                                      Notes:
    ==============================                              =======================================
    T &	back()                                                  // Do we need? Same as QList.last()
    int	count(const T & value) const                            // use Array.filter
    int	count() const                                           // Same function as above; just check value, and short-circuit to array.length
    bool	empty() const                                       // Same as QList.isEmpty()
    bool	endsWith(const T & value) const                     // return array[array.length] == value;
    T &	first()                                                 // return array[0];
    T &	front()                                                 // Do we need? Same as QList.first()
    void	insert(int i, const T & value)                      // use Array.splice.
    bool	isEmpty() const                                     // return array.length == 0;
    T &	last()                                                  // return array[array.length];
    int	lastIndexOf(const T & value, int from = -1) const       // Should use a traditional for loop for speed.
    QList<T>	mid(int pos, int length = -1) const             // Basically Array.splice;
    void	move(int from, int to)                              // Can be implemented with Array.splice
    void	pop_back()                                          // Do we need? Same as QList.removeLast()
    void	pop_front()                                         // Do we need? Same as QList.removeFirst()
    void	prepend(const T & value)                            // Use Array.splice
    void	push_back(const T & value)                          // Do we need? Same as QList.append()
    void	push_front(const T & value)                         // Do we need? Same as QList.append()
    int	removeAll(const T & value)                              // Use a traditional for loop for speed.
    void	removeAt(int i)                                     // Use Array.splice()
    void	removeFirst()                                       // Use Array.splice()
    void	removeLast()                                        // Use Array.splice()
    bool	removeOne(const T & value)                          // Use traditional for loop, Array.splice
    void	replace(int i, const T & value)                     // Use Array.splice()
    int	size() const                                            // return array.length;
    bool	startsWith(const T & value) const                   // return array[0] == value;
    void	swap(QList<T> & other)                              // Possibly with splice? Weird
    void	swap(int i, int j)                                  // Totally doable with splice, but needs to be an overload of above. Use Array.isArray() to test.
    T	takeAt(int i)                                           // Use Array.splice()
    T	takeFirst()                                             // Use Array.splice()
    T	takeLast()                                              // Use Array.splice()
    QSet<T>	toSet() const                                       // Since we don't have sets, not sure how much sense this makes? Perhaps, 'removeDuplicates'?
    T	value(int i) const                                      // Just like array[i]; we don't have the concept of a 'default constructed value'
    T	value(int i, const T & defaultValue) const              // Just like array[i], but we return default if it doesn't exist.


 */

// QList.append
Object.defineProperty(Array.prototype, "append", {
    value: function(e) { this.push(e); }
});

// QList.at
Object.defineProperty(Array.prototype, "at", {
    value: function(i) { this[i]; }
});

// QList.clear
Object.defineProperty(Array.prototype, "clear", {
    value: function() { this.length = 0; }
});

// QList.contains
Object.defineProperty(Array.prototype, "contains", {
    value: function(e) { return this.indexOf(e) !== -1; }
});

// ---------------------------------------------------------------------------------------------------------------------