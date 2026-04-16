const form = document.querySelector('form')
/* -> if we write here
     then it will give -> this usecase will give you empty
 const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)
*/

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    // check

    if(height === '' || height < 0 || isNaN(height)){
      results.innerHTML = `Please give a valid height ${height}`
    }
    const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    // check

    if(height === '' || height < 0 || isNaN(height)){
      results.innerHTML = `Please give a valid height ${height}`
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
      results.innerHTML = `Please give a valid height ${weight}`
    }
    else{
       // Calculate BMI here
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
   if(bmi < 18.5){
            results.innerHTML = `Underweight: ${bmi}`
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
            results.innerHTML = `Normal range: ${bmi}`
        }
        else {
            results.innerHTML = `Overweight: ${bmi}`
        }
    }
    
})
    
})