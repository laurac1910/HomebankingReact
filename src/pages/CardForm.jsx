import React, {  useRef } from 'react'
import card from '../assets/card.png'




const CardForm = () => {

 const cardRef = useRef (null)
 const cardColorRef = useRef (null)

  function handleSubmit(e) {
    e.preventDefault();

    const card = {
      cardType: cardRef.current.value,
      color: cardColorRef.current.value,
    };
    console.log(card);
  }



  return (
    <div className="lg:w-[60%] relative lg:left-[30%] py-6 px-6 rounded-xl border border-gray-200 bg-white mt-10 flex flex-wrap gap-10 mb-10">
      <img src={card} alt="cards" />
<form  onSubmit={handleSubmit} className="max-w-sm mx-auto">
  <fieldset >
    <label htmlFor="card-type" className='text-lg font-semibold block '>Selec card type</label>
    <select  ref={cardRef} name="cardType" id="card-type" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
    <option value="">None</option>
      <option value="Credit">Credit</option>
      <option value="Debit">Debit</option>
    </select>
  </fieldset >
  <fieldset>
    <label htmlFor="color " className='text-lg font-semibold block mt-5 '>Select card membership (color)</label>
    <select ref={cardColorRef} name="color" id="color" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
      <option value="">None</option>
      <option value="Gold">Gold</option>
      <option value="Silver">Silver</option>
      <option value="Platinum">Platinum</option>
      </select>
  </fieldset >
  <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-5">
    <div className="absolute inset-0 w-3 bg-azul-marca transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black group-hover:text-white">Apply!</span>
  </button>
  </form>     
    </div>
  )
}

export default CardForm
