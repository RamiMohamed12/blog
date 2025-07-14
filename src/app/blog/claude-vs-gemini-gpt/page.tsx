export default function ClaudeVsGeminiGPT() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans px-0 py-0" style={{backdropFilter: 'blur(8px)'}}>
      <div className="w-full flex justify-start px-8 pt-8">
        <a href="/" className="inline-block px-4 py-2 rounded-full bg-[#222] text-white font-bold shadow transition hover:bg-[#333] text-xl" style={{backdropFilter: 'blur(4px)'}}>
          &lt;---
        </a>
      </div>
      <main className="w-full flex flex-col gap-10">
        <section className="w-full px-8 py-12">
          <h1 className="text-3xl font-bold mb-6" style={{color: '#fff'}}>Claude 4 vs Gemini 2.5 Pro vs GPT-4o: A Developer's Perspective</h1>
          <p style={{fontSize: '1.3em'}}>
            <b>Claude 4 is by far the best AI agent that I have ever used</b>, considering the time and context of course. It's been a long time since I used an AI agent and I was like "this feels like magic," even though if you know me personally, you know that I was glazing Gemini 2.5 Pro a lot.<br /><br />
            
            But to be real with you, I still felt sometimes it lacked something that I wasn't able to crack to understand why.<br /><br />
            
            <b>Gemini 2.5 Pro is without a doubt a goat-tier model</b> that gets the job done for anything really, but compared to Claude 4 it feels inferior in a manner that I can't explain. Claude 4 is the best AI for both frontend and backend, and even stuff like terminal tasks and general knowledge of dev stuff. It's by far the best at following tool calls.<br /><br />
            
            <b>But even all of this, it still kinda sucks compared to ChatGPT-4o at documentation stuff.</b><br /><br />
            
            For some unknown reason, 4o seems the best at grabbing stuff from documentation online and is the most up-to-date, where Claude just hallucinates most of that stuff.<br /><br />
            
            <b>Example:</b> I was building an app using Flutter (yes, I know) and I was trying to make a loading splash screen work. Claude 4 just couldn't crack how to do it — it was hallucinating syntax and even libraries. While 4o, the fucking free version, dropped me directly how to do it.<br /><br />
            
            Well, you could blame me for just vibe coding it like an idiot and not looking at documentation first, but still, 4o always surprises me at this type of shit where it's able to go through the hell of documentation and drops you directly what you want.<br /><br />
            
            <b>2.5 Pro is either the smartest fucking agent that was sent by god himself or either very fucking dumb.</b><br /><br />
            
            You'd be like a 10-year-old that watches one Python video doesn't do these type of mistakes.<br /><br />
            
            <b>Example:</b> I was building a project that had role-based dashboards — basic stuff. For some reason, 2.5 Pro couldn't understand how login works and kept trying to log in users in ways that I was just amazed how stupid it was. I don't remember the logic errors it had, but it was too stupid that I coded it myself.<br /><br />
            
            <b>At the end of the day, AI agents are tools that help us.</b><br /><br />
            
            People and random Twitter CEOs that think that AIs will soon replace devs are either rage baiting or too gone in the hype train. For now, we need to wait and see if the hype train is going to go forward or die out and crash.
          </p>
        </section>
      </main>
    </div>
  );
}
