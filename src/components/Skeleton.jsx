export default function Skeleton({ times }) {
  return Array(times)
    .fill(0)
    .map((_, i) => <div key={i}>{i}</div>);
}
