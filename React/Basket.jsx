const Basket = ({items}) => {

    const Display = ({ itemName }) => <li>{itemName}</li>
    return ( 
        <ul className="previousSearch">
            {items.map((itemName, i) => (
                <Display
                itemName={itemName}
                    // Prevent duplicate keys by appending index:
                    key={i}
                />
            ))}
        </ul>
     );
}

export default Basket;