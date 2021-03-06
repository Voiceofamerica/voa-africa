
import * as moment from 'moment'

import { setAnalyticsOptions } from '@voiceofamerica/voa-shared/helpers/analyticsBindings'
import { setDirection } from '@voiceofamerica/voa-shared/helpers/textDirectionHelper'

import store from 'redux-store'

import * as AfaanOromo from 'labels/labels.om'
import * as Amharic from 'labels/labels.am'
import * as Tigrigna from 'labels/labels.tg'

setAnalyticsOptions({
  language: 'horn',
  languageService: 'horn',
  propertyName: 'voa horn news app',
  propertyId: '398',
  rsidAccount: 'bbgvoa.horn.streaming.app',
  reportSuite: 'bbgvoa.horn.streaming.app',
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

const labelProxy = new Proxy<(typeof AfaanOromo & typeof Amharic & typeof Tigrigna) & { getCurrentLabels: typeof getCurrentLabels }>(AfaanOromo as any, {
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
