// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// const bmi = (weight, height) => {
//     let bmiValue = weight/height**2
//     let string = ""
//     switch(true) {
//         case bmiValue <= 18.5:
//             string = "Underweight"
//             break;
//         case bmiValue <= 25:
//             string = "Normal"
//             break;
//         case bmiValue <= 30:
//             string = "Overweight"
//             break;
//         case bmiValue > 30:
//             string = "Obese"
//             break;
//     }
//     return string
// }

const bmi = (weight, height) => {
    let bmiValue = weight / (height ** 2)
    
    const bmiCategories = [
        { label: "Underweight", maxBmi: 18.5 },
        { label: "Normal", maxBmi: 25 },
        { label: "Overweight", maxBmi: 30 },
        { label: "Obese", maxBmi: Infinity }
    ]

    for (const category of bmiCategories) {
        if (bmiValue <= category.maxBmi) {
            return category.label
        }
    }
}


console.log(bmi(195,1.5))