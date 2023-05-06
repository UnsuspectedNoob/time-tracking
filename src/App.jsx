import { useState } from 'react';
import {  jeremy } from './assets/images';
import TimeButton from './components/TimeButton';
import TimedTask from './components/TimedTask';
import data from './assets/constants';

const App = () => {
  const array =   ['Daily', 'Weekly', 'Monthly'];
  const [dayState, setDayState] = useState('Daily');

  return (
    <div className='px-6 py-20 lg:flex justify-between'>

      {/* Report for Person */}
      <div className='bg-neutral-d-blue rounded-2xl pb-6 flex flex-col gap-6 mb-8 lg:mb-0 lg:w-1/4'>

        {/* Image and Details Container */}
        <div className='bg-primary-blue flex maintain items-center p-7 gap-4 rounded-2xl lg:flex-col lg:items-start lg:px-9'>

          {/* Image */}
          <div className='bg-white rounded-full w-16 p-0.5 flex items-center justify-center'>
            <img src={jeremy} alt="profile-jeremy" className='w-full' />
          </div>

          {/* Person Details */}
          <div className=''>
            <p className='text-gray-300  text-sm'>Report for</p>

            <p className='text-2xl font-light text-white lg:text-4xl'>
              Jeremy Robson
            </p>
          </div>
        </div>

        {/* Container of Buttons */}
        <div className='flex justify-between items-center px-8 maintain lg:flex-col lg:items-start lg:justify-evenly lg:space-y-1'>
          {array.map((element, index) => (
            <TimeButton
              key={index}
              time={element}
              dayState={dayState}
              setDayState={setDayState}
            />
          ))}
        </div>
      </div>

      {/* List of Timed Tasks */}
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {
          data.map((task, index) => (
            <TimedTask
              key={index}
              index={index}
              dayState={dayState}
              image={task.image}
              timeframes={task.timeframes}
              title={task.title}
            />
          ))
        }
      </div>

    </div>
  );
}

export default App;