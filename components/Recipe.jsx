import ReactMarkdown from 'react-markdown'
export default function Recipe(props) {
    return (
        <section className='recipe'>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}