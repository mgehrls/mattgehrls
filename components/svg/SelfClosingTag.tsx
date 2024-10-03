type Props = {
  size: number;
};

export default function SelfClosingTag({ size }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 722 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27 217.391L216.391 28"
        stroke="currentColor"
        strokeWidth="54"
        strokeLinecap="round"
      />
      <path
        d="M694.391 217L505 406.391"
        stroke="currentColor"
        strokeWidth="54"
        strokeLinecap="round"
      />
      <path
        d="M504 27L693.391 216.391"
        stroke="currentColor"
        strokeWidth="54"
        strokeLinecap="round"
      />
      <path
        d="M433.814 103.498L287.577 327.893"
        stroke="currentColor"
        strokeWidth="54"
        strokeLinecap="round"
      />
      <path
        d="M216.587 406.587L27.1955 217.196"
        stroke="currentColor"
        strokeWidth="54"
        strokeLinecap="round"
      />
    </svg>
  );
}
