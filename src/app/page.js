import Link from 'next/link';

export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Bem vindo(a) ao salão de beleza!</h1>
      <p style={styles.description}>
        Faça seu próximo agendamento de forma fácil e rápida.
      </p>
      <Link href="/appointments" style={styles.button}>
        Agendar
      </Link>
    </main>
  );
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '0 1rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    margin: '1rem 0',
  },
  description: {
    fontSize: '1.5rem',
    margin: '1rem 0',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '1.25rem',
    transition: 'background-color 0.3s ease',
  },
};
