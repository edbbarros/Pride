import { useState } from 'react';
import { Collapse } from 'flowbite';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import background from './assets/background1.png'
import truck from './assets/caminhao-de-entrega.png'
import card from './assets/cartao.png'
import dollar from './assets/simbolo-do-dolar.png'
import ball14lb from './assets/ball-14lb.jpg'
import instagram from './assets/instagram.png'
import Logo from './assets/logo.png'
import LogoMarca from './assets/logo-Name.png'
import './App.css';


function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded((prev) => !prev);
  }
  const onExpand = () => { }
  const onCollapse = () => { }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 5,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '0px',


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 5
        }
      }
    ]
  }

  return (
    <>
      <nav class="bg-white border-gray-200 z-10">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <a href="https://flowbite.com/" class="flex items-center">
            <img src={LogoMarca} class="h-14 mr-3" alt="Logo - pride" />
          </a>
          <button
            onClick={toggleCollapse} aria-expanded={isExpanded} data-collapse-toggle="navbar-default" type="button" id='triggerEl' class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isExpanded ? '' : 'hidden'}`}>
            <ul class="font-medium  flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Contato</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Produtos</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Ofertas</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <section className='h-screen flex flex-col items-center  lg:items-start bg-mobile bg-desktop'>
        <div className='flex flex-col text-center items-center gap-4 my-72 lg:gap-5 lg:ml-32'>
          <h1 className='text-white text-2xl lg:text-4xl font-bold'>NÃO PERCA MAIS <h1 className='text-7xl lg:text-9xl font-bold'>TEMPO!</h1></h1>
          <p className=' text-blue-500 font-bold text-2xl w-56 mb-10 lg:text-3xl lg:w-80'>Comece a renovar sua box com a Pride.</p>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-lg rounded-lg  px-5 py-2.5 mr-2 mb-2 w-60 focus:outline-none ">Tenho interesse</button>
        </div>
      </section >

      <section className='flex flex-col items-center justify-center lg:justify-around lg:items-none font-bold gap-5'>
        <ul className='lg:flex lg:flex-row my-5 lg:mx-10'>
          <li className='flex items-center gap-5 my-5 lg:mx-10 '>
            <img src={truck} alt="" className='h-10' />
            FRETE REDUZIDO (NORDESTE)
          </li>
          <li className='flex items-center gap-5  my-5 lg:mx-10'>
            <img src={card} alt="" />
            EM ATÉ 12X SEM JUROS
          </li>
          <li className='flex items-center gap-5 my-5 lg:mx-10'>
            <img src={dollar} alt="" />
            10% OFF NO BOLETO
          </li>
        </ul>
      </section>

      <section className='flex flex-col items-center bg-blue-500'>

        <section className='my-5'>
          <h1 className='text-white text-4xl font-bold'>Ofertas Imperdiveis!</h1>
        </section>

        <section className='flex flex-col lg:flex lg:flex-row gap-5 my-10'>
          <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-t-lg " src={ball14lb} alt="" />
            </a>
            <div class="p-2 flex flex-col items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
              <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-60 ">
                Comprar
              </a>
            </div>
          </div>

          <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow  ">
            <a href="#">
              <img class="rounded-t-lg " src={ball14lb} alt="" />
            </a>
            <div class="p-2 flex flex-col items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
              <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-60 ">
                Comprar
              </a>
            </div>
          </div>
          <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow  ">
            <a href="#">
              <img class="rounded-t-lg " src={ball14lb} alt="" />
            </a>
            <div class="p-2 flex flex-col items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
              <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-60 ">
                Comprar
              </a>
            </div>
          </div>
          <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow  ">
            <a href="#">
              <img class="rounded-t-lg " src={ball14lb} alt="" />
            </a>
            <div class="p-2 flex flex-col items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
              <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-60 ">
                Comprar
              </a>
            </div>
          </div>

        </section>

      </section>

      <section className='flex flex-col items-center  bg-white'>

        <section className='my-5'>
          <h1 className='text-black text-5xl font-bold'>Anilhas</h1>
        </section>

        <section className='flex flex-col lg:flex lg:flex-row gap-5 my-10'>
          <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-t-lg " src={ball14lb} alt="" />
            </a>
            <div class="p-2 flex flex-col items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
              <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-60 ">
                Comprar
              </a>
            </div>
          </div>

          <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-t-lg " src={ball14lb} alt="" />
            </a>
            <div class="p-2 flex flex-col items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
              <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-60 ">
                Comprar
              </a>
            </div>
          </div>
          <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-t-lg " src={ball14lb} alt="" />
            </a>
            <div class="p-2 flex flex-col items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
              <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-60 ">
                Comprar
              </a>
            </div>
          </div>
          <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-t-lg " src={ball14lb} alt="" />
            </a>
            <div class="p-2 flex flex-col items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
              <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-60 ">
                Comprar
              </a>
            </div>
          </div>

        </section>

      </section>

      <section className='flex flex-col items-center justify-center  bg-white'>

        <section className='my-5'>
          <h1 className='text-black text-5xl font-bold'>Medicine Ball</h1>
        </section>

        <section className='flex flex-col lg:flex lg:flex-row gap-5 my-10'>
          <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-t-lg " src={ball14lb} alt="" />
            </a>
            <div class="p-2 flex flex-col items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
              <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-60 ">
                Comprar
              </a>
            </div>
          </div>

          <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-t-lg " src={ball14lb} alt="" />
            </a>
            <div class="p-2 flex flex-col items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
              <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-60 ">
                Comprar
              </a>
            </div>
          </div>
          <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-t-lg " src={ball14lb} alt="" />
            </a>
            <div class="p-2 flex flex-col items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
              <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-60 ">
                Comprar
              </a>
            </div>
          </div>
          <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <a href="#">
              <img class="rounded-t-lg " src={ball14lb} alt="" />
            </a>
            <div class="p-2 flex flex-col items-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
              <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-60 ">
                Comprar
              </a>
            </div>
          </div>

        </section>

      </section>

      <section className=''>

        <section className='flex justify-center my-10'>
          <h1 className='text-black text-5xl font-bold'>Outros produtos</h1>
        </section>

        <Slider {...settings} >
          <div>
            <div class="w-full lg:w-max-xs bg-white border border-gray-200 rounded-lg shadow  ">
              <a href="#">
                <img class="w-full rounded-t-lg  " src={ball14lb} alt="" />
              </a>
              <div class="p-2 flex flex-col items-center">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
                <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full ">
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div>
            <div class="w-full lg:w-max-sm bg-white border border-gray-200 rounded-lg shadow  ">
              <a href="#">
                <img class="w-full rounded-t-lg  " src={ball14lb} alt="" />
              </a>
              <div class="p-2 flex flex-col items-center">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
                <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full ">
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div>
            <div class="w-full lg:w-max-sm bg-white border border-gray-200 rounded-lg shadow  ">
              <a href="#">
                <img class="w-full rounded-t-lg  " src={ball14lb} alt="" />
              </a>
              <div class="p-2 flex flex-col items-center">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
                <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full ">
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div>
            <div class="w-full lg:w-max-sm bg-white border border-gray-200 rounded-lg shadow  ">
              <a href="#">
                <img class="w-full rounded-t-lg  " src={ball14lb} alt="" />
              </a>
              <div class="p-2 flex flex-col items-center">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
                <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full ">
                  Comprar
                </a>
              </div>
            </div>
          </div>
          <div>
            <div class="w-full lg:w-max-sm bg-white border border-gray-200 rounded-lg shadow  ">
              <a href="#">
                <img class="w-full rounded-t-lg  " src={ball14lb} alt="" />
              </a>
              <div class="p-2 flex flex-col items-center">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Produto 1</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 w-44">R$000,00 até 12x de R$00,00 sem juros ou R$0000,00 à vista pix </p>
                <a href="#" class=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-full ">
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </Slider>

      </section>

      <section className='my-10 text-white bg-blue-500 py-5'>
        <h1 className='mx-2 lg:mx-32 text-3xl font-bold py-3'>Mais que equipamentos de ginástica!</h1>
        <h3 className='mx-2 lg:mx-32 py-3 text-2xl font-semibold'>Pride sua melhor versão através do condicionamento fisico</h3>
        <p className='mx-2 lg:mx-32 text-md lg:text-xl font-semibold lg:w-2/4' > Se você está procurando mais do que simples equipamentos de ginástica, a Box Pride é o lugar perfeito para você. Nós acreditamos que o condicionamento físico não se trata apenas de levantar pesos mas sim de se tornar a sua melhor versão.
        </p>

        <section className='flex justify-center items-center gap-3 my-5'>
          <img src={instagram} alt="instagram logo" />
          <a className='text-xl font-bold' href="https://www.instagram.com/_bepride/">/bepride</a>
        </section>

      </section>



      <footer class="bg-white">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class=" grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div class=" gap-8">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Contato</h2>
                <ul class="text-gray-600 font-medium ">
                  <li class="mb-1">
                    <a href="https://flowbite.com/" class="">Bairro | Recife-Pe</a>
                  </li>
                  <li>
                    <a href="https://flowbite.com/" class="">(81) 0000-0000 | (81) 90000-0000 </a>
                  </li>
                  <li>
                    <a href="https://flowbite.com/" class="">email@gmail.com</a>
                  </li>
                  <li>
                    <a href="https://flowbite.com/" class="">CNPJ:00.000.000/0000-00</a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Iniciar</h2>
              <ul class="text-gray-600 font-medium ">
                <li class="mb-1">
                  <a href="https://flowbite.com/" class="">Contato</a>
                </li>
                <li>
                  <a href="https://flowbite.com/" class="">Ofertas</a>
                </li>
                <li>
                  <a href="https://flowbite.com/" class="">Produtos</a>
                </li>
              </ul>
            </div>

            <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                <img src={Logo} class="h-32 mr-3" alt="Pride Logo" />
              </a>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-aut lg:my-8" />
          <div class="flex items-center justify-center">
            <span class="text-sm text-gray-500 text-center">© 2023 Todos os direitos reservados a Pride - Desenvolvido por Pumadi.
            </span>

          </div>
        </div>
      </footer >


    </>




  )
}



export default App
