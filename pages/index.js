import { useQuery, gql } from '@apollo/client'
import { initializeApollo } from '../src/apollo'

const IntroQuery = gql`
query IntroQuery {
  name
}
`;

export default function Home() {

  const { loading, error, data } = useQuery(IntroQuery);

  if (loading) {
    return <h1 className="animate-pulse"><h1>Loading...</h1></h1>
  }

  const { name } = data;

  return (
    <div className='bg-gray-900 text-white w-screen h-screen'>
      <div className='container'>
        <h1 className='text-red-500 text-lg
       font-bold'>
          {name} sends his love
        </h1>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: IntroQuery
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  }
}