import React from "react";
import { Bookmark } from "lucide-react";
const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src="https://imgs.search.brave.com/fDgnDC5_yugXHiCM6lN-rhPBXJ_NDMTyZplZXeJW8Us/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzkxLzU5LzIx/LzM2MF9GXzE2OTE1/OTIxODZfdXNBNkVz/Q2o3WDVtNjNWeUZx/TUNzaEpGYXBvSHB3/SUwuanBn"
            alt=""
          />
          <button>
            Save <Bookmark size={12}/>
          </button>
        </div>
        <div className="center">
          <h3>
            Amazon <span>5 Days Ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom"></div>
        <div>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default App;
