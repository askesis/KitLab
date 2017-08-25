export const openModal = name =>({
  type : 'OPEN_MODAL',
  name : name,
  show : true,
})

export const closeModal = name =>({
  type : 'CLOSE_MODAL',
  name : name,
  show : false,
})