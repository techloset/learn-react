import {useGithubApis} from "./useGithub";

function Github() {
const [user, followers, fetchFollowers,loading, list] = useGithubApis();
// console.log("followers", followers);
    return (
        <div>
           <p> Github UserName: {user?.login} </p>
           <p>{user?.login} follower's {user?.followers}</p>
           <button onClick={fetchFollowers}>Get Followers</button>

           <hr/>

            <ul>
                NavBar
                {list.map((item)=>{
                    return(
                        <li>
                       <a href={item.route}> {item.title}</a>
                       {/* <Link to={item.route}> {item.title}</Link> */}

                        </li>
                    )
                })}
              
            </ul>



           <p> Followers list</p>
           {loading && <p>loading....</p>}
           {followers?.map((follower)=>{
               return <p>name : {follower.login}</p>
           })}
           

        
        </div>
    )
}

export default Github;