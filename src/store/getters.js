export default {
  getMyShow: state => {
    return state.myShow?'显示':'不显示';
  },
  getCount: state =>{
    return state.count;
  }
}
