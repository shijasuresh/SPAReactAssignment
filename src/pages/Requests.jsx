import users from '../Users'
import UserCard from '../components/UserCard';

function Requests() {
    return(
        <>
            <div className="mx-auto w-[400px]">
                <h1 className="text-2xl mt-24 font-black">Your follow requests</h1>
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, hic!</p>

                {
                    users.map(user=><UserCard img={user.image} name={user.name} prof={user.profession} username={user.username} />)
                }
            </div>
        </>
    )
}

export default Requests;