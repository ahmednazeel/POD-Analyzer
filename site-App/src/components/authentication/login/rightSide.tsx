

const RightSide = () => {
    return (
        <div className="h-[100vh] min-[1151px]:max-w-[50%] max-[1150px]:h-fit max-[1150px]:w-full flex items-center justify-center max-[500px]:hidden">
            <img
                className="
                    h-[90%] rounded-[10px] transition-shadow 
                    hover:shadow-[10px_10px_#3b5a3a] object-cover
                    text-indigo-500 duration-500 max-[1150px]:h-[300px] max-[1150px]:w-full
                " 
                src="/img/login.png" 
                alt="Login Right Side Image Of Podify App" 
            />
        </div>
    )
}

export default RightSide