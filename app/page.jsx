'use client';
import { useRouter } from 'next/navigation';
import '../style.css';

export default function Home() {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push('/tone');
  };

  return (
    <main className="hero-container">
      <h1>Welcome to LuMama 💕</h1>
      <p>Your journey is unique — let us walk it with you.</p>
      <button className="start-quiz-button" onClick={handleStartQuiz}>Take the Quiz</button>
    </main>
  );
}