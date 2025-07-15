import Link from "next/link";

export default function ClaudeVsGeminiGPT() {
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
            Claude 4 vs Gemini 2.5 Pro vs GPT-4o: A Developer&apos;s
            Perspective
          </h1>
          <p style={{ fontSize: "1.3em" }}>
            <b>
              Claude 4 is by far the best AI agent that I have ever used
            </b>
            , considering the time and context of course. It&apos;s been a
            long time since I used an AI agent and I was like &quot;this feels
            like magic,&quot; even though if you know me personally, you know
            that I was glazing Gemini 2.5 Pro a lot.
            <br />
            <br />
            But to be real with you, I still felt sometimes it lacked something
            that I wasn&apos;t able to crack to understand why.
            <br />
            <br />
            <b>
              Gemini 2.5 Pro is without a doubt a goat-tier model
            </b>{" "}
            that gets the job done for anything really, but compared to Claude 4 it
            feels inferior in a manner that I can&apos;t explain. Claude 4 is the
            best AI for both frontend and backend, and even for tasks such as terminal
            commands and general dev-related knowledge. It&apos;s by far the best at
            following tool calls.
            <br />
            <br />
            <b>
              But even all of this, it still kinda sucks compared to ChatGPT-4o
              at documentation stuff.
            </b>
            <br />
            <br />
            For some unknown reason, 4o seems the best at grabbing information from
            documentation online and it is the most up-to-date, while Claude just hallucinates
            most of that content.
            <br />
            <br />
            <b>Example:</b> I was building an app using Flutter (yes, I know) and I
            was trying to make a loading splash screen work. Claude 4 just couldn&apos;t
            determine how to do it — it was hallucinating syntax and even libraries.
            While 4o, the free version, provided me with the correct approach.
            <br />
            <br />
            Well, you could blame me for vibe coding like an idiot and not consulting
            the documentation first, but still, 4o always surprises me by delivering exactly
            what I need.
            <br />
            <br />
            <b>
              2.5 Pro is either the smartest agent that was sent by god himself or
              incredibly off-base.
            </b>
            <br />
            <br />
            You might think of a 10-year-old who watched one Python video and wouldn&apos;t
            make these mistakes.
            <br />
            <br />
            <b>Example:</b> I was building a project with role-based dashboards —
            basic stuff. For some reason, 2.5 Pro couldn&apos;t understand how login works and
            kept suggesting methods to log in users that were completely off-base. I don&apos;t
            recall the exact logic errors, but it was so far off that I had to code it myself.
            <br />
            <br />
            <b>At the end of the day, AI agents are tools that help us.</b>
            <br />
            <br />
            People and some Twitter CEOs who think that AIs will soon replace devs are either
            rage baiting or overly hyped. For now, we need to wait and see if the hype train moves
            forward or eventually crashes.
          </p>
        </section>
      </main>
    </div>
  );
}