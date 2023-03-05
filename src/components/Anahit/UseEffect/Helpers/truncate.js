const truncate = (body, symbols) =>{
    return body.length > symbols? body.slice(0, symbols-1)+ "..." : body
}

export default truncate