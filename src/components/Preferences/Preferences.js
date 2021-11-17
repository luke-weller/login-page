import { Link } from "react-router-dom";

export default function Preferences() {
  return(
    <div className='ContentContainer'>
      <h4>Preferences</h4>
      <Link to="/Dashboard"><button>
              Go to Dashboard 
            </button>
      </Link>
    </div>
    
  );
}