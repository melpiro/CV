
window.addEventListener('load', () => {

    console.log("Hello World");
    let rangeInputs = document.querySelectorAll('input[type="range"]')
    rangeInputs.forEach(input => {
        let e = { target: input }
        handleInputChange(e)
        // input.addEventListener('input', handleInputChange)
    })
});


function getLinearGradientCSS(ratio, leftColor, rightColor) {
    return [
      '-webkit-gradient(',
      'linear, ',
      'left top, ',
      'right top, ',
      'color-stop(' + ratio + ', ' + leftColor + '), ',
      'color-stop(' + ratio + ', ' + rightColor + ')',
      ')'
    ].join('');
  }

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  console.log(val, min, max);
  let ratio = (val - min) / (max - min)

  target.style.backgroundImage = getLinearGradientCSS(val / (max - min), '#99ccaf', '#eeeeee')

}

