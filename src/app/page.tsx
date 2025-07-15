
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans px-0 py-0" style={{backdropFilter: 'blur(8px)'}}>
      <main className="w-full flex flex-col gap-10">
        <section className="w-full text-center mb-8 px-8 py-12">
          <h1 className="text-3xl font-bold mb-2 tracking-wide" style={{color: '#fff'}}>Rami Mohamed Amine</h1>
          <p className="text-lg" style={{color: '#ededed'}}>Junior Web Developer passionate about building modern web experiences.</p>
        </section>
        <section className="w-full px-8">
          <h2 className="text-xl font-semibold mb-4" style={{color: '#fff'}}>Blog Posts</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="/blog/claude-vs-gemini-gpt" className="block bg-[#18181b] rounded-lg p-5 shadow-lg transition hover:bg-[#222] text-white" style={{backdropFilter: 'blur(4px)'}}>
                <h3 className="text-lg font-bold mb-1">Claude 4 vs Gemini 2.5 Pro vs GPT-4o: A Developer&apos;s Perspective</h3>
                <p className="text-base">Comparing the three major AI models from a developer&apos;s perspective - their strengths, weaknesses, and real-world performance.</p>
              </a>
            </li>
            <li>
              <a href="/blog/software-slop" className="block bg-[#18181b] rounded-lg p-5 shadow-lg transition hover:bg-[#222] text-white" style={{backdropFilter: 'blur(4px)'}}>
                <h3 className="text-lg font-bold mb-1">Software Has Been Getting Worse</h3>
                <p className="text-base">A personal take on why modern software is getting worse, chasing trends, and losing quality.</p>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
