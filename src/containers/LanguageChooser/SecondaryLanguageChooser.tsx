
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { compose } from 'redux'

import Checkbox from '@voiceofamerica/voa-shared/components/Checkbox'

import setSecondaryLanguages from 'redux-store/actions/setSecondaryLanguages'
import setLanguageCompletionState from 'redux-store/actions/setLanguageCompletionState'

import LanguageCode from 'types/LanguageCode'
import AppState from 'types/AppState'

import * as Amharic from 'labels/labels.am'
import * as AfaanOromoo from 'labels/labels.om'
import * as Tigrigna from 'labels/labels.tg'
import { introLabels } from 'labels'

import { languageChooser, content, titles, explanation, continueButton, disabled } from 'containers/LanguageChooser/LanguageChooser.scss'

interface StateProps {
  secondaryLanguages: LanguageCode[]
  secondaryLanguagesSet: boolean
}

interface DispatchProps {
  setSecondaryLanguages: (codes: LanguageCode[]) => void
  onContinue: () => void
}

type Props = StateProps & DispatchProps

class SettingsRoute extends React.Component<Props> {
  render () {
    const { secondaryLanguagesSet, secondaryLanguages, onContinue } = this.props

    if (secondaryLanguagesSet) {
      return null
    }

    const languageChosen = secondaryLanguages.length > 0

    return (
      <div className={languageChooser}>
        <div className={content}>
          <div className={titles}>
            <div>
              {introLabels.secondary}
            </div>
            <div className={explanation}>{introLabels.secondaryDescription}</div>
          </div>
          <Checkbox
            checked={secondaryLanguages.indexOf(Amharic.languageCode) >= 0}
            onChange={() => this.toggleLanguage(Amharic.languageCode)}
          >
            {Amharic.languageName}
          </Checkbox>
          <Checkbox
            checked={secondaryLanguages.indexOf(AfaanOromoo.languageCode) >= 0}
            onChange={() => this.toggleLanguage(AfaanOromoo.languageCode)}
          >
            {AfaanOromoo.languageName}
          </Checkbox>
          <Checkbox
            checked={secondaryLanguages.indexOf(Tigrigna.languageCode) >= 0}
            onChange={() => this.toggleLanguage(Tigrigna.languageCode)}
          >
            {Tigrigna.languageName}
          </Checkbox>
        </div>
        {
          languageChosen
          ? <div className={continueButton} onClick={onContinue}>{introLabels.continue}</div>
          : <div className={`${continueButton} ${disabled}`} onClick={onContinue}>{introLabels.continue}</div>
        }
      </div>
    )
  }

  private toggleLanguage = (code: LanguageCode) => {
    const { setSecondaryLanguages } = this.props
    setSecondaryLanguages(this.getToggledLanguageArray(code))
  }

  private getToggledLanguageArray = (code: LanguageCode) => {
    const { secondaryLanguages } = this.props
    if (secondaryLanguages.indexOf(code) >= 0) {
      return secondaryLanguages.filter(c => c !== code)
    } else {
      return [...secondaryLanguages, code]
    }
  }
}

const mapStateToProps = ({ languageSettings: { secondaryLanguages, secondaryLanguagesSet } }: AppState): StateProps => ({
  secondaryLanguages,
  secondaryLanguagesSet,
})

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  setSecondaryLanguages: (secondaryLanguages) => dispatch(setSecondaryLanguages({ secondaryLanguages })),
  onContinue: () => dispatch(setLanguageCompletionState({ secondaryLanguagesSet: true })),
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withRedux,
)(SettingsRoute)
