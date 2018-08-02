export default (state = { has_loaded: false }, action) => {
  switch (action.type) {
    case 'CONFIG_CHANGED':
      return Object.assign({ has_loaded: true }, action.data)
    default:
      return state
  }
}
