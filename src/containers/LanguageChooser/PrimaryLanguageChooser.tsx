
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { compose } from 'redux'

import Checkbox from '@voiceofamerica/voa-shared/components/Checkbox'

import primaryLanguageThunk from 'redux-store/thunks/primaryLanguage'
import setLanguageCompletionState from 'redux-store/actions/setLanguageCompletionState'

import LanguageCode from 'types/LanguageCode'
import AppState from 'types/AppState'

import * as Amharic from 'labels/labels.am'
import * as AfaanOromoo from 'labels/labels.om'
import * as Tigrigna from 'labels/labels.tg'
import { introLabels } from 'labels'

import { languageChooser, content, explanation, continueButton, buttonText, spacer } from 'containers/LanguageChooser/LanguageChooser.scss'

interface StateProps {
  primaryLanguage: LanguageCode
  primaryLanguageSet: boolean
}

interface DispatchProps {
  setPrimaryLanguage: (code: LanguageCode) => void
  onContinue: () => void
}

type Props = StateProps & DispatchProps

class SettingsRoute extends React.Component<Props> {
  render () {
    const { primaryLanguage, primaryLanguageSet, setPrimaryLanguage, onContinue } = this.props

    const languageChosen = !!primaryLanguage

    if (primaryLanguageSet) {
      return null
    }

    return (
      <div className={languageChooser}>
        <div className={content}>
          <div className={spacer} />
          <Checkbox
            checked={primaryLanguage === Amharic.languageCode}
            onChange={() => setPrimaryLanguage(Amharic.languageCode)}
          >
            <span className={buttonText}>
              {Amharic.introLabels.primary} - {Amharic.languageName}
            </span>
          </Checkbox>
          <Checkbox
            checked={primaryLanguage === AfaanOromoo.languageCode}
            onChange={() => setPrimaryLanguage(AfaanOromoo.languageCode)}
          >
            <span className={buttonText}>
              {AfaanOromoo.introLabels.primary} - {AfaanOromoo.languageName}
            </span>
          </Checkbox>
          <Checkbox
            checked={primaryLanguage === Tigrigna.languageCode}
            onChange={() => setPrimaryLanguage(Tigrigna.languageCode)}
          >
            <span className={buttonText}>
              {Tigrigna.introLabels.primary} - {Tigrigna.languageName}
            </span>
          </Checkbox>
          {
            languageChosen
            ? <div className={explanation}>{introLabels.primaryDescription}</div>
            : null
          }
        </div>
        {
          languageChosen
          ? <div className={continueButton} onClick={onContinue}>{introLabels.continue}</div>
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = ({ languageSettings: { primaryLanguage, primaryLanguageSet } }: AppState): StateProps => ({
  primaryLanguage,
  primaryLanguageSet,
})

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  setPrimaryLanguage: (primaryLanguage) => dispatch(primaryLanguageThunk({ primaryLanguage })),
  onContinue: () => dispatch(setLanguageCompletionState({ primaryLanguageSet: true })),
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withRedux,
)(SettingsRoute)
