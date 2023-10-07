'use client'
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

export default function Init() {
  const [state, setState] = useState(0)
  const history = useRouter()

  const initializate = useCallback(() => {
    setTimeout(() => {
      setState(1)
      setTimeout(() => {
        setState(2)
        setTimeout(() => {
          setState(3)
          setTimeout(() => {
            setState(4)
            setTimeout(() => {
              history.push('/home')
            }, 3000)
          }, 500)
        }, 500)
      }, 1000)
    }, 2000)
  }, [history])

  useEffect(() => {
    initializate()
  }, [initializate])

  return (
    <>
      { state === 0 || state === 2 || state === 3 ? (
        <main className="flex min-h-screen flex-col p-4 text-white text-2xl tracking-[0.2em]">
          <h1>Iniciando Windows 95...</h1>
          { state === 2 || state === 3 ? (
            <div className="mt-16">
              <h1 className="mt-5">C:\{">"}mode com codepage prepare=((850) C:\WINDOWS\COMMAND\ega.cpi)</h1>
              <h1 className="mt-5">MODE preparar função codepage completada</h1>
              <h1 className="mt-5">C:\{">"}mode com codepage select=850</h1>
              { state === 3 && (
                <>
                  <h1 className="mt-5">MODE selecionar função codepage completada</h1>
                  <h1 className="mt-5">C:\{">"}keyb la,,C:\WINDOWS\COMMAND\keyboard.sys</h1>
                  <h1 className="mt-5">C:\{">"}</h1>
                  <div className="w-5 mt-16">
                    <h1 className="animate-typing border-b-2 border-b-white"/>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="w-5 mt-16">
              <h1 className="animate-typing border-b-2 border-b-white"/>
            </div>
          ) }
        </main>
      ) : (
        <div className="h-screen w-screen bg-initial bg-cover"/>
      ) }
    </>
  )
}
