import './App.css'


function Header() {
    return <h1 className="header-text">Lilas</h1>;
}

function App() {
  return (
    <>
      <div className="app-grid">
          <Header />
          <p>Search Drakes Lookbooks for Specific Clothes or Themes</p>
      </div>
    </>
  )
}

export default App
