import { ellipsis } from "../assets/images";

const TimedTask = ({
  index,
  title,
  image,
  timeframes,
  dayState
}) => {
  const colors = [
    'bg-primary-l-red-work',
    'bg-primary-soft-blue',
    'bg-primary-l-red-study',
    'bg-primary-lime-green',
    'bg-primary-violet',
    'bg-primary-soft-orange',
  ];

  return (
    <div className={`relative pt-9 lg:pt-12 ${colors[index % colors.length]} overflow-hidden rounded-2xl`}>
      <img src={image} alt="logo" className='absolute top-[-10px] right-3' />

      <div className='flex flex-col gap-1 relative z-10 bg-neutral-d-blue p-6 rounded-2xl hover:bg-neutral-d-blue-hover cursor-pointer transition'>
        
        <div className='flex justify-between items-center'>
          <p className='text-white font-semibold text-lg lg:text-sm'>{title}</p>
          <img src={ellipsis} alt="ellipsis" className='hover:fill-black' />
        </div>

        <div className='flex items-center justify-between lg:flex-col'>
          <p className='text-4xl text-white font-light lg:self-start mr-3'>
            {timeframes[dayState.toLowerCase()].current}hr{timeframes[dayState.toLowerCase()].current === 1 ? '' : 's'}
          </p>

          <p className='text-neutral-pale-blue text-right'>
            Last week - {
            timeframes[dayState.toLowerCase()].previous}hr{timeframes[dayState.toLowerCase()].previous === 1 ? '' : 's'}
          </p>
        </div>

      </div>
    </div>
  );
};

export default TimedTask;