import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import CharactersCards from "./components/CharactersCards";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={3}>
          <CharactersCards />
          <CharactersCards />
          <CharactersCards />
          <CharactersCards />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
