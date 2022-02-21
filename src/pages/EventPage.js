import { useParams } from 'react-router-dom'

const EventPage = () => {
  const params = useParams()

  console.log(params)

  return (
    <section>
      <h1>Event Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ipsa aut
        dolorum maiores laborum sunt esse incidunt labore ex commodi quas iusto
        cumque aliquid dolores id sapiente facilis odit! Tempore?
      </p>
    </section>
  )
}

export default EventPage
