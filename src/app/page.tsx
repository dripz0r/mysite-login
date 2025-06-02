import Image from "next/image";
import Hello from "@/lib/hello";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
    <div className="p-4">
      <p>{Hello()}</p>
      <Button />
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  );
}
