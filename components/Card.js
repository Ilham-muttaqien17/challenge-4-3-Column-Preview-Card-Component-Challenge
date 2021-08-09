import classNames from "classnames"

function Card({icon, title, paragraph, className, txtButton}) {
    const addClassName = className ? ` ${className}` : "";
    const addTxtButton = txtButton ? ` ${txtButton}` : "";
    return (
        <div className={classNames("relative px-12 pt-14 pb-32 h-full", addClassName)}>
            <img className="w-15" src={icon} alt="" />
            <h2 className="font-shoulders font-bold text-white text-4xl mt-8">{title}</h2>
            <p className="font-deca leading-7 text-transparent-white mt-8">{paragraph}</p>
            <button className={classNames("bg-white font-deca text-sm py-3 px-6 rounded-full mt-8 absolute left-12 bottom-12", addTxtButton)}>Learn More</button>
        </div>
    )
}

export default Card
