class QuickSort {

    constructor(arr = []) {
        this.arr = arr;
    }

    swap(i, j) {
        [this.arr[i], this.arr[j]] =
        [this.arr[j], this.arr[i]];
    }

    partition(low, high) {

        let pivot = this.arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {

            if (this.arr[j] <= pivot) {
                i++;
                this.swap(i, j);
            }
        }

        this.swap(i + 1, high);

        return i + 1;
    }

    quickSort(low, high) {

        if (low < high) {

            let pivotIndex = this.partition(low, high);

            this.quickSort(low, pivotIndex - 1);
            this.quickSort(pivotIndex + 1, high);
        }
    }

    sort() {
        this.quickSort(0, this.arr.length - 1);
        return this.arr;
    }

    display() {
        console.log(this.arr);
    }
}

module.exports = QuickSort;