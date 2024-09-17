import './App.css';
import { useState } from 'react'
import Form from './components/Form'

const teamList = [
  { name: 'Allie', email: 'ab@gmail.com', role: 'student' },
  { name: 'Ashley', email: 'al@gmail.com', role: 'student' },
  { name: 'Emma', email: 'esl@gmail.com', role: 'student' },
  { name: 'Brianne', email: 'bt@gmail.com', role: 'student' }
]
const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState(teamList)
  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <div className="App">

      <Form 
        values={members}
        update={updateForm}
        submit={submitForm}  
      />
      <h1>Team Members</h1>
      {
        members.map((member, idx) => {
          return <div key={idx}> 
          <p>{member.name} is a {member.role}</p>
          <p>{member.email}</p>
          </div>
          



        })
      }

    </div>
  );
}

export default App;
