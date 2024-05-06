import { H1 } from "./Typography";
export default function Hero({ title }: { title: string; xL?: boolean }) {
  return (
    <div className="my-16 md:my-32 text-center">
      <H1 xL>{title}</H1>
    </div>
  );
}
