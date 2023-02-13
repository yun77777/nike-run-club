export const validateInput = (input, typeOfMetric) => {
  var rgx
  if(typeOfMetric == 'Distance')
    rgx = /^[0-9]{0,2}\.{1}[0-9]{0,2}?$/
  else
    rgx = /^[0-9]{0,2}\:{1}[0-9]{0,2}?$/
  return input.match(rgx)
}