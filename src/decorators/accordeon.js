import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
  state = {
    openArticleId: null
  }

  toggleOpenArticle = openArticleId => () => this.setState({
    openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId})

  render () {
    return <OriginalComponent {...this.props} openArticleId={this.state.openArticleId} toggleOpenArticle={this.toggleOpenArticle} isClick={this.state.isClick} />
  }
}