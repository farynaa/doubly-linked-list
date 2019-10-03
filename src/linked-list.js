const Node = require('./node');

class LinkedList {
    constructor() {
        this.list = [];
        this.length = 0;
        this._head = new Node();
        this._tail = new Node();
    }

    append(data) {
        this.list.push(new Node(data, null, null));
        this.length = this.list.length;
        console.log('append: ', this.list);
        return this
    }

    head() {
        if (this.list.length !== 0) {
            this._tail = this.list[0].data;
            return this._tail;
        } else {
            return null;
        }
    }

    tail() {
        if (this.list.length !== 0) {
            this._head = this.list.slice(-1)[0].data;
            return this._head;
        } else {
            return null
        }
    }

    at(index) {
        return this.list[index].data;
    }

    insertAt(index, data) {
        this.list = this.list.slice(0, index).concat([new Node(data, null, null)]).concat(this.list.slice(index));
        this.length = this.list.length;
        console.log('insertat: ', this.list);
        return this
    }

    isEmpty() {
        if (this.list.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.list = [];
        this.length = this.list.length;
        console.log('clear: ', this.list);
        return this
    }

    deleteAt(index) {
        this.list = this.list.slice(0, index).concat(this.list.slice(index + 1));
        this.length = this.list.length;
        console.log('deleteat: ', this.list);
        return this
    }

    reverse() {
        this.list = this.list.reverse();
        [this._head, this._tail] = [this._tail, this._head];
        console.log('reverse: ', this.list);
        return this
    }

    indexOf(data) {
        return this.list.reduce((c, v, i) => v.data === data ? i : c, -1)
    }
}

let list = new LinkedList();

function fn() {
    list.append(4).reverse().deleteAt(0).clear().insertAt(0, 3);
}

console.log(fn())//.to.not.throw();

module.exports = LinkedList;
