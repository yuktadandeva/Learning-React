// export const Button = (props)=>{
//     return (<button className={props.color}>{props.val}</button>)
// }

    export const Button = ({val,color, fn})=>{
    return (<button onClick={fn} className={color}>{val}</button>)
}





























