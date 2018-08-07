
// Tigrigna
import * as React from 'react'
import { push } from 'react-router-redux'
import store from 'redux-store'
import toggleCircumventionDrawer from 'redux-store/actions/toggleCircumventionDrawer'

import { Audience } from 'helpers/graphql-types'

export const appTopic = 'tg'
export const languageName = 'ትግርኛ'
export const languageCode = 'tg'

export const graphqlAudience = Audience.tg

export const articleLabels = {
  updatedOn: (/*date: string*/) => `ዕለት ኣሓድስ`,
  relatedContent: 'Related stories',
  shareMessage: 'ኣብ`ዚ ጽሑፍ ርአ',
  galleryLoading: 'ይጽዕን ኣሎ',
}

export const categorySettingsLabels = {
  header: 'ንመደባት ኣቐድም',
  myCategories: 'ናተይ ምድባት',
  allCategories: 'ኩሉ ምድባት',
  dragAndDrop: 'ምድባትካ ናብ`ዚ ሰሓብ',
  headlinesFirst: 'ኣርእስትታት መጀመርያ ዘርዝር',
  cancel: 'ሰርዝ',
}

export const circumventionDrawerLabels = {
  enabledContent: (
    <div>
      <p>
      መሕለፊ ተክኖሎጂ ንተጠቀምቲ ግለጽ
      </p>
      <p>
      ምስ ድምጺ ኣሜሪካ ዝካየድ ርክብ ብሕታዊን መንነት ዘይገልጽን’ዩ
      </p>
      <p>
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>ነዚ ኣብ መቃን ክትቕይር ይክኣል</a>
      </p>
    </div>
  ),
  disabledContent: (
    <div>
      <p>
      መሕለፊ ተክኖሎጂ ንተጠቀምቲ ግለጽ
      </p>
      <p>
      ውሑስ ዝኾነ VPN ጠፊኡ’ዩ ዘሎ
      </p>
      <p>
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>ነዚ ኣብ መቃን ክትቕይር ይክኣል</a>
      </p>
    </div>
  ),
}

export const editorsChoiceLabels = {
  header: 'ምርጫ ኤዲተራት',
}

export const errorBoundaryLabels = {
  error: 'ገለ ጌጋ `ሎ',
  retry: 'እንደገና ፈትን',
}

export const favoritesSettingsLabels = {
  header: 'ዝያዳ ተደላዪ',
  removeAll: 'ንኹሉ ሰርዝ',
}

export const homeLabels = {
  headlines: 'ኣርእስትታት',
  search: 'ፈትሽ',
  manage: '+',
}

export const introLabels = {
  continue: 'ቀጽል',
  primary: 'ቋንቋ ይምረጹ',
  primaryDescription: 'This is the language the app text will appear in',
  secondary: 'Secondary language',
  secondaryDescription: 'This determines the default categories to pull articles from',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
      ንመጻወቲ ወይ ንመልቲሚድያ ድረወር ግለጽ
      </p>
    </div>
  ),
  loading: 'ይጽዕን ኣሎ',
}

export const mediaSettingsLabels = {
  normalSpeed: '1x',
  halfAgainSpeed: '1.5x',
  doubleSpeed: '2x',
  chooseSpeed: 'ፕለይባክ ስፒድ',
}

export const programsScreenLabels = {
  videos: 'ኣብ ተጠላቢ ቪድዮ',
  audio: 'ኣብ ተጠላቢ ኦድዮ',
  empty: 'ትሕዝቶ የብሉን',
}

export const psiphonLoadingLabels = {
  bold: '',
  text: 'ብኽብረትኹም ንዝሓሸ ሓበሬታ ተዓገሱ',
}

export const pullToRefreshLabels = {
  pull: 'ንምሕዳስ ጠውቕ',
  release: 'ንምሕዳስ ፈንው',
}

export const searchLabels = {
  header: 'ውጽኢት ፍተሻ',
  back: 'ንድሕሪት',
  all: 'ኩሎም',
  query: 'ፈትሽ',
  empty: 'ዝተረኽበ ውጽኢት የለን',
}

export const settingsLabels = {
  header: 'ናተይ ቦታ መዋደዲ',
  panic: 'ፓኒክ ባተን ሰይም',
  sendToFriends: 'ነዚ ኣፕ ምስ መሓዙትካ ኣማቕል',
  sendFeedback: 'ናብ ቪኦኤ ርእይቶኻ ስደድ',
  aboutVoa: 'ቪኦኤ ዝገብሮ ግለጽ',
  feedbackEmail: 'horn@voanews.com',
  feedbackSubject: encodeURIComponent('ኣርእስቲ ርእይቶ ኢመይል'),
  feedbackBody: encodeURIComponent('ትሕዝቶ ርእይቶ ኢመይል'),
  shareMessage: 'ነዚ ኣፕ ርኣዮ',
  psiphon: 'ውሑስ VPN',
  psiphonOn: 'ወልዕ',
  psiphonOff: 'ኣጥፍእ',
  resetPrimaryLanguage: 'Reset primary language',
  resetSecondaryLanguages: 'Reset secondary languages',
  takeEffectOnRestart: 'ንምልዋጥ ነዚ app ከም ሓድሽ ጀምር',
  okay: 'ሕራይ',
}

export const textSettingsLabels = {
  textSize: 'ዓቐን ፊደላት',
  normalSize: '1x',
  largeSize: '1.5x',
  hugeSize: '2x',
}
