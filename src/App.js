import './App.css';
import { useState } from 'react';
import loadable from '@loadable/component'
// import PersonDetails from './components/PersonDetails';

const PersonDetails = loadable(() => import('./components/PersonDetails'), { fallback: <div>Loading...</div> });

const persons = [
  {
    name: 'John',
    lastName: 'Doe',
    dob: '15th June 1990',
    place: 'London',
    contry: 'The Great Britain',
    contact: '123456'
  },
  {
    name: 'Jane',
    lastName: 'Doe',
    dob: '15th July 1990',
    place: 'London',
    contry: 'The Great Britain',
    contact: '654321'
  },
  {
    name: 'Frank',
    lastName: 'Doe',
    dob: '15th August 1992',
    place: 'New York',
    contry: 'USA',
    contact: '123456'
  },
  {
    name: 'Ram',
    lastName: 'Singh',
    dob: '15th June 1990',
    place: 'Lucknow',
    contry: 'India',
    contact: '123456'
  },
  {
    name: 'Jonny',
    lastName: 'Ake',
    dob: '15th June 1990',
    place: 'London',
    contry: 'The Great Britain',
    contact: '123766'
  }
];

function App() {
  const [person, setPerson] = useState(null);
  const handleClick = (person) => () => {
    setPerson(person);
  }

  const handleClose = () => {
    setPerson(null);
  }

  return (
    <div className="App">
      {persons.map(person => {
        return (
          <div key={person.name} className='person' onClick={handleClick(person)}>
            <span>{person.name}</span>
            {' '}
            <span>{person.lastName}</span>
          </div>
        )
      })}
      {person && <PersonDetails person={person} onClose={handleClose} />}
    </div>
  );
}

export default App;
