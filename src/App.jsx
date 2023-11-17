import data from './app.json';

const App = () => {
  console.log(data);
  return (
    <div className='flex justify-center border border-black bg-lightGrayishBlue2'>
      <div className='border border-black w-1/2 bg-white rounded-xl p-5'>
        {data.map((notification, idx) => {
          return (
            <div key={idx} className='py-2 flex justify-between'>
              <div className='flex'>
                <img
                  className='w-12 h-12 mr-4'
                  src={`/images/${notification.image}`}
                />
                <div>
                  <div className='flex items-center'>
                    <p className='text-veryDarkBlue font-extrabold'>
                      {notification.name}
                    </p>
                    &nbsp;
                    <p className='text-grayishBlue font-medium'>
                      {notification.action}
                    </p>
                    &nbsp;
                    <p className='text-grayishBlue font-extrabold'>
                      {notification.post}
                    </p>
                    &nbsp;
                    <p className='text-darkGrayishBlue font-extrabold'>
                      {notification.group}
                    </p>
                    &nbsp;
                    {notification.status === 'unread' ? (
                      <div className='bg-red-500 h-2 w-2 rounded-full' />
                    ) : null}
                  </div>
                  <p className='text-grayishBlue'>{notification.timeLapse}</p>
                  {notification.message ? (
                    <div className='p-3 border border-lightGrayishBlue1 rounded-md w-1/2 my-2'>
                      <p className='text-grayishBlue font-medium'>
                        {notification.message}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
              {notification.sentImage ? (
                <img
                  src={`/images/${notification.sentImage}`}
                  className='h-12'
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
