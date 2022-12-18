// To run this file ==> tsc --watch index.ts
//? Another way is to run with ==> ts-node index.ts

//* Basic Types
let id: number = 5
let company: string = 'SaxX SuxX'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

//* Tuple
let person: [number, string, boolean] = [1, 'Bunny', true]

//* Tuple Array
let employees: [number, string][]
employees = [
  [1, 'Bhanu'],
  [2, 'Osama'],
  [3, 'Farhan'],
]

//* Union
let pid: string | number
pid = '22'

//* Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction1);

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

//* Objects
type User = {
  id: number
  name: string
}
const user: User = {
  id: 1,
  name: 'Osama',
}

//* Type Assertion
let cid: any = 1
//? let customerId = <number>cid                // Method 1
let customerId = cid as number                  // Method 2

//* Functions
function addNum(x: number, y: number): number {
  return x + y
}

//* Void
function log(message: string | number): void {
  console.log(message)
}

//* Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number                                  //* '?' represents, the value is optional
}                                               

const user1: UserInterface = {
  id: 1,
  name: 'Farhan',
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string                            // In this interface we defined type to method too
}

//* Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Bhanu Sunka')
const mike = new Person(2, 'Osama Shaikh')

//* Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Farhan', 'Developer')

//* Generics                                    // Tricky!
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['Bunny', 'Farhan', 'Osama'])

// strArray.push(1)                              // Throws error


//* Typescript CheatSheet ==> https://devhints.io/typescript 