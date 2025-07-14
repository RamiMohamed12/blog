export default function MockBlogPost() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white font-sans px-4 py-12" style={{backdropFilter: 'blur(8px)'}}>
      <main className="w-full max-w-2xl mx-auto flex flex-col items-center gap-10">
        <section className="w-full text-center mb-8">
          <h1>Mock Blog Post</h1>
          <p>This is a mock blog post. Replace this with your actual content later.</p>
        </section>
      </main>
    </div>
  );
}
