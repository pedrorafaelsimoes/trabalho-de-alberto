
"use client";

import React, { useState } from 'react';

const appsFoco = [
  {
    nome: "VisionGuide AI",
    descricao: "O VisionGuide AI serve como um assistente de navegação micro em tempo real, projetado para atuar como os olhos digitais de pessoas com deficiência visual durante seus deslocamentos urbanos. Sua principal função é utilizar a câmera do smartphone combinada com algoritmos avançados de visão computacional para escanear constantemente o trajeto do usuário, identificando de forma instantânea qualquer elemento que possa representar um risco ou uma referência no caminho. O aplicativo processa essas imagens locais e as traduz em descrições de áudio contextualizadas, alertando o usuário sobre a proximidade de obstáculos estáticos ou dinâmicos, como lixeiras, postes, buracos na calçada, galhos baixos e pedestres em movimento. Além disso, a ferramenta complementa a navegação macro orientada por satélite ao fazer a leitura de textos no ambiente, permitindo que a pessoa reconheça números de casas, nomes de lojas e placas de sinalização turística ou de trânsito enquanto caminha, transformando dados visuais complexos em comandos de voz naturais que garantem maior autonomia, segurança e confiança na mobilidade diária.",
    recursoPrincipal: "Descrição de cenários via áudio gerado por IA."
  },
  {
    nome: "GeoSonar Audio",
    descricao: "O GeoSonar Audio é um aplicativo focado na orientação espacial e na percepção de relevo através do som, servindo como uma ferramenta complementar de navegação macro para pessoas com deficiência visual. Sua principal função é mapear pontos de interesse e a geografia das ruas ao redor do usuário, utilizando a tecnologia de áudio 3D espacial (binural) para emitir alertas sonoros personalizados. Em vez de comandos genéricos, o aplicativo faz com que os avisos sonoros pareçam vir da direção física real onde o local ou o percurso se encontra; por exemplo, se uma farmácia ou uma faixa de pedestres estiver à esquerda do usuário, o som correspondente será emitido especificamente no lado esquerdo dos fones de ouvido. Trabalhando com mapas vetoriais detalhados e dados de geolocalização, o GeoSonar Audio cria um mapa acústico do ambiente urbano, emitindo sinais sonoros semelhantes a um sonar para indicar a proximidade de esquinas, cruzamentos, pontos de ônibus e obstáculos estruturais na calçada, permitindo que a pessoa construa um mapa mental do trajeto e caminhe com maior previsibilidade e segurança pelas ruas.",
    recursoPrincipal: "Alertas de proximidade de faixas de pedestre."
  }
];

export default function Home() {
  const [simulacaoTexto, setSimulacaoTexto] = useState("Clique no botão abaixo para iniciar a simulação de áudio da IA.");
  const [estaSimulando, setEstaSimulando] = useState(false);

  const iniciarSimulacao = () => {
    setEstaSimulando(true);
    setSimulacaoTexto("Simulação Iniciada: 'Em 15 metros, curva suave à direita. Obstáculo estático (lixeira) detectado no lado esquerdo da calçada.'");
    
    
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance("Em 15 metros, curva suave à direita. Obstáculo estático detectado no lado esquerdo da calçada.");
      utterance.lang = "pt-BR";
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Acessibilidade: Link para pular direto para o conteúdo */}
      <a href="#conteudo-principal" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-blue-600 focus:text-white">
        Pular para o conteúdo principal
      </a>

      {/* Cabeçalho */}
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold font-mono tracking-wide">Pedro Rafael</h1>
          <h1 className="text-2xl font-bold font-mono tracking-wide">Gabriel Luiz</h1>
          <nav aria-label="Navegação Principal">
            <ul className="flex space-x-4">
              <li><a href="#tecnologia" className="hover:underline focus:ring-2 focus:ring-white p-2">Tecnologia</a></li>
              <li><a href="#apps" className="hover:underline focus:ring-2 focus:ring-white p-2">Aplicativos</a></li>
              <li><a href="#simulador" className="hover:underline focus:ring-2 focus:ring-white p-2">Simulador</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main id="conteudo-principal" className="max-w-4xl mx-auto p-6 space-y-12">
        
        {/* Introdução */}
        <section id="tecnologia" aria-labelledby="titulo-intro" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 id="titulo-intro" className="text-3xl font-bold text-blue-900 mb-4">Como a IA e o GPS Guiam Pessoas Cegas</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Os aplicativos modernos de navegação assistiva transformam a mobilidade de pessoas com deficiência visual ao unirem a inteligência espacial do GPS com a percepção em tempo real da Inteligência Artificial. O processo começa de forma macro com o GPS, que se conecta aos satélites para rastrear a geolocalização do usuário, calcular rotas acessíveis por calçadas e emitir comandos estruturais de direção, frequentemente utilizando áudio espacial em 3D para fazer o som parecer vir fisicamente da rua onde a pessoa deve virar. À medida que o usuário caminha, a Inteligência Artificial assume o papel de navegação micro por meio da visão computacional, utilizando a câmera do smartphone para escanear constantemente o ambiente ao redor. Essa IA analisa o cenário de forma instantânea para identificar obstáculos dinâmicos e estáticos que o mapeamento tradicional não consegue prever, como orelhões, galhos baixos, buracos na calçada, obras ou pedestres vindo na direção oposta. Além disso, algoritmos de reconhecimento de texto (OCR) integrados à IA leem placas de trânsito, números de edifícios e nomes de estabelecimentos comerciais em tempo real. A fusão dessas duas tecnologias ocorre perfeitamente no dia a dia: enquanto o GPS guia a pessoa até o endereço exato de um ponto de ônibus, a IA assume o controle para ler o letreiro do veículo que está se aproximando ou para verificar se o semáforo de pedestres está verde, garantindo uma travessia segura e uma autonomia urbana sem precedentes.
          </p>
        </section>

        {/* Simulador de IA */}
        <section id="simulador" aria-labelledby="titulo-simulador" className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 id="titulo-simulador" className="text-2xl font-bold text-blue-900 mb-2">Simulador de Orientação por IA</h2>
          <p className="mb-4 text-gray-700">Experimente como uma IA processa o ambiente e dita as instruções de navegação urbana:</p>
          
          <div className="bg-gray-900 text-green-400 p-4 rounded-md font-mono mb-4 min-h-[80px]" aria-live="polite">
            {simulacaoTexto}
          </div>

          <button
            onClick={iniciarSimulacao}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow focus:ring-4 focus:ring-blue-300 focus:outline-none transition-colors"
            aria-label="Ouvir simulação de comandos de voz da inteligência artificial"
          >
            {estaSimulando ? "Ouvir Novamente" : "Iniciar Demonstração de Voz"}
          </button>
        </section>

        {/* Diretório de Soluções */}
        <section id="apps" aria-labelledby="titulo-apps" className="space-y-6">
          <h2 id="titulo-apps" className="text-2xl font-bold text-blue-900">Aplicativos em Destaque</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {appsFoco.map((app, index) => (
              <article key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{app.nome}</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-4">
                    {app.tecnologia}
                  </span>
                  <p className="text-gray-600 mb-4">{app.descricao}</p>
                </div>
                <div className="border-t pt-4 mt-auto">
                  <p className="text-sm text-gray-500">
                    <strong className="text-gray-700">Diferencial de IA:</strong> {app.recursoPrincipal}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      {/* Rodapé */}
      <footer className="bg-gray-950 text-gray-400 p-6 text-center border-t border-gray-800 text-sm">
        <p>ETE José Humberto de Moura Cavalcanti 2° DS 'A'</p>
      </footer>
    </div>
  );
}
