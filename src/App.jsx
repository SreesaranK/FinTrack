import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <AppLayout>
      <h1 className="text-4xl font-bold text-slate-800">
        Dashboard
      </h1>

      <p className="mt-3 text-slate-500">
        Welcome to FinTrack 👋
      </p>
    </AppLayout>
  );
}

export default App;