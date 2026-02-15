import '@/styles/globals.css';
import { Metadata } from 'next';

export const metadata = {
  title: 'Unbound Kenya - Discover the 95%',
  description: 'Explore Kenya\'s hidden tourism gems beyond the safaris. Discover untapped destinations that make up 95% of Kenya\'s tourism potential.',
  keywords: 'Kenya tourism, hidden gems, travel Kenya, off-the-beaten-path, Kenya destinations',
  authors: [{ name: 'Unbound Kenya Team' }],
  openGraph: {
    title: 'Unbound Kenya - Discover the 95%',
    description: 'Explore Kenya\'s hidden tourism gems beyond the safaris',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
