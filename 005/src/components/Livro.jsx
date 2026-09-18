

export default function Livro(props) {

    return (

        <div>
            <li>
                <strong>{props.name}</strong> - {props.author} - {props.year} - {props.gender}
            </li>
        </div>

    )

}