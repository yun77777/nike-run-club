export const validateInput = (input) => {
  var rgx = /^[0-9]{1,}*\.?[0-9]?$/
  return input.match(rgx)
}