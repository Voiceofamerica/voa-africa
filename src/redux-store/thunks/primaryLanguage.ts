
import { Dispatch } from 'redux'
import AppState from 'types/AppState'

import { subscribeToTopic, unsubscribeFromTopic, statusSubject } from '@voiceofamerica/voa-shared/helpers/pushNotificationHelper'

import LanguageCode from 'types/LanguageCode'
import * as Amharic from 'labels/labels.am'
import * as AfaanOromoo from 'labels/labels.om'
import * as Tigrigna from 'labels/labels.tg'

import setPrimaryLanguage, { SetPrimaryLanguageOptions } from '../actions/setPrimaryLanguage'
// import setSecondaryLanguages from '../actions/setSecondaryLanguages'

function getTopic (languageCode: LanguageCode): string {
  if (languageCode === Amharic.languageCode) {
    return Amharic.appTopic
  } else if (languageCode === AfaanOromoo.languageCode) {
    return AfaanOromoo.languageCode
  } else if (languageCode === Tigrigna.languageCode) {
    return Tigrigna.languageCode
  } else {
    throw new Error(`Language code ${languageCode} not recognized`)
  }
}

export default ({ primaryLanguage }: SetPrimaryLanguageOptions) =>
  (dispatch: Dispatch<AppState> /*, getState: () => AppState */) => {
    const topic = getTopic(primaryLanguage)
    const status = statusSubject.getValue()

    status.subscriptions
      .filter(t => t !== topic)
      .forEach(topic => {
        const sub = unsubscribeFromTopic(topic).subscribe(status => {
          if (status.initialized && !status.subscriptions.some(t => t === topic)) {
            sub.unsubscribe()
          }
        })
      })

    if (!status.subscriptions.some(t => t === topic)) {
      const sub = subscribeToTopic(topic).subscribe(status => {
        if (status.initialized && status.subscriptions.some(t => t === topic)) {
          sub.unsubscribe()
        }
      })
    }

    dispatch(setPrimaryLanguage({ primaryLanguage }))
    // const { languageSettings: { secondaryLanguagesSet } } = getState()
    // if (!secondaryLanguagesSet) {
    //   dispatch(setSecondaryLanguages({ secondaryLanguages: [primaryLanguage] }))
    // }
  }
