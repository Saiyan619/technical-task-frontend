import React from 'react'

const CheckBox = () => {
    const checkBoxes = [
        {title:"Patient Id"},
        {title:"Patient Personal details - Name, contact"},
        {title:"Patient Vital details"},
        {title:"Patient Past history details"},
        {title:"Symptoms and Diagnosis"},
        {title:"Lab Tests"},
        {title:"Crug Prescribtion"},
    ]
  return (
    <div>
      <div>
              <span className='text-gray-500 font-bold'>Body Info</span>
              <p className='text-sm font-bold'>Auto fill data in the prescription</p>

              <div>
              {checkBoxes.map((item) => {
                          return     <div className='flex mt-2'>
                      <input type="checkbox" className="checkbox" />
                              <p>{item.title}</p> 
                  </div>
                    })}
              </div>
            </div>
    </div>
  )
}

export default CheckBox
