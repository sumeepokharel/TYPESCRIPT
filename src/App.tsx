
import {TNumber} from './type'
function App() {
  //JS goes here
  //Type inference
//Type Annotation
  let myCountry : TNumber
  myCountry='USA'
  myCountry='India'
  myCountry='Nepal'


  let numbers:(number| string) []
   numbers=[10,20,'30']


   //objects
   interface  IPerson {
    age: number
    name: String
    favNumber?: number
   }

   let person: IPerson
   person ={
    age:20,
    name: 'Alex',
   }
   person={
    age: 40,
    name: 'Gorakh',
    favNumber:7
   }
  return (
    <>
    <div>{myCountry}</div>
    <div>{numbers}</div>
  
    </>
  )
}

export default App
