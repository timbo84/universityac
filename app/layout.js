import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "University Heating & Cooling | San Angelo's Trusted HVAC Experts",
  description:
    "San Angelo's most trusted heating and cooling company. Over 21 years of residential & commercial HVAC service. Licensed, insured, and available 24/7 for emergencies. Get a free quote today!",
  keywords:
    "HVAC San Angelo, air conditioning repair, heating service, furnace repair, AC installation, University Heating Cooling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
