import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PageSimple from '../layouts/PageSimple'
import Meta from '../layouts/Meta'
import CenterStick from '../layouts/CenterStick'

import IdeaContent from '../components/IdeaContent'

import { getOneIdea } from '../redux/actions/idea'

const Idea = ({ match, idea, isLoading, dispatch }) => {
  // asynchronous get ideas from backend API
  // just like in componentDidMount()
  useEffect(() => {
    dispatch(
      getOneIdea({
        id: match.params.id
      })
    )
  }, []) // prevent data update

  return (
    <PageSimple>
      <Meta title={idea.title} />

      <CenterStick>
        <IdeaContent />
      </CenterStick>
    </PageSimple>
  )
}

const mapStateToProps = state => {
  return {
    idea: state.idea.data,
    isLoading: state.idea.isLoading
  }
}

export default connect(mapStateToProps)(Idea)
