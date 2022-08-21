import React, { useEffect } from 'react';

const Tips = (props) => {

    useEffect(() => {
      if (props.data){
        document.getElementById('tip-0').classList.remove("hidden");
      }
    });

    const tipToggle = (index) => {
      const allWithClass = Array.from(
        document.getElementsByClassName('tip')
      );
      allWithClass.forEach(element => {
        element.classList.add("hidden");
      });
      document.getElementById('tip-' + (index + 1)).classList.remove("hidden");
    }
    const closeTips = () => {
      document.getElementById("usips-container").classList.add("hidden");
    }

    return (
      <div>
        <div id="usips-container" className="absolute left-4 bottom-4 p-4 mr-4 bg-white shadow-lg rounded-lg sm:w-96">
        <button className="absolute -top-3 -right-3 bg-white text-gray-400 rounded-full p-1" onClick={() => closeTips()}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        {props.data.map((tip,key) => (
          <div key={key} className="tip hidden" id={`tip-${key}`}>
            {
              tip.img !== "" ?  <img src={tip.img} className="w-full object-cover h-36 rounded-lg mb-4" alt="Tip item"></img> : null
            }
            <div className="text-xl mb-2 text-gray-700 font-semibold">{tip.title}</div>
            <div className="text-sm text-gray-500">
              {tip.desc}
            </div>
            {
              props.data.length > 1 ?  (
              <div className="flex justify-between items-center mt-4">
                <div className="text-gray-400 text-xs">
                  {key + 1}/{props.data.length}
                </div>
                {
                  key !== props.data.length - 1 ? 
                  (
                    <div className="flex">
                      {
                        key !== 0 ? (
                          <button className="text-gray-400 text-xs mr-4 hover:text-gray-500" onClick={() => tipToggle(key-2)}>Previous Tip</button>
                        ) : null
                      }
                      <button className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-700 text-white" onClick={() => tipToggle(key)}>Next</button>
                    </div>
                  )
                  : 
                  (
                    <div>
                      <button className="text-gray-400 text-xs mr-4 hover:text-gray-500" onClick={() => tipToggle(-1)}>Start Again</button>
                      <button className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-900 text-white" onClick={() => closeTips()}>Close tips</button>
                    </div>
                  )
                }
              </div>
              ) : null
            }
          </div>
        ))
        }
        </div>
      </div>
    );
}
 
export default Tips;

