export const setModalC = value => ( //эта хрень принимает значение которое нужно установить
  {
    type: 'SET_SHOW_C', //согласно этому 
    show: value
  }
)

export const setModalT = value => (
  {
    type: 'SET_SHOW_T',
    show: value
  }
)