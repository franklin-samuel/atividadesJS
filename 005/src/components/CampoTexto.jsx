

export default function CampoTexto(props) {

    return (

        <div>

            <label htmlFor={props.name}>{props.label}</label>
            <input id={props.name} name={props.name} type={props.type} value={props.value} onChange={props.onChange} />

        </div>

    )

}