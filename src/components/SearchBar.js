import React from "react";

class SearchBar extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {term: " "};
    //     this.onInputChange = this.onInputChange.bind(this);
    //      }
    // shorthand
    state = {term: ""};

    onInputChange = (event) => {
        this.setState( {term: event.target.value});
    }

    // componentDidUpdate() {
    //     console.log(this.state.term);
    // }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
        // console.log(this.state.term);
    }

    render() {
        return (
            <div className="container my-3">
                <form onSubmit={this.onFormSubmit}>
                    <label>{this.props.label}</label>
                    <input 
                        type="text" 
                        value={ this.state.term } 
                        className="w-100" 
                        placeholder="Search"
                        onChange={this.onInputChange} />
                </form>
            </div>
        );
    }
}

export default SearchBar;