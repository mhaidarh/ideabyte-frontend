import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { DotLoader } from 'react-spinners'

import IdeaCard from './IdeaCard'

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const IdeaCards = ({ isLoading, ideas }) => {
  if (!isLoading) {
    return (
      <Section>
        {ideas.map((idea, index) => {
          return <IdeaCard key={index} idea={idea} />
        })}
      </Section>
    )
  } else {
    return (
      <section>
        <DotLoader
          sizeUnit={'px'}
          size={100}
          color={'#f1c84b'}
          loading={true}
        />
        <h1>LOADING IDEAS...</h1>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    ideas: state.ideas.data,
    isLoading: state.ideas.isLoading
  }
}

export default connect(mapStateToProps)(IdeaCards)
