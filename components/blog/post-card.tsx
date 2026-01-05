import Link from 'next/link';
import { PostData } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface PostCardProps {
  post: PostData;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-4">
        <CardTitle className="text-xl">
          <Link 
            href={`/posts/${post.slug}`} 
            className="hover:text-primary transition-colors"
          >
            {post.frontmatter.title}
          </Link>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-4">
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.frontmatter.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{formatDate(post.frontmatter.date)}</span>
          <span>{post.frontmatter.readingTime}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          {post.frontmatter.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}