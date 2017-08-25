const initialState = {
  addCounterparty:false,
  addTransaction:false,  
};

export default function setShowModal(state = initialState, action) {
   switch (action.type) {
    
      case 'OPEN_MODAL': 
        return  {...state, [action.name]: action.show }

      case 'CLOSE_MODAL':
        return  {...state, [action.name]: action.show }

      default:
        return state;
  }
}