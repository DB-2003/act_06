import React, { useState } from 'react';
import CardActDog from './CardActDog.js'

function EndPointCall() {
  const [activity, setActivity] = useState('');
  const [dogImage, setDogImage] = useState('');


  const fetchActivity = async () => {
    const activityResponse = await fetch('http://www.boredapi.com/api/activity/');
    const activityData = await activityResponse.json();
    console.log(activityData)
    setActivity(activityData);

    const dogResponse = await fetch('https://dog.ceo/api/breeds/image/random');
    const dogData = await dogResponse.json();
    console.log(dogData)
    setDogImage(dogData);
  };

  return (
    <div>
      <h1>Bored App</h1>
      <button onClick={fetchActivity}>Get Activity</button>
      {activity && dogImage && <CardActDog image={dogImage.message} activity={activity.activity} />}
    </div>
  );
}

export default EndPointCall;
