import { Hteml } from "../app/api/mail";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {<h1>{Hteml}</h1>}
    </main>
  );
}
