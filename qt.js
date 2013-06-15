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
    T &	front()                                                 // Do we need? Same as QList.first()
    void	pop_back()                                          // Do we need? Same as QList.removeLast()
    void	pop_front()                                         // Do we need? Same as QList.removeFirst()
    void	push_back(const T & value)                          // Do we need? Same as QList.append()
    void	push_front(const T & value)                         // Do we need? Same as QList.prepend()
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
    value: function(val) { this.push(val); }
});

// QList.at
Object.defineProperty(Array.prototype, "at", {
    value: function(idx) {
        if(idx >= 0 && idx < this.length) {
            return this[idx];
        } else {
            throw new Error('Invalid index');
        }
    }
});

// QList.clear
Object.defineProperty(Array.prototype, "clear", {
    value: function() { this.length = 0; }
});

// QList.contains
Object.defineProperty(Array.prototype, "contains", {
    value: function(val) { return this.indexOf(val) !== -1; }
});

// QList.count
Object.defineProperty(Array.prototype, "count", {
    value: function(val) {
        if(val) { return this.filter(function(item){ return item == val; }).length }
        return this.length;
    }
});

// QList.empty
Object.defineProperty(Array.prototype, "empty", {
    value: function() { return this.length == 0 }
});

// QList.endsWith
Object.defineProperty(Array.prototype, "endsWith", {
    value: function(val) { return this[this.length - 1] == val }
});

// QList.first
Object.defineProperty(Array.prototype, "first", {
    value: function() { return this[0]; }
});

// QList.insert
Object.defineProperty(Array.prototype, "insert", {
    value: function(idx, val) {
        this.splice(idx, 0, val);
    }
});

// QList.isEmpty
Object.defineProperty(Array.prototype, "isEmpty", {
    value: function() { return this.length == 0 }
});

// QList.last
Object.defineProperty(Array.prototype, "last", {
    value: function() { return this[this.length - 1]; }
});

// QList.mid
Object.defineProperty(Array.prototype, "mid", {
    value: function(pos, length) {
        var end;
        length = length || -1;

        if(length != -1) {
            end = pos + length;
        }

        return this.slice(pos, end);
    }
});

// QList.move
Object.defineProperty(Array.prototype, "move", {
    value: function(from, to) {
        var item = this.splice(from, 1)[0];
        this.splice(to, 0, item);
    }
});

// QList.prepend
Object.defineProperty(Array.prototype, "prepend", {
    value: function(val) {
        this.splice(0, 0, val);
    }
});

// QList.removeAll
Object.defineProperty(Array.prototype, "removeAll", {
    value: function(val) {
        for(var idx = 0; idx < this.length; idx++) {
            if(this[idx] == val) {
                this.splice(idx, 1);
            }
        }
    }
});

// ---------------------------------------------------------------------------------------------------------------------