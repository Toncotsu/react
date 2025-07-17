// App.js

import GitHubRepoList from "./GitHubRepo";
import MovieList from "./MovieList";

function App() {
    return (
        <div className="App">
            <GitHubRepoList />
            <hr />
            <MovieList />
        </div>
    );
}

export default App;
