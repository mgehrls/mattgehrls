import { colors } from "@/utils/colors";
import clsx from "clsx";
import { ThemeProvider } from "next-themes";
import { Inter, Roboto_Flex } from "next/font/google";

export const metadata = {
  title: "Matt Gehrls - Full Stack Web Dev",
  description: "A resume site for Matt Gehrls, a Full Stack Web Developer",
};

const roboto = Roboto_Flex({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* just import theme provider from react-theme, no need for your own component */}
      <ThemeProvider attribute="class" defaultTheme="dark">
        <body
          className={clsx(
            "mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 relative",
            roboto.className,
            "bg-slate-200 dark:bg-slate-900",
            "text-slate-700 dark:text-slate-400"
          )}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
