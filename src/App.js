import logo from './logo.svg';
import Navbar from './Navbar.js';
import Posts from './Posts.js';

function App() {
  return (
    <div class="App">
      <Navbar />
      <Posts page={0} />
    {/* todo: 
        
        keep track of a footer here
        when the user clicks on the next page
        keep track of the state here,
        pass the next index into posts
        where posts can add an offset
        to the sliced entries
      */}
    </div>
  );
}

export default App;
