class Heap {
    constructor(cmp) {
        this.arr = [];
        this.comparator = cmp;
    }

    swap(i, j) {
        [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
    }

    // Insert
    push(val) {
        this.arr.push(val);
        this.upHeapify(this.arr.length - 1);
    }

    upHeapify(idx) {
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);

            if (this.comparator(this.arr[idx], this.arr[parent])) {
                this.swap(idx, parent);
                idx = parent;
            } else {
                break;
            }
        }
    }

    // Remove Root
    pop() {
        if (this.arr.length === 0) return null;

        this.swap(0, this.arr.length - 1);

        const removed = this.arr.pop();

        this.downHeapify(0);

        return removed;
    }

    downHeapify(idx) {
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let best = idx;

            if (
                left < this.arr.length &&
                this.comparator(this.arr[left], this.arr[best])
            ) {
                best = left;
            }

            if (
                right < this.arr.length &&
                this.comparator(this.arr[right], this.arr[best])
            ) {
                best = right;
            }

            if (best === idx) break;

            this.swap(idx, best);
            idx = best;
        }
    }

    peek() {
        return this.arr.length ? this.arr[0] : null;
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


module.exports = Heap; 