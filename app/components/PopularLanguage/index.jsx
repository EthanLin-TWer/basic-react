import React from 'react'
import autobind from 'autobind-decorator'

export default class PopularLanguage extends React.Component {
  state = {
    selectedLanguage: 'All',
  }

  @autobind
  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
    })
  }
  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
      <ul className="languages">
        {
          languages.map(language => (
            <button
              style={ language === this.state.selectedLanguage ? {
                color: '#d0021b',
              } : null }
              onClick={ () => this.updateLanguage(language) }
              key={ language }
            >
              { language }
            </button>
          ))
        }
      </ul>
    )
  }
}

PopularLanguage.propTypes = {
}
