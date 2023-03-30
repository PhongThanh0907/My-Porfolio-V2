export default function Glitch({ title }: { title: string }) {
  return (
    <div className="glitch" data-text={title}>
      {title}
    </div>
  );
}
