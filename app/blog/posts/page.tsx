import { getAllPosts } from '@/lib/blog';
import { PostCard } from '@/components/blog/post-card';

export const metadata = {
  title: 'All Posts - AI-Powered Blog Platform',
  description: 'Browse all articles on web development, AI, and technology',
};

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">All Articles</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our complete collection of articles on web development, AI, and technology.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No posts yet</h2>
          <p className="text-muted-foreground">Check back later for new content.</p>
        </div>
      )}
    </div>
  );
}