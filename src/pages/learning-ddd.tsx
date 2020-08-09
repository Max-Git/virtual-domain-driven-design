import React, { ReactElement } from "react"
import Layout from "../templates/layout"
import DDDCrewOverview from "../components/ddd-crew-overview"
import BooksOverview from "../components/books-overview"
import PodcastsOverview from "../components/podcasts-overview"

function LearningDDD(): ReactElement {
  return (
    <Layout>
      <DDDCrewOverview></DDDCrewOverview>
      <BooksOverview></BooksOverview>
      <PodcastsOverview></PodcastsOverview>
    </Layout>
  )
}

export default LearningDDD
