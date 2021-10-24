import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 28,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 24,
            skill: 'Vue'
        }
    ]

    const personList = persons.map((person) => <Person key={person.id} person={person}/>)

    return (<div>
        {personList}
    </div>)

    // const personList = persons.map((person) => {
    //     return <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}.</h2>
    // })  GOOD! BUT BETTER TO REFACTOR THE CODE BY MAKING A SEPARATE COMPONENT FOR EJX THEN USING THAT IN THE MAP METHOD 

    // const names = ['Bruce', 'Clark', 'Diana']
    // const nameList = names.map((name)=> <h2>{name}</h2>) // slightly better way
    // return (<div>{nameList}</div>)

        // <div>
        //     {/* <h2>{names[0]}</h2>
        //     <h2>{names[1]}</h2>           NOT A GOOD WAY :(
        //     <h2>{names[2]}</h2> */}
            
        // </div>
    
    // return (<div>{personList}</div>)
}

export default NameList
