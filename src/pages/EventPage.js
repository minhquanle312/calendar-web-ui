import { useParams, useNavigate } from 'react-router-dom'

import './EventPage.scss'

const EventPage = () => {
  const params = useParams()
  const navigate = useNavigate()

  const handleClickGoHome = () => {
    navigate('/')
  }

  return (
    <section className="event-page">
      <button className="go-home" onClick={handleClickGoHome}>
        Back to home page
      </button>
      <h1>Event Page</h1>
      <h2>Event id: {params.eventId}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ipsa aut
        dolorum maiores laborum sunt esse incidunt labore ex commodi quas iusto
        cumque aliquid dolores id sapiente facilis odit! Tempore?
      </p>
    </section>
  )
}

export default EventPage
