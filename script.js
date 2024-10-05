const button = document.querySelector('button')
let resultdiv = document. createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)
button.addEventListener('click',displayStats)
function displayStats(){ 
    const input = document.getElementById("input")
    const city = input.options[input.selectedIndex].value
    let population = 0, literacyRate = 0, language =''
    switch(city){
        case 'Bengaluru':
            population = 5464646
            literacyRate = 34.55
            language = 'Kannada'
            break
        case 'Pollachi':
            population = 56777777
            literacyRate = 32.9
            language = 'Tamil'
            break
         case 'Mumbai':
            population = 4545455
            literacyRate = 56.57
            language = 'Marathi'
            break    
        case 'Delhi':
            population = 7678878
            literacyRate = 76.7
            language = 'Hindi'
            break    

    }
    let text = `The Indian city of ${city} has a population of${population}. Language spoken is ${language} and literacy rate is${literacyRate}%`
    console.log(text)
    
    document.getElementById('result').innerHTML = text
}