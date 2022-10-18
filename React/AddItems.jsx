const AddItems = ({ submitHandler, newItem, handleAdd }) => {
    return (
        <form onSubmit={submitHandler}>
            <input
                placeholder="Enter item:"
                type="text"
                onChange={newItem}
            />
            <button
                type="button"
                onClick={handleAdd}
            >
                Add Item
          </button>
        </form>
    );
}

export default AddItems;