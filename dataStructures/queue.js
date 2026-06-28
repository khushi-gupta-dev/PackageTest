class Queue {
    constructor() {
        this.arr = [];
    }

    // Insert at rear
    enqueue(val) {
        this.arr.push(val);
    }

    // Remove from front
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        return this.arr.shift();
    }

    // Front element
    front() {
        if (this.isEmpty()) {
            return null;
        }

        return this.arr[0];
    }

    // Rear element
    rear() {
        if (this.isEmpty()) {
            return null;
        }

        return this.arr[this.arr.length - 1];
    }

    size() {
        return this.arr.length;
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    display() {
        console.log(this.arr);
    }
}

module.exports = Queue;