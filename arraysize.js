//https://stackoverflow.com/questions/32054170/how-to-resize-an-array

function resize(arr, newSize, defaultValue) {
    while(newSize > arr.length)
        arr.push(defaultValue);
    arr.length = newSize;
}

Array.prototype.resize = function(newSize, defaultValue) {
    while(newSize > this.length)
        this.push(defaultValue);
    this.length = newSize;
}