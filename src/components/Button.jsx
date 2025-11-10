
export default function Button({type, text}){

    return(
        <button type={type}
        className="px-4 py-2 rounded w-full font-bold text-white text-2xl
        bg-linear-to-r from-sky-500 to-indigo-700">
        {text}
        </button>
    )
}