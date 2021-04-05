import React from 'react';


class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please enter into the store!</h2>
                <input type="text" required pleaceholder="Store Name" />
                <button type="submit">Visit Store </button>
            </form>
        )
    }
}

export default StorePicker;