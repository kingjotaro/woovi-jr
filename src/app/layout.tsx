import { TransactionProvider } from './pixcontext';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TransactionProvider>{children}</TransactionProvider>
      </body>
    </html>
  );
}
