// ---------------------------------------------------------------------------------------------------------------------
// This script implements QList, QString and QMap styles apis on top of javascript's Array, String, and Object types.
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

// QList.removeAt
Object.defineProperty(Array.prototype, "removeAt", {
    value: function(pos) {
        this.splice(pos, 1);
    }
});

// QList.removeFirst
Object.defineProperty(Array.prototype, "removeFirst", {
    value: function() {
        this.splice(0, 1);
    }
});

// QList.removeLast
Object.defineProperty(Array.prototype, "removeLast", {
    value: function() {
        this.splice(this.length - 1, 1);
    }
});

// QList.removeOne
Object.defineProperty(Array.prototype, "removeOne", {
    value: function(val) {
        for(var idx = 0; idx < this.length; idx++) {
            if(this[idx] == val) {
                this.splice(idx, 1);
                return true;
            }
        }

        return false;
    }
});

// QList.replace
Object.defineProperty(Array.prototype, "replace", {
    value: function(pos, val) {
        this.splice(pos, 1, val);
    }
});

// QList.size
Object.defineProperty(Array.prototype, "size", {
    value: function() {
        return this.length;
    }
});

// QList.startsWith
Object.defineProperty(Array.prototype, "startsWith", {
    value: function(val) {
        return this[0] == val;
    }
});

// QList.swap
Object.defineProperty(Array.prototype, "swap", {
    value: function(i, j) {
        if(Array.isArray(i))
        {
            var other = this.splice.apply(this, [0, this.length].concat(i));
            i.splice.apply(i, [0, i.length].concat(other));
        } else {
            var elem = this[i];
            this[i] = this[j];
            this[j] = elem;
        }
    }
});

// QList.takeAt
Object.defineProperty(Array.prototype, "takeAt", {
    value: function(idx) {
        return this.splice(idx, 1)[0];
    }
});

// QList.takeFirst
Object.defineProperty(Array.prototype, "takeFirst", {
    value: function() {
        return this.splice(0, 1)[0];
    }
});

// QList.takeLast
Object.defineProperty(Array.prototype, "takeLast", {
    value: function() {
        return this.splice(this.length - 1, 1)[0];
    }
});

// QList.value
Object.defineProperty(Array.prototype, "value", {
    value: function(idx, def) {
        if(idx >= 0 && idx < this.length) {
            return this[idx];
        } else {
            return def;
        }
    }
});

// ---------------------------------------------------------------------------------------------------------------------
// QMap API
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
    int	count(const Key & key) const
    int	count() const
    bool	empty() const
    QPair<iterator, iterator>	equal_range(const Key & key)
    iterator	erase(iterator pos)
    iterator	find(const Key & key)
    const_iterator	find(const Key & key) const
    iterator	insert(const Key & key, const T & value)
    iterator	insertMulti(const Key & key, const T & value)
    bool	isEmpty() const
    QList<Key>	keys() const
    QList<Key>	keys(const T & value) const
    iterator	lowerBound(const Key & key)
    const_iterator	lowerBound(const Key & key) const
    int	remove(const Key & key)
    int	size() const
    void	swap(QMap<Key, T> & other)
    T	take(const Key & key)
    std::map<Key, T>	toStdMap() const
    QList<Key>	uniqueKeys() const
    QMap<Key, T> &	unite(const QMap<Key, T> & other)
    iterator	upperBound(const Key & key)
    const_iterator	upperBound(const Key & key) const
    const T	value(const Key & key, const T & defaultValue = T()) const
    QList<T>	values() const
    QList<T>	values(const Key & key) const

 */

// QMap.clear()
Object.defineProperty(Object.prototype, "clear", {
    value: function() {
        for (k in this) {
            if (this.hasOwnProperty(k)) {
                delete this[k];
            }
        }
    }
});

// QMap.contains()
Object.defineProperty(Object.prototype, "contains", {
    value: function() {
        for(var k in this) {
            if(this.hasOwnProperty(k) && this[k] === val) {
                return true;
            }
        }
        return false;
    }
});

// QMap.count()
Object.defineProperty(Object.prototype, "count", {
    value: function() {
        var count = 0;
        for (var k in this) {
            if (this.hasOwnProperty(k)) {
                ++count;
            }
        }
        return count;
    }
});

// ---------------------------------------------------------------------------------------------------------------------