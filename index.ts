let name: string = "Gisele"
let age: number = 39
let learning: boolean = true

let classes: string[] = ['typescript', 'c#', 'presenting']

// console.log(name, age, learning)
// console.table(classes)

enum TaxesForms {
    StandardTaxes=1040,
    ChildCredit="647",
    CryptCredit=2055,

}
// console.log(TaxesForms.ChildCredit)

let code: string | number = '11'

code = 11

// console.log(code)

let cars: string[] = ['BMW', 'Porsche', 'Rolls Royce', 'Lamborghini']

// return the value of the element in the array at position index
function findIndex(index: number, array: string[]) : string {
    return array[index]
}

// doesn't return anything, hence 'void'
function findIndex1(index: number, array: string[]) : void {
    console.log(array[index])
}

// console.log(findIndex(1, cars))
// findIndex1(1, cars)

// let classroom: any = {
//     name: 'typescript',
//     duration: 6,
//     boring: false
// }

interface classroom {
    name: string,       // required
    duration: number,   // required
    boring: boolean,    // required
    room?: string       // optional
}

let thisClassroom: classroom | null = {
    name: 'typescript',
    duration: 6,
    boring: false,
    room: 'Boca Code classroom'
}
// console.log(thisClassroom)

let thatClassroom: classroom = {
    name: 'javascript',
    duration: 2,
    boring: true
}