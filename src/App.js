import MainPage from "./navigation/";

export default function App() {
    return (
        <div className="App">
            <div className="app-container">
                <header>
                    <h1>Minutentag Challenge</h1>
                    <p>Please choose a component to see how it works :)</p>
                </header>
                <MainPage />
                <footer>Dev by Roberto</footer>
            </div>
        </div>
    );
}
