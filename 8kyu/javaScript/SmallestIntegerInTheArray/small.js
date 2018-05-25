// My solution :

class SmallestIntegerFinder {
  findSmallestInt(___) {
    return ___.sort((a,b)=>a-b)[0]
  }
}

// Top rated solution : 

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
