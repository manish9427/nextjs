import Providers from "./providers";
import NavBar from "@/components/navBar/NavBar";
import "./layout.css";


export const metadata = {
  title: "My Next.js App",
  description: "Welcome to My Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="layout">
            <header>
              <h1>Welcome to My Next.js App</h1>
              <NavBar />
            </header>
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
