'use client'
import Footer from "./components/footer";
import Header from "./components/header";
import HeaderDynamic from "./components/headerDynamic";
import PixList from "./components/pixControlerArea";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between  min-w-screen">
      <Header></Header>
      
      <HeaderDynamic></HeaderDynamic>
      
      <PixList></PixList>

    <Footer></Footer>
    </div>
    
  
  );
}
