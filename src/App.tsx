import { ExperienceCard } from './components/ExperienceCard';
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
      <section className="bg-red-500 p-8" id="experience">
        <h2 className="text-4xl mb-8">Work Experience</h2>
        <div className="flex flex-row gap-4 flex-wrap">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </section>
      <section id="about"></section>
      <section id="tools"></section>
      <section id="contact"></section>
    </main>
  );
}

export default App;
