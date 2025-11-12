import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Button from '../components/Button'
import Input from '../components/Input'
import { BiArrowBack } from "react-icons/bi"
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import ErrorInput from '../components/errorInput'

export default function Signup(){

    const signupSchema = z.object({
        name: z.string()
        .min(3, "O name presita ter no minímo 3 caracteres")
        .transform((name)=>{
            return name
            .trim()
            .split(" ")
            .map((word)=>{
                return word[0].toLocaleUpperCase().concat(word.substring(1));
            })
            .join(" ");
        }),
        email: z.string()
        .email('Invalid e-mail format')
        .nonempty('E-mail is required')
        .toLowerCase(),
        password: z.string().min(6, "A senha precisa ter no minimo 6 caracteres"),
        confirmPassword: z.string().min(6, "A senha precisa ter no minimo 6 caracteres"),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: "As senhas não correspondem",
        path: ["confirmPassword"],
    });
    
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(signupSchema)
    });

    function handleSubmitForm(data){
        console.log(data);
    }
    
    return(
        <div className="flex flex-col items-center justify-around bg-zinc-900
        rounded p-6 w-[35rem] h-[35rem] relative">
            
            <Link to="/signin">
            <BiArrowBack className='text-white absolute top-3 left-3 text-3xl cursor-pointer hover:text-sky-700'/>
            </Link>
            <img src={logo} alt="" className='w-44' />
            <form onSubmit={handleSubmit(handleSubmitForm)} className='flex flex-col justify-center gap-4 w-full text-2xl'>
                <Input type="text" placeholder="Full Name..." register={register} name="name"/>
                <Input type="email" placeholder="E-mail" register={register} name="email"/>
                {errors.email && <ErrorInput text={errors.email.message}/>}
                <Input type="password" placeholder="Password" register={register} name="password"/>
                {errors.password && <ErrorInput text={errors.password.message}/>}
                <Input type="password" placeholder="Confirm Password" register={register} name="confirmPassword"/>
                {errors.confirmPassword && <ErrorInput text={errors.confirmPassword.message}/>}
                <Button type="submit" text="signup"/>
            </form>
        </div>
    )
}