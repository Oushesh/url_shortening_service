import { Footer } from "./Footer";
import Header from "./Header";
import LandingPageBody from "./Langing_Page_Body";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function RootLayout() 
{
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-200">
        <div className="flex flex-col h-screen w-screen">
          <Header/>
          <LandingPageBody/>
        </div>
      </body>
      <footer>
      </footer>
    </html>
  );
};

export default RootLayout;

//I use Semantic html to make my own website 
//and will make my own money.