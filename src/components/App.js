import Navbar from "./Navbar"
import NewsAddForm from "./NewsAddForm"
import NewsFilter from "./NewsFilter"
import Newslist from "./Newslist"

function App() {
    return (
        <div className="app">
            <Navbar/>
            <div className="content">
            <Newslist />
            <div className="content__page"> 
                <NewsAddForm/>
                <NewsFilter/>
            </div>
        </div>
        </div>
    )
}

export default App