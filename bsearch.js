function binarySearch(array, target) {
    if (array.length === 0) return -1;

    let mid = Math.floor(array.length / 2)
    if (target === array[mid]) {
        return mid
    }

    if (array[mid] > target) {
        return binarySearch(array.slice(0, mid), target)
    }

    let right = binarySearch(array.slice(mid + 1), target)
    return right === -1 ? -1 : right + mid + 1
}