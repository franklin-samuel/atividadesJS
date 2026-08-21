

export default function User(props) {

    return (

         <div>
             <div style={{ display: 'flex', gap: '30px'  }}>
                 <img src={props.image} alt=""/>
                 <h1>{props.firstName} {props.lastName}</h1>
             </div>
             <p>{props.age} anos</p>
             <br/>
             <p><span>Email: </span>{props.email}</p>
             <p><span>Telefone: </span>{props.phone}</p>
             <p><span>Empresa: </span>{props.company.name}</p>
             <p><span>Cargo: </span>{props.company.title}</p>
             <p><span>Cidade: </span>{props.address.city} - {props.address.stateCode}</p>
             <hr/>
         </div>

    )

}