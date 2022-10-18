const AddGamers = ({ submitHandler, newPlayer, handleAdd }) => {
    return (
        <form onSubmit={submitHandler}>
            <input
                placeholder="Enter name:"
                type="text"
                onChange={newPlayer}
            />
            <button
                type="button"
                onClick={handleAdd}
            >
                Add Player
          </button>
        </form>
    );
}

export default AddGamers;
