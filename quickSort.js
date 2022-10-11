function swap(arr, rigth, left) {
    let temp = arr[rigth];
    arr[rigth] = arr[left];
    arr[left] = temp;
}

function partition(arr, rigth, left) {
    let r = rigth;
    let l = left;
    let pivot = arr[Math.floor((r + l) / 2)].score;
    while (r <= l) {
        while (arr[r].score < pivot) {
            r++;
        }

        while (arr[l].score > pivot) {
            l--;
        }

        if (r <= l) {
            swap(arr, r, l)
            r++;
            l--;
        }
    }

    return r;
}

function quickSort(arr, rigth, left) {
    if (arr.length > 1) {
        let index = partition(arr, rigth, left);
        if (rigth < index - 1) {
            quickSort(arr, rigth, index - 1);
        }
        if (index < left) {
            quickSort(arr, index, left);
        }
    }
    return arr;
}

module.exports = { quickSort };
