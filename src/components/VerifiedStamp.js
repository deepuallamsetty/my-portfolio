import React from "react";

export default function VerifiedStamp({ size = 84 }) {
  const id = React.useId();
  return (
    <svg
      className="stamp"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <defs>
        <path
          id={id}
          d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
        />
      </defs>
      <circle cx="50" cy="50" r="47" className="stampRing" />
      <circle cx="50" cy="50" r="36" className="stampRingInner" />
      <text className="stampText">
        <textPath href={`#${id}`} startOffset="0%">
          VERIFIED · ON-CHAIN · VERIFIED · ON-CHAIN ·
        </textPath>
      </text>
      <path
        d="M35 51 L45 61 L66 39"
        className="stampCheck"
        fill="none"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
