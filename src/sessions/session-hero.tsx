import BackgroundImage from "gatsby-background-image"
import React from "react"
import ContentLevel from "./session"
import "twin.macro"

type SessionHeroProps = {
  date: string
  img: any
  tags: string[]
  level: typeof ContentLevel
  title: string
}

const SessionHero = (sessionHeroProps: SessionHeroProps) => {
  return (
    <BackgroundImage
      tw="flex flex-col items-center justify-center bg-scroll h-auto  relative"
      fluid={sessionHeroProps.img.childImageSharp.fluid}
    >
      <div tw="z-0 absolute inset-0 bg-gray-900 opacity-75"></div>
      <div tw="flex flex-col items-center justify-center z-10 m-4 sm:m-6 lg:m-8">
        <h1 tw="xl:text-5xl text-xl text-white text-center w-2/3 m-4">
          {sessionHeroProps.title}
        </h1>
        <div tw="xl:text-sm text-xs text-white m-2 p-2">
          {sessionHeroProps.date}
        </div>
        <div tw="flex-shrink-0 leading-none xl:text-base text-sm tracking-tighter bg-blue-700 text-white rounded-md p-1 m-1">
          Level: {sessionHeroProps.level}
        </div>
        <div tw="px-1 w-full flex flex-row flex-wrap justify-center w-2/5">
          {sessionHeroProps.tags.map((tag, index) => {
            return (
              <div
                key={index}
                tw="flex-shrink-0 leading-none xl:text-sm text-xs tracking-tighter bg-gray-200 text-gray-700 rounded-md p-1 m-1"
              >
                {tag}
              </div>
            )
          })}
        </div>
      </div>
      <div tw="w-full lg:w-1/3 flex flex-col items-center justify-center z-10 m-4 sm:m-6 lg:m-8"></div>
    </BackgroundImage>
  )
}

export default SessionHero
