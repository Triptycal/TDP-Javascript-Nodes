const RemoveItems = ({ submitHandler, handleRemove }) => {
    return (
        <form onSubmit={submitHandler}>
            <button
                type="button"
                onClick={handleRemove}
            >
                Remove Last Item
          </button>
        </form>
    );
}

export default RemoveItems;