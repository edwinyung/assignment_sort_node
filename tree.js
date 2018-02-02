// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

var _ = require('underscore');

var evens = _.reject([1, 2, 3, 4, 5, 6], (num) => num % 2 != 0);

console.log("Evens");
console.log(evens);


/* 
Your last HTML: JS/HTML/CSS code is saved below:

<!-- 
Your last JavaScript (Node) code is saved below:
['Alice', 'Bob', 'James', 'Alice', 'Steven']

//functionally, filter 
//iteratively, nested for loop
//simple hash object

let uniqueArr = (arr) => {
  let obj = {};
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 1
    //if (obj[arr[i]]) {obj[arr[i]]++}
    //else {obj[arr[i]] = 1}
  }
  
  console.log(obj)
  
  for (let key in obj) {
    if (obj[key]) {newArr.push(key)}
  }
  
  return newArr
}


console.log(uniqueArr(['Alice', 'Alice', 'Steven'])==['Alice','Steven']) //=>true
console.log(uniqueArr(['Alice', 'Alice', 'Steven']))
console.log(uniqueArr(['Alice', 'Bob', 'James', 'Alice', 'Steven'])) 
//console.log(uniqueArr(['Alice', 'Bob', 'James', 'Alice', 'Steven'])===['Alice', Bob', 'James', 'Steven']) //=>true

// get_links(url:string) -> Array<string>
//returns all the links from that particular passed in URL

//task: get all the links from willing.com
//click through the entire site
//willing.com/blog
//willing.com/about

//output: array of all possible links in tree

*/

class Node {
  constructor(link) {
  this.link = link
  this.parent = null
  children() {
    return get_links(this.link)
  }
}

/*                      willing.com
    willing.com/about               /blog     /team
    
  stuff   moreStuff otherStuff  
*/ 

class Tree {
  constructor(root_link) {
    this.root = new Node(root_link)
    
  }
  
  traverse() {
    
    let totalLinks = []
    let queue = []
    
    queue.push(this.root)
    
    //let node = new Node()
    
    while (queue.length > 0) {
      let currentNode = queue.pop()
      
      totalLinks.push(currentNode.link)
      
      let children = currentNode.children()
      for (let i = 0; i < children.length; i++ ) {
        queue.unshift(children[i].link)
      }

    }
    
    return totalLinks;
  }
  
  
  
  
}

t = new Tree('willing.com')


testLinkTraversal = new Tree('www.willing.com')
testLinkTraversal.traverse() //=> output is the array of possible links in the tree