import { useEffect, useRef, useState } from "preact/hooks"
import { type Character } from "../../types/Character"
import {type Location } from "../../types/Location";
import {type Info } from "../../types/Info";
import {type Episode } from "../../types/Episode";
import CardsAPI from "./CardsAPI";

export type API = "character" | "location" | "episode"

type SearcherProps = {
  placeholder?: string;
  api?: API;
};

export default function Searcher({placeholder = 'Your opinion means very little to me', api = 'character'}: SearcherProps) {

  const refInput = useRef(null)
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState({
    count: 0,
    pages: 0,
    next: '',
    prev: ''
  })

  useEffect(()=>{
    if(refInput.current){
      refInput.current.focus()
    }
  },[])

  useEffect(()=>{
      handlerChange()
  },[page, value])

  const handlerChange = async () => {
   try {

      const responseData = await fetch(`https://rickandmortyapi.com/api/${api}/?page=${page}&name=${value}`)
      if(!responseData.ok && responseData.status !== 200){
         setData(null)
         return
      }

      const {info, results} = await responseData.json()
      let convertData =  api === 'character' ?  results as Character[] :
      api === 'location' ?  results as Location[] :
      api === 'episode' ?  results as Episode[] : []

      const currentInfoPaginatination = info as Info
      setData(convertData)
      setPagination(currentInfoPaginatination)
   } catch (error) {
    console.log(error)
   }
  }

  const handlerPrev = (event) => {
    event.stopPropagation()
    setPage(page - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlerNext = (event) => {
    event.stopPropagation()
    setPage(page + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return (
    <div class='relative px-5 max-w-5xl m-auto'>
      <div class='top-[4.5rem] z-10 h-[75px] sticky bg-primary flex items-center' >
        <input
          ref={refInput}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setValue(target?.value)
            setPage(1)
          }}
          placeholder={placeholder}
          type="search"
          class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm p-3 text-black outline-none sticky top-0 left-0 z-40 overflow-hidden "
        />
      </div>
          { !data
            ? (
              <div class="flex justify-center items-center pb-10 gap-5">
                <span>
                  No hubo coincidencia para tu búsqueda: "{value}"
                </span>
              </div>
            )
            : data.length ? (
          <>
            <ul class='responsive-grid mt-3 overflow-y-auto scroll-custom pb-5'>
                {
                   data.map(item => (
                      <CardsAPI tipo={api} character={item} />
                   ))
                }
            </ul>

              <div onClick={handlerPrev}
              class="flex justify-center items-center pb-10 gap-5">
              <button  disabled={!pagination?.prev ? true : false}
              class="flex items-center border border-gray-700 p-3 text-xs sm:text-xl rounded-md hover:bg-gray-800 disabled:bg-zinc-500 disabled:cursor-not-allowed">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left-lines-filled" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h2a1 1 0 0 0 1 -1v-6l-.007 -.117a1 1 0 0 0 -.993 -.883l-2 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" stroke-width="0" fill="currentColor" />
                  <path d="M21 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
                  <path d="M18 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
                </svg>
              </button>

              <span>{page} of {pagination?.pages} </span>

              <button onClick={handlerNext}
              disabled={!pagination?.next ? true : false}
              class="flex items-center border border-gray-700 p-3 text-xs sm:text-xl rounded-md hover:bg-gray-800 disabled:bg-zinc-500 disabled:cursor-not-allowed" >
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right-lines-filled" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.585l-1.999 .001a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l1.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" stroke-width="0" fill="currentColor" />
                <path d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
                <path d="M6 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
              </svg>
              </button>
              </div>
          </>
          ): null }

    </div>
  )
}
