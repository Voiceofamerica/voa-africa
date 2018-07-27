
// Afaan Oromo
import * as React from 'react'
import { push } from 'react-router-redux'
import store from 'redux-store'
import toggleCircumventionDrawer from 'redux-store/actions/toggleCircumventionDrawer'

import { Audience } from 'helpers/graphql-types'

export const languageName = 'Afaan Oromoo'
export const languageCode = 'om'

export const graphqlAudience = Audience.om

export const articleLabels = {
  updatedOn: (date: string) => `Updated on ${date}`,
  relatedContent: 'Qbiyyee wal simu',
  shareMessage: 'Mata duree kana ilaali',
  galleryLoading: 'Fe\'aa jira',
}

export const categorySettingsLabels = {
  header: 'Wal duraa duuba ulaagaalee',
  myCategories: 'Hirmaata',
  allCategories: 'Hirmaata mara',
  dragAndDrop: 'Mata duree jeloo',
  headlinesFirst: 'Mata dureelee jalqaba tarreeffaman',
  cancel: 'Cancel',
}

export const circumventionDrawerLabels = {
  enabledContent: (
    <div>
      <p>
      Teeknooloojii haaraa uggura marsariitii jalaa itti miliqan beeksisi
      </p>
      <p>
        You can change this in
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>Settings</a>.
      </p>
    </div>
  ),
  disabledContent: (
    <div>
      <p>
      Teeknooloojii haaraa uggura marsariitii jalaa itti miliqan beeksisi
      </p>
      <p>
        You can change this in
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>Settings</a>.
      </p>
    </div>
  ),
}

export const editorsChoiceLabels = {
  header: 'Filmaata Gullaalaa',
}

export const errorBoundaryLabels = {
  error: 'Waan sirrii hin taanetu jira',
  retry: 'Irra deebi\'ii yaali',
}

export const favoritesSettingsLabels = {
  header: 'Kan jaal\'atamu',
  removeAll: 'Mallattoo mara haqi',
}

export const homeLabels = {
  headlines: 'Mata duree',
  search: 'Barbaadi',
  manage: '+',
}

export const introLabels = {
  continue: 'Itti fufi',
  primary: 'Primary language',
  primaryDescription: 'This is the language the app text will appear in',
  secondary: 'Secondary language',
  secondaryDescription: 'This determines the default categories to pull articles from',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
      Kuusaan sabaa himaa duwwaa ennaa ta'u ibsa itti kenni.
      </p>
    </div>
  ),
  loading: 'Fe\'aa jira',
}

export const mediaSettingsLabels = {
  normalSpeed: '1x',
  halfAgainSpeed: '1.5x',
  doubleSpeed: '2x',
  chooseSpeed: 'Saffisa sagalee waraabamee',
}

export const programsScreenLabels = {
  videos: 'Viidiyoo On Demand irraa',
  audio: 'Audio',
  empty: 'Qabiyyee hin qabu',
}

export const psiphonLoadingLabels = {
  bold: 'Please be patient.',
  text: 'This may take a few minutes while we gather the best information for you.',
}

export const pullToRefreshLabels = {
  pull: 'Haaressuuf harkisi',
  release: 'Haaressuuf gad dhiisi',
}

export const searchLabels = {
  header: 'Ba\'ii argame',
  back: 'Boodatti deebii',
  all: 'Hundumaa',
  query: 'Barbaadi',
  empty: 'Ba\'iin argame hin jiru',
}

export const settingsLabels = {
  header: 'Qindeessa',
  panic: 'Mallattoo furutuu yeroo hatattamaa',
  sendToFriends: 'Appii kana hiriyaa waliin hirmaadhu',
  sendFeedback: 'VOA dhaaf yaada kee ergi',
  aboutVoa: 'VOAn maal akka hojjetu ibsi',
  feedbackEmail: 'horn@voanews.com',
  feedbackSubject: encodeURIComponent('Mata duree Email yaadi itti kennamu'),
  feedbackBody: encodeURIComponent('Qabiyyee emial ergamee'),
  shareMessage: 'Appii kana yaali',
  psiphon: 'Secure VPN',
  psiphonOn: 'On',
  psiphonOff: 'Off',
  takeEffectOnRestart: 'You must restart the app for your changes to take effect.',
  okay: 'Okay',
}

export const textSettingsLabels = {
  textSize: 'Foontii qubee tolchi',
  normalSize: '1x',
  largeSize: '1.5x',
  hugeSize: '2x',
}
