import PersonalCard from './components/PersonalCard';

function App() {
  return (
    <main className="container mx-auto px-4">
      <section
        id="home"
        className="flex min-h-svh bg-sky-300 items-center justify-center"
      >
        <PersonalCard />
      </section>
      <section id="about" className="min-h-svh bg-red-500"></section>
      <section id="tools"></section>
      <section id="Experience"></section>
      <section id="contact"></section>
    </main>
  );
}

export default App;
