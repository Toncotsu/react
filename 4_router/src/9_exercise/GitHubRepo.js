
import { useEffect, useState } from "react";
import axios from "axios";

const GitHubRepoList = () => {
    const [repo, setRepo] = useState([]);
    
    useEffect(() => {
        axios.get("https://api.github.com/search/repositories?q=react")
            .then(({data}) => setRepo(data.items))
            
    }, []);

    return (
        <div>
            <h2>GitHub 레포 목록</h2>
            <ul>
                {repo.map((repo,idx) => (
                    <li key={idx}>
                       페이지명: <strong>{repo.full_name}</strong><br />
                       링크이동: <a href={repo.html_url} >{repo.html_url}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHubRepoList;
