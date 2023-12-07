import { createEffect, children,View } from "solid-js";


export default function UpdateWidth(props) {
    //console.log(props)
    const slots = children(() => props.children);
    createEffect(() => slots().forEach(item => item.width = props.width)); //item.props.width? item.props.width : props.width));
    return <>{slots()}</>
}