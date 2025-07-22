export default function Log({ logs }) {
  return (
    <ol id="log">
      {logs.map((entry, idx) => (
        <li key={idx}>{entry}</li>
      ))}
    </ol>
  )
}
