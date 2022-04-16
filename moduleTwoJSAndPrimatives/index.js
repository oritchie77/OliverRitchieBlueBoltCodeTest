

// baseData 
const baseData = [
  {
    id: 1,
    value: "Value for ID 1"
  },
  {
    id: 2,
    value: "Value for ID 2"
  },
  {
    id: 3,
    value: "Value for ID 3"
  },
  {
    id: 4,
    value: "Value for ID 4"
  },
  {
    id: 5,
    value: "Value for ID 5"
  },
  {
    id: 6,
    value: "Value for ID 6"
  },
]

// Add on Data

const addOnData = {
  id: 20,
  value: "I am addon data"
}

console.log('JS Loaded and ready to log!')
console.log({baseData, addOnData})


document.querySelector('#log-baseData').addEventListener('click', () => {
  console.log(baseData)
})

document.querySelector('#log-baseData-in-reverse').addEventListener('click', () => {
  let reverseBaseDate = baseData.reverse()
  console.log(reverseBaseDate)
})

document.querySelector('#log-baseData-without-first-item').addEventListener('click', () => {
  let baseDataWithoutFirstItem = baseData
  baseDataWithoutFirstItem.shift()
  console.log(baseDataWithoutFirstItem)
})

document.querySelector('#log-each-baseData').addEventListener('click', () => {
  baseData.forEach((item) => {
    console.log(item)
  })
})

document.querySelector('#log-baseDate-addOnData').addEventListener('click', () => {
  let baseDataWithAddOnData= baseData
      baseDataWithAddOnData.unshift(addOnData)
  console.log(baseDataWithAddOnData)
})

document.querySelector('#log-baseData-update').addEventListener('click', () => {
  let baseDataWithAddOnDataInIndex2= baseData
  baseDataWithAddOnDataInIndex2.splice(2, 1, addOnData)
  console.log(baseDataWithAddOnDataInIndex2)
})


document.querySelector('#log-number-of-fox').addEventListener('click', () => {
  let string = document.querySelector('#stringText').innerHTML
  let array = string.split(' ')
  let numberOfFoxOccurrence = array.filter((word) => {
    if(word === 'fox') {
      return true
    } else {
      return false
    }
  })
  let numberOfFoxLength = numberOfFoxOccurrence.length
  console.log(numberOfFoxLength)
})

document.querySelector('#revers-words').addEventListener('click', () => {
  let string = document.querySelector('#stringText').innerHTML
  let paragraphArray = string.split(' ')
  let reverseParagraphArray = []
  paragraphArray.forEach((word) => {
    let wordArray = word.split('')
    let reversedWordArray = wordArray.reverse()
    let  reversedWord = reversedWordArray.join('')
    reverseParagraphArray.push(reversedWord)
  })
  let reversParagraphString = reverseParagraphArray.join(' ')
  document.querySelector("#stringText").innerHTML = reversParagraphString
})















