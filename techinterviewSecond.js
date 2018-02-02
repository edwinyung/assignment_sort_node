//hash table
class HashTable {
  constructor(input) {
    this.input = input;
    this.obj = {};
  }

  hash() {
    let key = "abcdefghijklmnopqrstuvxyz";
    if (!this.obj[this.input[0]]) this.obj[this.input[0]] = []; //"a" = []
  }

  store() {
    this.hash();
    this.obj[this.input[0]].push(this.input); // {"a": [{apple: "healthy"}]}
  }

  retrieve(word) {
    this.obj[word[0]] = 
  }
}

//test
let testInstance = new HashTable({ apple: "healthy" });
console.log(testInstance.store());
console.log(testInstance.retrieve(apple));
