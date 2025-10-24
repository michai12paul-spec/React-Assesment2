
const UserData = ({data}) => {
    return (
        <div className="mb-5">
            <p>Name: {data.name}</p>
            <p>Title: {data.title}</p>
            <p>bio: {data.bio}</p>
            <p>square of number: {data.sqNum}</p>
            
        </div>
    )
}

export default UserData;