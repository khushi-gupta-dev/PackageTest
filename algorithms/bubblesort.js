class BubbleSort {
    constructor(arr = []) {
        this.arr = arr;
    }

    sort() {
        let n = this.arr.length;

        for (let i = 0; i < n - 1; i++) {

            let swapped = false;

            for (let j = 0; j < n - i - 1; j++) {

                if (this.arr[j] > this.arr[j + 1]) {
                    [this.arr[j], this.arr[j + 1]] =
                    [this.arr[j + 1], this.arr[j]];

                    swapped = true;
                }
            }

            if (!swapped) break;
        }

        return this.arr;
    }

    display() {
        console.log(this.arr);
    }
}

module.exports = BubbleSort;