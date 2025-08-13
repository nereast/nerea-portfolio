export const Loading = ({title,subtitle,background}) => {
    return (
        <div className={`${background} w-full h-screen`}>
            <div className="p-[200px_100px_200px_100px]">
                <h1 className="text-white font-bold font-title text-[50px] md:text-[100px] xl:text-[150px] leading-[50px] md:leading-[80px] xl:leading-[100px]">{title}</h1>
                <p className="text-white font-normal font-text text-[25px] leading-[27px] md:text-[30px] xl:text-[50px]">{subtitle}</p>
            </div>
        </div>
    )
}
