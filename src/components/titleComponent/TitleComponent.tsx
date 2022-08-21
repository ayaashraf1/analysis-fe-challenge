interface TitleInterface{
   text:string
   fontSize:number
   color?:string
   fontWeight?:string
}

export const TitleComponent= (props:TitleInterface) => {
    return(
        <div 
        style={{fontSize:props.fontSize+'px',
        color:props.color?props.color:'black',
        fontWeight:props.fontWeight?props.fontWeight:'normal'}}>
            {props.text}
        </div>
    );
}
