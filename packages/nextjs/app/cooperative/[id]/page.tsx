"use client";

import Image from "next/image";
import { PurchaseTokens } from "../_components/PurchaseTokens";
import { Bar } from "~~/app/marketplace/components/Bar";
import { CooperativeProps } from "~~/types/marketplace";

const cooperatives: CooperativeProps[] = [
  {
    name: "Cooperativa de Café da Paraíba",
    location: "Kumasi",
    id: "1",
    members: 10,
    crops: ["Cassava", "Maize", "Tomato"],
    image: "/coop1.png",
    totalProgress: 88,
    currentProgress: "4.86K/6K",
    remaningTime: "7 days",
  },
  {
    name: "Cooperativa de Milho Verde",
    location: "Accra",
    id: "2",
    members: 20,
    crops: ["Cassava", "Maize", "Tomato"],
    image: "/coop2.png",
    totalProgress: 25,
    currentProgress: "2.5K/10K",
    remaningTime: "13 days",
  },
  {
    name: "Cooperativa de Soja do Mato Grosso",
    location: "Takoradi",
    id: "3",
    members: 30,
    crops: ["Cassava", "Maize", "Tomato"],
    image: "/coop3.png",
    totalProgress: 75,
    currentProgress: "18K/22K",
    remaningTime: "4 days",
  },
  {
    name: "Cooperativa de Soja do Mato Grosso",
    location: "Ho",
    id: "4",
    members: 40,
    crops: ["Cassava", "Maize", "Tomato"],
    image: "/coop3.png",
    totalProgress: 97,
    currentProgress: "2.86K/3K",
    remaningTime: "1 day",
  },
];

export default function Cooperative({ params }: { params: { id: string } }) {
  const cooperative: CooperativeProps | undefined = cooperatives.findLast(c => c.id === params.id);

  if (!cooperative) {
    return <div>Cooperative not found</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-14">
      <div className="aspect-[1.75] relative [&>p]:text-yellow-950">
        <Image src={cooperative.image} alt={cooperative.name} width={517} height={295} layout="responsive" />
        <span className="z-50 text-yellow-50 absolute bottom-4 left-5 font-semibold text-[32px]">
          {cooperative.name}
        </span>

        <p>Cooperativa Soja Verde: Cultivando o Futuro com Você</p>
        <p>
          A Cooperativa Soja Verde é a união de pequenos produtores que acreditam na força da união e do trabalho
          conjunto para construir um futuro melhor para o agronegócio brasileiro. Nascida da paixão pela terra e pelo
          cultivo da soja, nossa cooperativa se dedica a fornecer produtos de alta qualidade para o mercado, assegurando
          preços justos para os produtores e promovendo o desenvolvimento social e econômico das comunidades onde
          atuamos.
        </p>

        <p>
          Com um compromisso inabalável com a sustentabilidade, empregamos práticas agrícolas inovadoras que preservam o
          meio ambiente e garantem a qualidade da nossa soja. Através da constante busca por conhecimento e tecnologia,
          investimos na capacitação dos nossos cooperados e na modernização da produção, impulsionando a competitividade
          do nosso setor.
        </p>

        <p>
          Ao investir na Cooperativa Soja Verde, você estará investindo em um futuro mais próspero para o agronegócio
          brasileiro. Você estará contribuindo para a produção de alimentos saudáveis e de alta qualidade, para a
          sustentabilidade da agricultura familiar e para o desenvolvimento social e econômico das comunidades rurais.
        </p>

        <p>Junte-se a nós e faça parte dessa história de sucesso!</p>
      </div>

      <div className="shadow-xl rounded-[10px] px-14 pt-8 pb-14 shadow-yellow-900/20 flex flex-col">
        <Bar progress={cooperative.totalProgress} />

        <div className="flex justify-between [&>span]:font-semibold [&>span]:text-[38px] mt-5 [&>span]:text-yellow-950">
          <span>{cooperative.totalProgress}%</span>
          <span>${cooperative.currentProgress}</span>
          <span>{cooperative.remaningTime}</span>
        </div>

        <div className="mt-14 flex items-center justify-between gap-2 flex-wrap">
          <div>
            <span className="text-yellow-950 text-xl font-semibold">Website:</span>
            <a
              href="https://cooperativasojamt.com.br"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 text-xl hover:underline"
            >
              &nbsp;https://cooperativasojamt.com.br
            </a>
          </div>

          <span className="text-yellow-950 text-xl font-semibold">
            Modalidade: <span className="font-normal">Recompensa*</span>
          </span>
        </div>

        <p className="text-yellow-950 text-xl mt-10">
          *Na modalidade Recompensa os investidores que participaram da arrecadação recebem produtos ou serviços da
          cooperativa. A quantidade, quando, e quais produtos e serviços serão deliberados, são decisões a critério da
          coorporativa. Para mais informações sobre as modalidades acesse o link.
        </p>

        <div className="mt-14 flex items-center justify-between gap-2">
          <span className="text-yellow-950 text-xl font-semibold">
            Max Supply: <span className="font-normal">Recompensa*</span>
          </span>

          <span className="text-yellow-950 text-xl font-semibold">
            Price Unit: <span className="font-normal">Recompensa*</span>
          </span>
        </div>

        <PurchaseTokens />
      </div>
    </div>
  );
}
