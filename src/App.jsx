import data from './app.json';

const App = () => {
  console.log(data);
  return (
    <div className='flex justify-center border border-black'>
      <div className='border border-black'>
        {data.map((notification, idx) => {
          return (
            <div key={idx} className='py-2 flex justify-between'>
              <div className='flex'>
                <img
                  className='w-12 h-12 mr-4'
                  src={`/images/${notification.image}`}
                />
                <div>
                  <div className='flex'>
                    <p>{notification.name}</p>&nbsp;
                    <p>{notification.action}</p>&nbsp;
                    <p>{notification.post}</p>&nbsp;
                    <p>{notification.group}</p>
                    <br />
                  </div>
                  <p>{notification.timeLapse}</p>
                  {notification.message ? (
                    <div className='p-3 border border-black rounded-md w-1/2 my-2'>
                      <p>{notification.message}</p>
                    </div>
                  ) : null}
                </div>
              </div>
              {notification.sentImage ? (
                <img src={`/images/${notification.sentImage}`} className="h-12"/>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
