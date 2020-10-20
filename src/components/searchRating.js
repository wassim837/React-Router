import React,{Component} from 'react';

export  class SearchMovie extends Component {
    render() {
        return (
            <div>
                <input placeholder="Filter your Movie" className="search" onChange={this.props.search} />
            </div>
        )
    }
}
const SearchRating = ({ rate, starClicked }) => {
    return (
        <div>
         <a href='#' className="rating">  {Array.from({ length: 5 }, (star, i) => (
                <span onClick={() => { starClicked(i + 1) }}>
                    {i < rate ? "★" : "☆"}
                </span>
            ))}
            </a> 
        </div>      
    );
};

export default SearchRating;