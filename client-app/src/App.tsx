import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';


function App() {
  const [activities, setActivities] = useState([]); // we are initializing activities as an empty array

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => { // we are giving it a function using () =>
      console.log(response);
      setActivities(response.data);
    })
  }, []) // when we give it an empty array [] we are ensuring that it only runs once

  return (
    <div>
      <Header as ='h2' icon = 'users' content='Reactivities' />
        <List>
            {activities.map((activity: any) => (
              <List.Item key={activity.id}>
                {activity.title}
              </List.Item>
            ))}
        </List>
    </div>
  );
}

export default App;
