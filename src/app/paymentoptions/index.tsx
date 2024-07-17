'use client'
import Footer from "../components/footer";
import Header from "../components/header";
import HeaderDynamic from "../components/headerDynamic";
import PixList from "./pixControlerArea";

export default function Index() {

   const headerPage = "João, como você quer pagar?"
  return (
    <div className="flex min-h-screen flex-col items-center justify-between  min-w-screen">
      <Header></Header>
      
   
   <HeaderDynamic header={headerPage}></HeaderDynamic>
      
      <PixList></PixList>

    <Footer></Footer>
    </div>
    
  
  );
}
