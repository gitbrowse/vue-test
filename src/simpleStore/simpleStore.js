
const simpleStore = {
  state: {
    number: 111,
  },
  actions: {
    setNumberAction(val) {
      console.log('setCount oldVal newVal', this.state.number, val);
      this.state.number = val;
    }
  }
}

export default simpleStore;