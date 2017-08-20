import { setModalC, setModalT} from '../actions/modalMenuActions';

const initialState = {
  showModalCounterparty:false,
  showModalTransaction:false,
};

export default function userstate(state = initialState, action) {
   switch (action.type) {
    case 'SET_SHOW_C':
      return { ...state, showModalCounterparty: action.value }

    case 'SET_SHOW_T':
      return { ...state, showModalTransaction: action.value }

    default:
      return state;
  }
}