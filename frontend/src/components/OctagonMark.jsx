export default function OctagonMark({ size = 56, spin = false, className = "" }) {
  return (
    <svg
      className={`octagon-mark ${spin ? "octagon-mark--spin" : ""} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon
        points="50,4 79,15 96,38 96,68 79,91 50,102 21,91 4,68"
        transform="rotate(6 50 50)"
        className="ring ring-a"
      />
      <polygon
        points="50,2 78,18 94,42 92,72 74,94 46,98 18,84 6,58"
        transform="rotate(-10 50 50)"
        className="ring ring-b"
      />
      <line x1="30" y1="24" x2="30" y2="76" className="ring ring-c" />
      <line x1="70" y1="24" x2="70" y2="76" className="ring ring-c" />
    </svg>
  );
}
