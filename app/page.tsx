import { getAllPosts } from '@/lib/blog';
import { PostCard } from '@/components/blog/post-card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'AI-Powered Blog Platform',
  description: 'A modern blog platform with AI-powered features',
};

export default async function HomePage() {
  const recentPosts = (await getAllPosts()).slice(0, 3);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background -z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent -z-20" />
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block px-6 py-2 mb-6 text-sm font-medium bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI-Powered Content
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Transform Your <span className="text-primary font-bold">Content</span> with AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed max-w-2xl">
            Discover the future of content creation with our AI-powered blog platform. 
            Intelligent insights, smart summaries, and automated tagging for modern publishers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="px-8 py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
              <a href="/posts">Explore Articles</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-base rounded-full border-2 transition-all duration-300 hover:bg-accent hover:shadow-lg">
              <a href="/admin">Manage Content</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {recentPosts.length > 0 && (
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14">
              <div className="mb-6 md:mb-0">
                <div className="inline-block px-4 py-1 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  Latest Content
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Fresh from the Blog</h2>
                <p className="text-muted-foreground max-w-lg">Curated content powered by AI insights</p>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0 border-2 px-6 py-2 rounded-full transition-all duration-300 hover:bg-accent hover:shadow-md">
                <a href="/posts">View All Articles</a>
              </Button>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Features</h2>
            <p className="text-xl text-muted-foreground">
              Harness the power of artificial intelligence to enhance your content strategy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Summaries</h3>
              <p className="text-muted-foreground">
                AI-generated summaries help readers quickly grasp the main points of each article.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Tagging</h3>
              <p className="text-muted-foreground">
                Automatically suggested tags make content more discoverable and organized.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Reading Insights</h3>
              <p className="text-muted-foreground">
                Get accurate reading time estimates and content analysis to improve your writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-primary to-primary/20 p-0.5 rounded-2xl">
            <div className="bg-background rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Content?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Join thousands of publishers who are already leveraging AI to enhance their content strategy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="px-8">
                  <a href="/posts">Start Reading</a>
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <a href="/admin">Create Content</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}