import { Card } from "../components/Card";
import { Element } from "../components/Element";
import { Header } from "../components/Header";
import { SwiperGallery } from "../components/SwiperGallery";

export function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full py-24 items-center justify-center bg-home bg-cover text-white">
        <h1 className='text-2xl font-bold mt-20 sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>ACOMPANHAMENTO EDUCACIONAL</h1>
        <Element color="white"/>
        <p className="text-sm">“A educação é o nosso passaporte para o futuro, pois, o <br/> amanhã pertence às pessoas que se preparam hoje.”</p>
        <Element />
        <span className="mb-4">MALCOLM X</span>
      </div>
      <main className="flex flex-col items-center mt-24 sm:w-[90vw]  2xl-[70vw] flex-wrap">
        <h1 className="text-2xl font-bold">ATENDIMENTOS</h1>
        <div className=" mt-4 mb-8 w-14 border-b-4 border-black"></div>
        <div className="flex-col sm:flex-row md:flex gap-x-8 my-4">
          <Card img="./img/acompanhamento.png" title="ACOMPANHAMENTO ESCOLAR" subtitle="FUNDAMENTAL I E II"/>
          <Card img="./img/reforco.png" title="REFORÇO ESCOLAR" subtitle="FUNDAMENTAL I E II"/>
          <Card img="./img/atendimento.png" title="ATENDIMENTO" subtitle="PSICOPEDAGÓGICO" />
        </div>

        <h1 className="mt-20 text-2xl font-bold">NOSSO ESPAÇO</h1>
        <div className=" mt-4 w-14 border-b-4 border-black"></div>
        <div className="my-8">
          <SwiperGallery/>
        </div>

        <h1 className="mt-20 text-2xl font-bold">NOSSA INSTITUIÇÃO</h1>
        <div className=" mt-4 mb-8 w-14 border-b-4 border-black"></div>
        {/* <div className="w-[900px] px-0 flex items-center justify-between">
          <div className="flex flex-col gap-y-20">
            <div className="flex items-center">
              <img className="h-20 pr-6" src="./img/student.svg" alt="student" />
              <strong>PROFESSORES<br/>QUALIFICADOS</strong>
            </div>

            <div className="flex items-center">
              <img className="h-20 pr-6" src="./img/article.svg" alt="student" />
              <strong>MATERIAL PRÓPRIO</strong>
            </div>

            <div className="flex items-center">
              <img className="h-20 pr-6" src="./img/user.svg" alt="student" />
              <strong>TRATAMENTO<br/>PERSONALIZADO</strong>
            </div>
          </div>
          <img className="mb-20" src="./img/child.svg" alt="" />
        </div> */}
      </main>
    </div>
  )
}
