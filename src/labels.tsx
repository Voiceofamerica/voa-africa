
import * as moment from 'moment'

import { setAnalyticsOptions } from '@voiceofamerica/voa-shared/helpers/analyticsBindings'
import { setDirection } from '@voiceofamerica/voa-shared/helpers/textDirectionHelper'

import store from 'redux-store'

import * as AfaanOromo from 'labels/labels.om'
import * as Amharic from 'labels/labels.am'
import * as Tigrigna from 'labels/labels.tg'

setAnalyticsOptions({
  language: 'english',
  languageService: 'english',
  propertyName: 'english',
  propertyId: 'something',
  rsidAccount: 'something',
  reportSuite: 'something',
})

setDirection('ltr')

moment.locale('en-us')

const getCurrentLabels = (): (typeof AfaanOromo | typeof Amharic | typeof Tigrigna) & Object => {
  const { languageSettings: { primaryLanguage } } = store.getState()
  if (primaryLanguage === AfaanOromo.languageCode) {
    return AfaanOromo
  } else if (primaryLanguage === Amharic.languageCode) {
    return Amharic
  } else if (primaryLanguage === Tigrigna.languageCode) {
    return Tigrigna
  } else {
    return AfaanOromo
  }
}

const labelProxy = new Proxy<typeof AfaanOromo & { getCurrentLabels: typeof getCurrentLabels }>(AfaanOromo as any, {
  has: (target, key) => {
    const labels = getCurrentLabels() || target
    return labels.hasOwnProperty(key)
  },
  get: (target, key) => {
    if (key === 'getCurrentLabels') {
      return getCurrentLabels
    }
    const labels = getCurrentLabels() || target
    return labels[key]
  },
  set: () => false,
})

export = labelProxy
