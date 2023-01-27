import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Micheal',
            age: 42,
            skill: 'Managing a Paper Company'
        },
            
        {
            id: 2,
            name: 'Dwight',
            age: 38,
            skill: 'Beet farm'
        },

        {
            id: 3,
            name: 'Jim',
            age: 30,
            skill: 'Pranking Dwight'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return <div>{personList}</div>
}

export default NameList