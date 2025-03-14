import React from "react";
import UserProfile from "./UserProfile";
import AvatarGroup from "./Components/AvatarGroup";

const Home = () => {
  return (
    <div className="w-full">
   <h1>Progress Dashboard</h1>

      <div className="flex flex-col-reverse lg:flex-row">
        
        <div className="flex flex-col p-2 lg:p-7 gap-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between gap-4">

            
        <div className="card w-72 lg:w-96 h-52 bg-blue-700 text-white border card-lg shadow-sm">
  <div className="card-body">
                <div className="flex flex-col">
                  <p className="text-xs">DEADLINE 12:00</p>
                  <span className="text-xl font-semibold">Exam - Unit 5</span>
                  <p className="text-sm">Spanish for beginners</p>
                </div>
                
<AvatarGroup />
  </div>
</div>

        <div className="flex flex-col lg:flex-row gap-5">

        <div className="card bg-orange-200 w-72 h-52 border card-sm shadow-sm">
  <div className="card-body">
                  <div className="flex flex-col">
                    <img className="w-6" src="./Vector.svg" alt="icon" />
                    <span className="font-semibold">Homework</span>
                    <p>For today lesson</p>
                    </div>

<span className="mt-5 lg:mt-10">35 MINS AGO</span>                  
  </div>
</div>

<div className="card bg-blue-200 w-72 h-48 border card-sm shadow-sm">
  <div className="card-body">
                  <div className="flex flex-col">
                    <img className="w-6" src="./Vector.svg" alt="icon" />
                    <span className="font-semibold">Homework</span>
                    <p>For today lesson</p>
                    </div>

<span className="mt-5 lg:mt-10">35 MINS AGO</span>                  
  </div>
              </div>
              
        </div>

        </div>

          

          <div className="flex flex-col lg:flex-row lg:items-center gap-5">

          <div className="card border w-full lg:w-72 bg-base-100 card-lg shadow-sm">
  <div className="card-body">
                <div className="flex items-center justify-between">
                 <div>
                 <span className="font-semibold">Group Info</span>   
                 <p className="text-sm">13 students in the group</p>
                  </div>
                  <div><img src="./Vector-2.svg" alt="icon" /></div>
                </div>
                
                <div className="card bg-orange-400 text-white w-full h-28 card-xs shadow-sm">
  <div className="card-body">
                    <div className="flex items-center">
                      <div>
                      <span>Group Work</span>
                      <p className="text-xs">4 students from your group are online now</p>
                      </div>
                      <div>&gt;</div>
    </div>
    
                  </div>

                </div>

                <div>
                  <span className="font-semibold">Todays Lesson</span>
                  <p className="text-xs text-gray-500">Unit 6 - Article</p>
                </div>
            
                
  </div>
</div>

          <div className="card w-72 border bg-base-100 card-lg shadow-sm">
  <div className="card-body">
    <h2 className="card-title mb-5">Overall Progress</h2>

    <div className="w-full h-28 card-xs">
  <div className="">
                    <div className="flex flex-col">
                      <div>
                        <div className="flex justify-between items-center">
                          <span className="text-xl"> Germany for <br /> beginners</span>
                          <img src="./germany.svg" alt="icon-flag" />
                        </div>
                        
                        </div>
                      <div className="flex flex-col mt-5">
                        <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                        <span>75%</span>
                      </div>
    </div>
    
                  </div>

                </div>                
                <div className="justify-end border-t card-actions mt-3">
      <button className="text-blue-800">Explore Now</button>
    </div>
  </div>
            </div>
            
         
        </div>


          <div className="flex flex-col lg:flex-row lg:items-center gap-5">

          <div className="card border w-full h-28 card-xs shadow-sm">
  <div className="card-body">
                    <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                  <div>
                      <img src="./create-outline.svg" alt="icon" />
                    </div>
                      <div>
                      <span>Grammer</span>
                      <p className="text-xs">30+ grammer</p>
                      </div>
                    
                      </div>
                      <div>&gt;</div>
    </div>
    
                  </div>

                </div>
         
                <div className="card border w-full h-28 card-xs shadow-sm">
  <div className="card-body">
                    <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                  <div>
                      <img src="./create-outline.svg" alt="icon" />
                    </div>
                      <div>
                      <span>Grammer</span>
                      <p className="text-xs">30+ grammer</p>
                      </div>
                    
                      </div>
                      <div>&gt;</div>
    </div>
    
                  </div>

                </div>
            
          </div>

        </div>
        
        
        <div className="p-2">
          <UserProfile />
        </div>
</div>
      </div>
  );
};

export default Home;
