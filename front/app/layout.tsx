import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "TEC Racing",
  description: "Team management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="relative h-full max-h-screen ml-[16vw] transition-all duration-200 rounded-xl">
          {children}
        </main>
      </body>
    </html>
  );
}
