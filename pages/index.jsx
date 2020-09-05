import { useQuery } from '@apollo/client'
import { getQuestionsQuery } from '../src/queries/question'
import Preloader from '../components/Preloader'

export default function Home() {

  const { loading, data, error } = useQuery(getQuestionsQuery);

  if(loading){
    return <Preloader />
  }

  if(error){
    return M.toast({ html: error.message });
  }

  return (
    <div className='container'>
      <h2>Questions</h2>
      <ul className="collection">
        {data.questions.map(q => <li className='collection-item blue-text' key={q._id}>
          {q.title}
          <span className="secondary-content red-text">
            {q.user.name}
          </span>
        </li>)}
      </ul>
    </div>
  )
}