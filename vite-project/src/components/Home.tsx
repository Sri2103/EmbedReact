import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Link to={'layout'}>
            <button>
                Go To Layout Page
            </button>
        </Link>
        <div>
            <Link to={'dashboard'}>
                <button>
                    Dashboard
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Home