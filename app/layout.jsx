import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import { ToastContainer } from "react-toastify";

import "styles/globals.css";

export const metadata = {
  title: "Nextjs MyShop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  let locale = "en";
  return (
    <html lang="th" data-theme="shopTheme">
      <body suppressHydrationWarning={true} className={`font-anuphan`}>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            <div className="pt-20 w-full">{children}</div>
          </main>

          <ToastContainer
            autoClose={2000}
            hideProgressBar={true}
            rtl={locale === "en" ? false : true}
            position={locale === "en" ? "top-right" : "top-left"}
          />
        </Provider>
      </body>
    </html>
  );
}