
// Amharic
import * as React from 'react'
import { push } from 'react-router-redux'
import store from 'redux-store'
import toggleCircumventionDrawer from 'redux-store/actions/toggleCircumventionDrawer'

import { Audience } from 'helpers/graphql-types'

export const languageName = 'አማኛ'
export const languageCode = 'am'

export const graphqlAudience = Audience.am

export const articleLabels = {
  updatedOn: (date: string) => `በ${date} የታደሰ`,
  relatedContent: 'የሚገናኝ ይዘት',
  shareMessage: 'ይህንን ፅሁፍ ይዩ',
  galleryLoading: 'እየተጫነ ነው...',
}

export const categorySettingsLabels = {
  header: 'ምድቦቹን በቅደም ተከተል አስቀምጥ',
  myCategories: 'የኔ ምድቦች',
  allCategories: 'ሁሉም ምድቦች',
  dragAndDrop: 'ምድቦችዎን ወደዚህ ይሳቡ',
  headlinesFirst: 'አርዕስቱን በቅድሚያ አሥፍር',
  cancel: 'Cancel',
}

export const circumventionDrawerLabels = {
  enabledContent: (
    <div>
      <p>
        እገዳን የማለፊያ ዘዴን ለተጠቃሚዎች አብራራ
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
        እገዳን የማለፊያ ዘዴን ለተጠቃሚዎች አብራራ
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
  header: 'የኤዲተር ምርጫ',
}

export const errorBoundaryLabels = {
  error: 'አንዳች ችግር ተፈጥሯል',
  retry: 'እንደገና ይሞክሩ',
}

export const favoritesSettingsLabels = {
  header: 'ተወዳጆች',
  removeAll: 'ሁሉንም አጥፋ',
}

export const homeLabels = {
  headlines: 'አርዕስት',
  search: 'ፈልግ',
  manage: '+',
}

export const introLabels = {
  continue: 'ወደ ተከታዩ እለፍ...',
  primary: 'Primary language',
  primaryDescription: 'This is the language the app text will appear in',
  secondary: 'Secondary language',
  secondaryDescription: 'This determines the default categories to pull articles from',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      የመረጧቸው የድምፅና የቪድዮ ፋይሎች የሚጫወቱት እዚህ ነው። ከሥር ከተቀመጠው ዝርዝር በመምረጥ ይጀምሩ። ይህንን ስክሪን ለመዝጋት የድምፅ/ቪድዮ ማጫወቻውን ሳያቆሙ ወደታች በመጥረግ ሊዘጉትና ፅሁፎችን ማንበብ መቀጠል ይችላሉ። የማጫወቻውን መስኮት እንደገና መክፈት ከፈለጉ ባሉበት ስክሪን የታችኛው ወለል መሃል ላይ ያለውን ክብ ቁልፍ ወደላይ ይጥረጉት። ድምፁንም ሆነ ቪድዮውን ለማጫወትም ለማቆምም የማጫወቻውን ምልክት ይጫኑ።
    </div>
  ),
  loading: 'እየተከፈተ ነው',
}

export const mediaSettingsLabels = {
  normalSpeed: '1x',
  halfAgainSpeed: '1.5x',
  doubleSpeed: '2x',
  chooseSpeed: 'ፍጥነት',
}

export const programsScreenLabels = {
  videos: 'ቪድዮ መጠየቂያ',
  audio: 'ድምፅ መጠየቂያ',
  empty: 'ባዶ ነው',
}

export const psiphonLoadingLabels = {
  bold: 'Please be patient.',
  text: 'This may take a few minutes while we gather the best information for you.',
}

export const pullToRefreshLabels = {
  pull: 'ይዘቱን ለማደስ ይሳቡት',
  release: 'ይዘቱን ለማደስ ይልቀቁት',
}

export const searchLabels = {
  header: 'የፍለጋ ውጤቶች',
  back: 'ወደኋላ',
  all: 'ሁሉም',
  query: 'ፈልግ',
  empty: 'የሚፈልጉት አልተገኘም',
}

export const settingsLabels = {
  header: 'የራሴ ማረቂያዎች',
  panic: 'ፈጣን ቁልፍ',
  sendToFriends: 'ይህንን አፕ ለጓደኞችህ ላክ',
  sendFeedback: 'ለቪኦኤ አስተያየትዎን ይላኩ',
  aboutVoa: 'The Voice of America (VOA) publishes accurate, balanced, and comprehensive news and information to an international audience. It started in 1942 as a radio news service for people living in closed and war-torn societies and has since grown into a multimedia news operation. VOA now reaches people on web, mobile devices and social media in more than 40 languages.',
  feedbackEmail: 'horn@voanews.com',
  feedbackSubject: encodeURIComponent('የቪኦኤ አማርኛ የሞባይል አፕ አስተያየት መስጫ'),
  feedbackBody: encodeURIComponent(''),
  shareMessage: 'ይህንን አፕ ሞክረ/ሪው',
  psiphon: 'Secure VPN',
  psiphonOn: 'On',
  psiphonOff: 'Off',
  resetPrimaryLanguage: 'Reset primary language',
  resetSecondaryLanguages: 'Reset secondary languages',
  takeEffectOnRestart: 'You must restart the app for your changes to take effect.',
  okay: 'Okay',
}

export const textSettingsLabels = {
  textSize: 'የፊደላቱን መጠን አስተካክልe',
  normalSize: '1x',
  largeSize: '1.5x',
  hugeSize: '2x',
}
