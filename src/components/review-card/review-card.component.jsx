const ReviewCard = ({ review }) => {
  return (
    <div className='border border-gray rounded h-[400px] shadow-lg'>
      <div className='h-full flex flex-col items-center justify-evenly '>
        <div className='w-[100px] h-[100px] border rounded-full absolute top-[40px] left-[40px] z-10 bg-white overflow-hidden'>
          <img
            src={`https://xsgames.co/randomusers/assets/avatars/male/${review.id}.jpg`}
            alt='profile img'
          />
        </div>
        <div className='w-full flex justify-end bg-blue-400 grow-1.15 relative'>
          <h1 className='font-bold text-xl mr-5 absolute bottom-1'>
            {review.reviewer}
          </h1>
        </div>
        <div className='w-full flex justify-end'>
          <h1 className='font-bold text-lg mr-5 text-slate-500'>
            {review.company}
          </h1>
        </div>
        <div className='grow-1 flex items-center'>
          <p className='text-center text-ellipsis overflow-scroll h-[200px] w-10/12 mx-auto'>
            {review.text}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
