/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { graphql } from "gatsby"
import HyvorTalk from "hyvor-talk-react"
import React from "react"
import "twin.macro"

import Layout from "./layout"
import SessionBlock from "./../sessions/session-block"
import SessionHero from "./../sessions/session-hero"
import SEO from "../components/seo"
import { UpcomingSessionContent } from "../sessions/upcoming-session"
import { SessionContent } from "../sessions/session"

const SessionLayout = ({ pageContext, data }) => {
  const sessionId = "sessions-" + pageContext.id

  let session
  let sessionBlock
  if (data.sessionsYaml) {
    session = data.sessionsYaml.sessions.find(
      (session: SessionContent) => session.id === pageContext.id
    )
    sessionBlock = (
      <SessionBlock
        description={session.description}
        title={session.title}
        podcast={session.podcast}
        video={session.video}
      />
    )
  } else if (data.upcomingSessionsYaml) {
    session = data.upcomingSessionsYaml.upcomingSessions.find(
      (upcomingSession: UpcomingSessionContent) =>
        upcomingSession.id === pageContext.id
    )
    sessionBlock = (
      <SessionBlock
        description={session.description}
        title={session.title}
        links={session.links}
        video={session.video}
      />
    )
  }
  const keywords = session.tags.join(", ")
  return (
    <Layout>
      <SEO
        image={session.img}
        title={session.title}
        description={session.description}
        keywords={keywords}
      />
      <SessionHero
        date={session.date}
        img={session.img}
        level={session.level}
        tags={session.tags}
        title={session.title}
      />
      <div tw="flex flex-col items-center m-8">
        {sessionBlock}
        <div tw="bg-white lg:w-2/3 w-5/6 rounded-lg shadow-xl p-2 m-2 flex flex-col">
          <HyvorTalk.Embed websiteId={3384} id={sessionId} />
        </div>
      </div>
    </Layout>
  )
}

export default SessionLayout

export const query = graphql`
  query($id: String) {
    sessionsYaml: contentYaml(sessions: { elemMatch: { id: { eq: $id } } }) {
      ...session
    }
    upcomingSessionsYaml: contentYaml(
      upcomingSessions: { elemMatch: { id: { eq: $id } } }
    ) {
      ...upcomingSession
    }
  }
`
