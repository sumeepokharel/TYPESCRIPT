
import styles from './App.module.css';

function App() {
  // type annotation: string
  let myName: string;
  myName = 'sumitra';

  // type annotation: number
  let myNumber: number;
myNumber=20

  // accepting multiple types (using | union operator)
  let age: string | number = 'Forty';
  age = 40;

  // to type Array for number only
  let numbers: number[];
  numbers = [10, 20, 30, 40, 50];

  // to type Array for number and String both
  let myFavNumber: (number | string)[];
  myFavNumber = [10, 'twenty', 'ten', 30];

  // typescript Boolean
  let isPresent: boolean = true;

  // typescript for object
  interface IPerson {
    age: number;
    name: string;
  }
  let Person: IPerson;
  Person = {
    age: 40,
    name: 'Joanna',
  };

  return (
    <>

    <div className={styles.container}>
        <h2> TypeScript</h2>
        <div className={styles.myName}>{myName}</div>
      <div className={styles.myNumber}>{myNumber}</div>
      <div className={styles.age}>{age}</div>
      <div className={styles.numbers}>{numbers.join(', ')}</div>
      <div className={styles.myFavNumber}>{myFavNumber.join(', ')}</div>
      <div className={styles.isPresent}>{isPresent.toString()}</div>
      <div className={styles.person}>{Person.age}</div>
      <div className={styles.person}>{Person.name}</div>

    </div>
    </>
  );
}

export default App;
