export interface IButtonRadius {
    title: string,
    btnExec: Function,
}

export function ButtonRadius({title}:IButtonRadius){
    return (<button className="flex flex-col items-center text-green-50 rounded-3xl h-12 bg-purple-700 text-center justify-center w-44"
      >
        
        {title}
    </button>)
}