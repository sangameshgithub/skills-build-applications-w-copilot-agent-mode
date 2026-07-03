function App() {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h1 className="display-5">OctoFit Tracker</h1>
        <p className="lead">Modern Fitness Tracking for Teams and Individuals.</p>
      </div>
      <div className="card mt-4 shadow-sm">
        <div className="card-body">
          <h2 className="h5">Frontend</h2>
          <p>React 19 + Vite running on port 5173.</p>
          <h2 className="h5 mt-4">Backend</h2>
          <p>Express + TypeScript API ready on port 8000 with MongoDB via Mongoose.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
