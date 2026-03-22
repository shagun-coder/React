const Cards = (props) => {
    console.log(props.user)
    return (
        <div className="parent">
            <div className="card">
                <h1>{props.user}</h1>
                <img src={props.img}></img>
                <p>iam {props.age} year old </p>
                <button className="cardButton">View propile</button>

            </div>


        </div>
    );
};
export default Cards