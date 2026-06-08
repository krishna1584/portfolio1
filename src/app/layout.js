import "../styles/dracula.css";
import "leaflet/dist/leaflet.css";

import { Quicksand } from "next/font/google";
import Providers from "./providers";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Krishna Yadav",
    template: "%s | Krishna Yadav",
  },
  description: "Portfolio of Krishna Yadav, MERN developer and full-stack engineer.",
  icons: {
    icon: "/static/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
