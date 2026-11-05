import Camiseta from "/images/camiseta-2.png"



export const CardProduct = () => {
    return (
        <main className="h-screen justify-center flex items-center bg-black">
            <article className=" w-75 h-auto rounded-2xl overflow-hidden">
                <img className="w-full h-60"
                    src={Camiseta} alt="Camiseta Roxa Dev em Dobro" />
                <div className="bg-[#130234] py-2.5 px-3.5 flex flex-col">
                    <h3 className="text-white mb-5">Camiseta Dev em Dobro</h3>
                    <p className="text-white">Cor: Roxa</p>
                    <p className="text-white">Tamanho: M</p>
                    <span className="text-[#6BB27C] flex self-end font-bold">R$ 89,00</span>
                </div>
                <div className="bg-[#130234] flex justify-center px-3.5 pb-4.5">
                    <button className="bg-purple-500 w-full p-2.5 text-white rounded-[5px]">Adicionar ao carrinho</button>
                </div>
            </article>
        </main>

    )
}