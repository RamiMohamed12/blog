export default function SoftwareSlopBlog() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans px-0 py-0" style={{backdropFilter: 'blur(8px)'}}>
      <div className="w-full flex justify-start px-8 pt-8">
        <a href="/" className="inline-block px-4 py-2 rounded-full bg-[#222] text-white font-bold shadow transition hover:bg-[#333] text-xl" style={{backdropFilter: 'blur(4px)'}}>
          &lt;---
        </a>
      </div>
      <main className="w-full flex flex-col gap-10">
        <section className="w-full px-8 py-12">
          <h1 className="text-3xl font-bold mb-6" style={{color: '#fff'}}>Software Has Been Getting Worse</h1>
          <p style={{fontSize: '1.3em'}}>
            Have you ever noticed that software has been getting worst and worst?<br /><br />
            More security problems? Less performance and the same things recycled over and over again?<br /><br />
            I have seen this even before AI and guess what JavaScript isn't even the problem.<br /><br />
            <b>1- As time advances hardware got better meaning that companies and devs are less entitled to make software that runs perfect,</b><br />
            Why does all modern games need to be 100GB+? Some games like Call of Duty are 300GBs?<br />
            Why does everything need native 4K textures and slop technologies?<br />
            Do consumers really need that to make your software better? Of course not!<br />
            They make us believe that more polygons is better while it's not.<br /><br />
            <b>2- People at the top only care about money money money,</b><br />
            When software is built for monetary gain it needs to be shipped fast, fixed later, which just floods the market with slop. And now with tools like AI that can write that slop 10x faster, the software is just going to get worse and worse.<br /><br />
            <b>3- Chasing trends, modern software just chases trends that are simply put, misguided.</b><br />
            Why do apps in Windows such as Notepad, an app built to quickly change files, have Copilot? Why does everything need AI? And this isn't really a jab at AI itself. In 2022 it was web3, crypto hype, NFTs, and all of that. Now it's AI and I wonder what's going to be in the future.<br /><br />
            <b>4- People just genuinely lost the ability to write good software.</b><br />
            It's been a long time since I've run something that amazed me. The last piece of software that really hit close to me was Cursor and to be honest, it seems that it's getting worse.<br /><br />
            At this point we should all embrace the slop and live among it because what can you even do about it?
          </p>
        </section>
      </main>
    </div>
  );
}
