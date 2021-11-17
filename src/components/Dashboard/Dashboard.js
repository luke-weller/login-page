import { Link } from "react-router-dom";

export default function Dashboard() {
  return(
    <div className='ContentContainer'>
      <h4>Dashboard</h4>
      <Link to="/Preferences"><button>
              Go to preferences 
            </button>
      </Link>
    </div>
    
  );
}