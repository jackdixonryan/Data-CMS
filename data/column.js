// Trying to modularize this bit of calculation away from the base code. So, the data folder can hold every method run on data now that we've pushed and pulled it to and from the server. 

module.exports = { 
  grabColumns: data => {
    const all = [];
    for (property in data) {
      all.push(property)
    }
    return all;
  },
  grabData: () => {

  }, 
  grabValueRange: () => {

  },
  grabStrings: () => {

  }
};
