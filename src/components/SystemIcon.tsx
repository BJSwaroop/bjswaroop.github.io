type Props = { name: string; className?: string };

// A distinct line glyph per AI system, drawn in currentColor.
function shapeFor(n: string) {
  if (n.includes('carousel'))
    return (
      <>
        <rect x="7" y="5" width="10" height="14" rx="1.5" />
        <path d="M4 8v8M20 8v8" />
      </>
    );
  if (n.includes('reel'))
    return (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M10 9l5 3-5 3z" />
      </>
    );
  if (n.includes('reply'))
    return <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z" />;
  if (n.includes('creator'))
    return (
      <>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7v3.5M11 11l-4.5 6M13 11l4.5 6" />
      </>
    );
  if (n.includes('brand'))
    return (
      <>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M9 9h6M9 13h6M9 17h4" />
      </>
    );
  if (n.includes('stack') || n.includes('content'))
    return (
      <>
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 13l9 5 9-5" />
      </>
    );
  return <rect x="4" y="4" width="16" height="16" rx="2" />;
}

export default function SystemIcon({ name, className = 'h-6 w-6' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {shapeFor(name.toLowerCase())}
    </svg>
  );
}
