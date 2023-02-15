import React from 'react';
import './App.css';

export type UserType = {name: string, surname: string};
const arrUsers: UserType[] = [];
for (let i = 0; i < 100; i++) {
  arrUsers.push({name: `John`, surname: `Doe`});
}


function App() {
  return <>
  {arrUsers.map((user, index) => {
        return (
            <div className="post">
              <div className="post__content">
                <strong>{index + 1}. {user.name} {user.surname}</strong>
              </div>
              </div>
        );
        })}
  </>
}

export default App;
