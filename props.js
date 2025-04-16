function Tweet() {
    
    let item={
        'author':'dennis',
        'tweet':'myfirsttweet'
    }
    
    return(
        <div>
        <author/>
        <content body={item.tweet}/>
        <actions/>
        )
}


function Content(props){
    return(
    <p>{props.body}</p>
    )
}
