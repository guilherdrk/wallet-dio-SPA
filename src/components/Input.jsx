
export default function Input({type, placeholder, register, name}) {
    
    return(
        <input type={type}
        placeholder={placeholder}
        {...register(name)}
        className="rounded p-2 w-full bg-white"/>
    )
}

