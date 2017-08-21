const initialState = {
  showModalCounterparty:false,
  showModalTransaction:false,  //начальное состояние
};

export default function setShowModal(state = initialState, action) {
   switch (action.type) {
    case 'SET_SHOW_C':
      console.log(action.show);
      return { ...state, showModalCounterparty: action.show }

    case 'SET_SHOW_T':
      return { ...state, showModalTransaction: action.show }

    default:
      return state;
  }
}