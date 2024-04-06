import error from '../assets/Images/error.jpg';
function Error() {
  return (
    <div className="flex flex-col justify-center items-center text-white text-3xl rounded-md">
      <img
        src={error} alt="error" />
      <p className='text-3xl text-blue text-white'>We are sorry to see you like this..!!🥹🥹</p>
      <p className='text-3xl text-blue text-white'>Please Go Back😊</p>
    </div>
  );
}

export default Error;