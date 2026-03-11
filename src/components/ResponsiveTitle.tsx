export default function ResponsiveTitle({ children }: { children: string }) {
  const parts = children.split("\n");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <br className="hidden md:block" />}
        </span>
      ))}
    </>
  );
}
