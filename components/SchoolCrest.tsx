import Image from "next/image";
import type { School } from "@/lib/schools";

export function SchoolCrest({
  school,
  size = 46,
}: {
  school: School;
  size?: number;
}) {
  if (!school.logo) return null;

  return (
    <div className="relative flex items-center justify-center bg-white rounded-full shadow-sm border border-line p-1" style={{ width: size + 8, height: size + 8 }}>
      <Image
        src={school.logo}
        alt={school.name}
        width={size}
        height={size}
        className="object-contain rounded-full w-full h-full"
      />
    </div>
  );
}
