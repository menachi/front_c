

function PostsList() {
    console.log('PostsList');
    const items = ['An item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'];
    return (
        <ul className="list-group">
            {items.map((item, index) => { return <li className="list-group-item" key={index}>{index}: {item}</li> })}
        </ul>
    );
}

export default PostsList;