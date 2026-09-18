import {useState} from "react";
import Livro from "./Livro.jsx";
import CampoTexto from "./CampoTexto.jsx";


export default function FormularioLivro() {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [year, setYear] = useState('')
    const [gender, setGender] = useState('')
    const [books, setBooks] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        const newBook = {
            id: Date.now(),
            title: title,
            author: author,
            year: year,
            gender: gender,
        }

        setBooks((books) => [...books, newBook])

        setTitle('')
        setAuthor('')
        setYear('')
        setGender('')
    }
    
    return (
        
        <div>
            <form onSubmit={handleSubmit}>
                <CampoTexto name={'title'} label={'Título'} placeholder={'Insira o título'} value={title} type="text" onChange={e => setTitle(e.target.value)} />
                <CampoTexto name={'author'} label={'Autor'} placeholder={'Insira o autor'} value={author} type="text" onChange={e => setAuthor(e.target.value)} />
                <CampoTexto name={'year'} label={'Ano'} placeholder={'Insira o ano'} value={year} type="text" onChange={e => setYear(e.target.value)} />
                <CampoTexto name={'gender'} label={'Gênero'} placeholder={'Insira o gênero'} value={gender} type="text" onChange={e => setGender(e.target.value)} />
                <button type={"submit"}>Cadastrar</button>
            </form>

            {books.length === 0 && 'Não tem livro ainda não'}

            <ul>
                {books.map(book => (
                    <Livro key={book.id} name={book.name} author={book.author} year={book.year} gender={book.gender} />
                ))}
            </ul>
        </div>
        
    )
    
}