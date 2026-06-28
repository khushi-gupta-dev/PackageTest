class MergeSort {
    constructor(arr = []) {
        this.arr = arr;
    }

    merge(left, right) {

        let ans = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {

            if (left[i] <= right[j]) {
                ans.push(left[i++]);
            } else {
                ans.push(right[j++]);
            }
        }

        while (i < left.length)
            ans.push(left[i++]);

        while (j < right.length)
            ans.push(right[j++]);

        return ans;
    }

    mergeSort(arr) {

        if (arr.length <= 1)
            return arr;

        let mid = Math.floor(arr.length / 2);

        let left = this.mergeSort(arr.slice(0, mid));
        let right = this.mergeSort(arr.slice(mid));

        return this.merge(left, right);
    }

    sort() {
        this.arr = this.mergeSort(this.arr);
        return this.arr;
    }

    display() {
        console.log(this.arr);
    }
}

module.exports = MergeSort;