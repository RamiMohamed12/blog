import Link from "next/link";

export default function SoftwareSlopBlog() {
  return (
    <div
      className="min-h-screen w-full bg-black text-white font-sans px-0 py-0"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="w-full flex justify-start px-8 pt-8">
        <Link
          href="/"
          className="inline-block px-4 py-2 rounded-full bg-[#222] text-white font-bold shadow transition hover:bg-[#333] text-xl"
          style={{ backdropFilter: "blur(4px)" }}
        >
          &lt;---
        </Link>
      </div>
      <main className="w-full flex flex-col gap-10">
        <section className="w-full px-8 py-12">
          <h1
            className="text-3xl font-bold mb-6"
            style={{ color: "#fff" }}
          >
            Software Has Been Getting Worse
          </h1>
          <p style={{ fontSize: "1.3em" }}>
            Have you ever noticed that software has been getting worse and worse?
            <br />
            <br />
            More security problems? Less performance and the same things recycled over
            and over again?
            <br />
            <br />
            I have seen this even before AI became a buzzword, and guess what —
            JavaScript isn&apos;t even the problem.
            <br />
            <br />
            <b>
              1- As time advances, hardware got better, meaning that companies and
              devs are less pressured to produce flawless software,
            </b>
            <br />
            Why do all modern games need to be 100GB+? Some games like Call of Duty are
            300GBs?
            <br />
            Why does everything need native 4K textures and slop technologies?
            <br />
            Do consumers really need that to make your software better? Of course not!
            <br />
            They make us believe that more polygons are better, while that isn&apos;t the case.
            <br />
            <br />
            <b>
              2- People at the top only care about money, money, money,
            </b>
            <br />
            When software is built solely for monetary gain, it needs to be shipped fast and
            fixed later — which floods the market with slop. Now, with tools like AI that can
            generate code 10x faster, the software trend might worsen further.
            <br />
            <br />
            <b>
              3- Chasing trends, modern software just chases trends that are, simply put,
              misguided.
            </b>
            <br />
            Why do apps like Notepad in Windows, an app built simply to quickly change files,
            need Copilot? Why does everything need AI? This is not a jab at AI itself.
            <br />
            In 2022 it was all about web3, crypto hype, NFTs, and the like. Now it&apos;s AI,
            and I wonder what the future holds.
            <br />
            <br />
            <b>
              4- People have genuinely lost the ability to write good software.
            </b>
            <br />
            It&apos;s been a long time since I encountered software that truly impressed me.
            The last piece of software that really struck a chord was Cursor, and to be honest,
            it appears that software quality is declining.
            <br />
            <br />
            At this point, we might all have to accept the slop and live with it because what else
            can we do?
          </p>
        </section>
      </main>
    </div>
  );
}