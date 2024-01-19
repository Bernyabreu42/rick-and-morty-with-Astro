const base = import.meta.env.BASE_URL

export default function Pagination({currentCharacterId}) {

  const nextPage = currentCharacterId <= 825 ? `${base}/characters/${currentCharacterId + 1}` : `${base}/characters/${currentCharacterId - 1}`
  const prevPage = currentCharacterId >= 2 ? `${base}/characters/${currentCharacterId - 1}` : `${base}/characters/${currentCharacterId + 1}`

  return (
    <div class=" flex items-center justify-between">

        <a  href={prevPage} class="flex items-center border border-gray-700 p-3 text-xs sm:text-xl rounded-md hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left-lines-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h2a1 1 0 0 0 1 -1v-6l-.007 -.117a1 1 0 0 0 -.993 -.883l-2 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" stroke-width="0" fill="currentColor" />
            <path d="M21 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
            <path d="M18 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
          </svg>
        </a>

        <a href={`${base}/characters/${Math.floor(Math.random() * 826)}`} class="flex items-center border border-gray-700 p-3 text-xs sm:text-xl rounded-md hover:bg-gray-800" >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-infinity" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9.828 9.172a4 4 0 1 0 0 5.656a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828" />
          </svg>
        </a>

        <a href={nextPage} class="flex items-center border border-gray-700 p-3 text-xs sm:text-xl rounded-md hover:bg-gray-800" >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right-lines-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.585l-1.999 .001a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l1.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" stroke-width="0" fill="currentColor" />
            <path d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
            <path d="M6 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" />
          </svg>
        </a>
      </div>
  )
}
