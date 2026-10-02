import Func from "../comp/func";
import Gameslide from "../comp/gameslide";
import Sildeshow from"../comp/sildeshow"

function Home() {
  return (
    <>
    <Func />
    <Section/>
    <Gameslide/>
    <Footer/>
    </>
  );
}
function Section(){
  return(
    <div >
      <Sildeshow />
    </div>

  )
}
function Footer(){
  return(
    <footer className="border-t border-white/10 bg-black px-6 py-5 text-center text-sm text-gray-400">
        <p>
            © 2026 <span className="font-semibold text-white">PsGames</span>.
            All Rights Reserved.
        </p>
    </footer>
  )
}


export default Home;