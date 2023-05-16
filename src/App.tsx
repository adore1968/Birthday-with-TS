import BirthdayList from "./components/BirthdayList";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <main>
        <section className="flex min-h-screen items-center justify-center">
          <BirthdayList />
        </section>
      </main>
    </div>
  );
}
