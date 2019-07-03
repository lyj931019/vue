const muntation = {
  changeMsg(state,msg){
    state.msg = msg;
  },
  changeShow(state){
    state.myShow = !state.myShow
  },
  increment (state) {
    state.count++
  }
};
export default muntation;
