import './globals.css';

export const metadata = {
  title: 'Crisp Agriculture | Market Access and Registration Support Across EMEA',
  description:
    'Crisp Agriculture helps producers access EMEA markets through registration support, market access consulting, and commission-based sales representation.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
