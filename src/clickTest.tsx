function Click(props: any){
    function handleClick(event: any){
        console.log(event.target)
    }
    return(
        <>
        <button onClick={handleClick}>{props.nome}</button>
        </>
    )
}

export default Click