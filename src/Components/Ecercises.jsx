
import { useQuery } from 'react-query'
import { fetchData } from '../utils/featchData'


function Ecercises() {

  const { data, isLoading ,refetch} = useQuery('exercises', () => {
    return fetchData('exercises')
              .catch(err => console.error(err));
  }, {
    enabled: false
  })

  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (data) {
    console.log(data?.data)
  }

  const HandleFetch = async (e) => {
    e.preventDefault()
    refetch()
  }
  return (
    <div>
      <button onClick={(e) => HandleFetch(e)}> Submit</button>
    </div>
  )
}

export default Ecercises