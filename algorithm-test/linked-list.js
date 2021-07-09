// QUESTION TWO

/**
 * A list is an ordered sequence of data. Each data item stored in a list is called an element.
 *
 * Lists are especially useful if we don’t have to perform searches on the items in the list or put them into some type of sorted order
 *
 */
class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements this.clear = clear;
  }

  append(element) {
    this.dataStore[this.listSize++] = element;
  }
  length() {
    // return this.dataStore.length;
    return this.listSize;
  }

  /**
   *
   * @param {*} element element you're searching for
   * @returns the index of the element or -1 if nothing is found
   */
  find(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) return i;
    }
    return -1;
  }
  /**
   *
   * @param {*} element the element you want to remove, provided it's in the datastore
   * @returns true if the element is available and is successfully removed
   */
  remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }
  /**
   *
   * @returns Array of all the datasets
   */
  toString() {
    return this.dataStore;
  }
  /**
   *
   * @param {*} element The new element you want to add e.g "music", "word"
   * @param {*} after the existing element you want to add the new element on the Link list
   * @returns
   */
  insert(element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    }

    return false;
  }
  /**
   * This method clears the dataStore and reset the listSize and position to 0
   */
  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }
  /**
   *
   * @param {*} element the element you are searching for, provided it's in the datastore
   * @returns @true if the element is available or @false if it'd not
   */
  contains(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
        return true;
      }
    }
    return false;
  }
  /**
   * this method helps traverse the dataStore all through to the @front of the datasets
   */
  front() {
    this.pos = 0;
  }
  /**
   * this method helps traverse the dataStore all through to the @end of the datasets
   */
  end() {
    this.pos = this.listSize - 1;
  }

  /**
   * this method helps traverse the dataStore to get the previous element in the datasets
   */
  prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }
  /**
   * this method helps traverse the dataStore to get the next element in the datasets
   */
  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }
  /**
   *
   * @returns Current position of the datasets
   */
  currPos() {
    return this.pos;
  }
  /**
   * this method helps traverse the dataStore to get to any available postion in the dataStore
   */
  moveTo(position) {
    this.pos = position;
  }
  /**
   *
   * @returns Would return an element at the current position, provided you called the next() or the prev() methods on the object or it return the dafault positon at 0
   */
  getElement() {
    return this.dataStore[this.pos];
  }
}

module.exports = List;

/**
 * Uncomment this to run the Object or supply your values.
 */
// const names = new List;
// names.append("Clayton");
// names.append("Raymond");
// names.append("Cynthia");
// names.append("Jennifer");
// names.append("Bryan");
// names.append("Danny");

// names.front();
// console.log(names.getElement()); // displays Clayton

// names.next();
// console.log(names.getElement()); // displays Raymond

// names.next();
// names.next();
// names.prev();
// console.log(names.getElement()); // displays Cynthia

// console.log(list.toString());
// console.log(list.remove('moria'));
// console.log(list.listSize);
