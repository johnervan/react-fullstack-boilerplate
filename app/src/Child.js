import React from 'react'

let counter = 0

const Child = React.memo(({ firstName, lastName }) => {
  console.log(counter += 1)
  return <div>Your name is {firstName} {lastName} </div>
})

// const Child = ({ firstName, lastName }) => {
//   console.log(counter += 1)
//   return <div>Your name is {firstName} {lastName} </div>
// }

export default Child
