import React from 'react'

const UserProfile = () => {
  return (
      <div className='w-full rounded lg:w-full bg-gray-100 h-screen p-10'>
          <div className='flex items-center flex-col'>
          <div className='flex flex-col items-center mt-5'>
          <div className="avatar">
  <div className="w-16 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
              </div>
              <h2 className='text-lg font-semibold'>Harrison Philips</h2>
              <p className='text-xs text-gray-400'>Business Analyst</p>
          </div>
          </div>
          
          <div className='border flex items-center justify-between p-4 rounded-lg mt-7'>
              
              <div className='flex flex-col'>
                  <span className='font-semibold'>Get -10% sell price</span>
                  <p className='text-xs text-gray-400'>for spanish A2 course</p>
              </div> 

              <div>
              &gt;
              </div>

          </div>


          <div className='mt-10'>

              <h3 className='font-semibold text-lg'>Course Progress</h3>
              
              <div className='flex flex-col gap-4 mt-5'>
              <div className='border flex items-center gap-4 p-4 rounded-lg'>
                  <div className='flex items-center gap-2'>
                      <span>63%</span>
                      <img src="./Group 1003.svg" alt="icon" />
                  </div>
                {/* <div></div> */}
                  <div>
                      <span className='font-semibold'>Grammer</span>
                      <p className='text-sm text-gray-400'>Learn new rules</p>
                </div>
                 
              </div>

              <div className='border flex items-center gap-4 p-4 rounded-lg'>
                  <div className='flex items-center gap-2'>
                      <span>63%</span>
                      <img src="./Group 1003.svg" alt="icon" />
                  </div>
                {/* <div></div> */}
                  <div>
                      <span className='font-semibold'>Grammer</span>
                      <p className='text-sm text-gray-400'>Learn new rules</p>
                </div>
                 
              </div>

              <div className='border flex items-center gap-4 p-4 rounded-lg'>
                  <div className='flex items-center gap-2'>
                      <span>63%</span>
                      <img src="./Group 1003.svg" alt="icon" />
                  </div>
                {/* <div></div> */}
                  <div>
                      <span className='font-semibold'>Grammer</span>
                      <p className='text-sm text-gray-400'>Learn new rules</p>
                </div>
                 
              </div>
             </div>

          </div>

    </div>
  )
}

export default UserProfile