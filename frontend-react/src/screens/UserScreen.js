const { useParams } = require("react-router-dom");

function UserScreen()
{
    const { userId } = useParams();
    return (
        <div className='Main'>
            <h1>User {userId}</h1>
        </div>
    );
}

export default UserScreen;