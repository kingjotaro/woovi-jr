'use client';
import { TransactionProvider } from './pixcontext';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Woovi Jr Challenge</title>
      <body>
        <TransactionProvider>{children}</TransactionProvider>
      </body>
    </html>
  );
}
