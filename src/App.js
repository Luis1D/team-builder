import React, {useState} from 'react';
import Header from './components/Header';
import Member from "./components/Member";
import Form from "./components/Form";
import './App.css';

function App() {
  // Sets up state for each member
  const [members, setMembers] = useState([]);

  // Submits a member to state
  const submitMember = member => setMembers([...members, member]);

  // Logic for updating a new member
  const update = newMember =>
    setMembers([...members.map(member => {
        if (member.id === newMember.id) {
          return newMember;
        }
        return member;
      })
    ]);

  // Returns App component with everything 
  return (
    <div className="App">

      <Header />

      <Form add={submitMember} />

      {/* MAPS OVER MEMBERS AND CREATES A CARD */}
      {members.map((member, i) => (
        <Member member={member} key={i} update={update} />
      ))}

    </div>
  );
}

export default App;
