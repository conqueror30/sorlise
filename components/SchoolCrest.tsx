import Image from "next/image";
import type { School } from "@/lib/schools";

export function SchoolCrest({
  school,
  size = 46,
}: {
  school: School;
  size?: number;
}) {
  if (school.logo) {
    return (
      <Image
        src={school.logo}
        alt={school.name}
        width={size}
        height={size}
        className="object-contain"
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 46 46"
      aria-label={school.name}
      role="img"
    >
      <path
        d="M23 3 L41 9 V24 C41 34 33 40 23 43 C13 40 5 34 5 24 V9 Z"
        fill="#fff"
        stroke={school.color}
        strokeWidth="2"
      />
      <path
        d="M23 3 L41 9 V24 C41 34 33 40 23 43 C13 40 5 34 5 24 V9 Z"
        fill={school.color}
        opacity="0.07"
      />
      <line
        x1="9"
        y1="17"
        x2="37"
        y2="17"
        stroke={school.color}
        strokeWidth="1.2"
        opacity="0.5"
      />
      <text
        x="23"
        y="30"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize="11"
        fill={school.color}
        textAnchor="middle"
      >
        {school.short}
      </text>
    </svg>
  );
}
