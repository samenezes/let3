import { useState } from "react"
import Notas from "../components/notas"
import { useLocalStorage } from "@uidotdev/usehooks"

export default function Home() {
    const [lista, setlista] = useLocalStorage("lista", [])
    const [nomenota, setnomenota] = useState("")
    function adicionarnotas() {
        if (nomenota == "") {
            return
        } else {
            setlista([...lista, {
                id: lista.length + 1,
                nome: nomenota,
            }])
            setnomenota("")
        }
    }
    function enter(e){
        if(e.key == "Enter"){
            adicionarnotas()
        }
    }

    return (
        <div className="grid grid-rows-[auto_1fr] h-screen">
           <div className="flex justify-center gap-4 p-4 bg-secondary">
           <input className="input" placeholder="Notas" id="nota" value={nomenota} onChange={(e) => setnomenota(e.target.value)} onKeyDown={(e) => enter(e)}/>
            <button  className="btn" onClick={adicionarnotas} >Adicionar</button>
           </div>
           <div className="p-4 gap-4 h-full ">
                <ul className="p-4 bg-neutral rounded-md  h-full">
                    {lista.map((nota, posicao) => (
                        <Notas  key={posicao} id={nota.id} nome={nota.nome}/>
                    ))}
                </ul>
            </div>            
        </div>
    )
    
    
}