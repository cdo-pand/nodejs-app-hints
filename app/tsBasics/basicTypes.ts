// @ts-ignore
let a: number = 5
// @ts-ignore
let b: string = 'abc'
// @ts-ignore
let c: string = '4'
// @ts-ignore
let d = true

// @ts-ignore
let e: number = a + Number(b)

let names: string[] = ['a', 'b', 'c']
let ages: number[] = [20, 25, 18]

let tup: [number, string] = [2, 'dasda']

// not use
let f: any = 3
f = ''
f = true

let anyArr: any[] = ['fsds', 3, true]

// function
function greet(name: string): string {
  return name + 'Hi'
}

// anonymous function
names.map((x: string) => x)

function coordinates(coord: { lat: number, long?: number }) {
}
