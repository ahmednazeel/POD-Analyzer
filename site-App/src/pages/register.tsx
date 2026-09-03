import { useState } from 'react'
import RightSide from '../components/authentication/register/rightSide';
import LeftSide from '../components/authentication/register/leftSide';
import NavigatorBtn from '../components/ui/navigatorBtn';

const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='w-full relative'>
            <NavigatorBtn to='/' hoverColor='#d64a2d'/>
            <div className= 'container mx-auto flex items-center justify-center gap-12 max-[1150px]:flex-col'>
                <LeftSide/>
                <RightSide/>
            </div>
        </div>
    )
}

export default Register