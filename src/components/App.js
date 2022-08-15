import React from "react";
import axios from "axios";
import Navbar from "./navbar";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
// import ArrayList from "./ArrayList";
// import Clock from "./Clock";
// import Welcome from "./Welcome";

// Access key
// FP2cXtBvKlSZktgRS4JvzoKsI8hSBc7IC7FHCH2_zgA

// Authorization: Client-ID FP2cXtBvKlSZktgRS4JvzoKsI8hSBc7IC7FHCH2_zgA

// Location
// https://api.unsplash.com/

// Class component
class App extends React.Component {
  state = { images: [] }

  // async/await syntax
  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', 
      {
        headers: {
          Authorization: 'Client-ID FP2cXtBvKlSZktgRS4JvzoKsI8hSBc7IC7FHCH2_zgA'
        },
        params: {
          query: term,
          per_page: 20
        }
    });
    this.setState({ images: response.data.results })
    // console.log(response.data.results); 
}


  // onSearchSubmit = (term) => {
  // promise syntax
  //   axios.get('https://api.unsplash.com/search/photos', 
  //   {
  //     headers: {
  //       Authorization: 'Client-ID FP2cXtBvKlSZktgRS4JvzoKsI8hSBc7IC7FHCH2_zgA'
  //     },
  //     params: {
  //       query: term
  //     }
  //   }).then( (response) => {
  //     console.log(response.data.results)
  //   });
// }

  render() {
    return (
      <div>
        <Navbar />
        <SearchBar onSubmit={this.onSearchSubmit} label="Image Search"/>
        <ImageList images={this.state.images} />
        {/* <ArrayList /> */}
        {/* <Clock /> */}
        {/* <Welcome name = 'Daniel'/> */}
      </div>
    );
  }
}

export default App;