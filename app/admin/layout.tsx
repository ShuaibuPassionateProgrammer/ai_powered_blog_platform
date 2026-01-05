import { Header } from '@/components/blog/header';
import { Footer } from '@/components/blog/footer';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container max-w-6xl mx-auto px-4">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}