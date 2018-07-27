
import {
  type as setCategoryOrderType,
  SetCategoryAction,
} from '../actions/setCategoryOrder'

import {
  type as setMediaPlaybackRateType,
  SetMediaPlaybackRateAction,
} from '../actions/setMediaPlaybackRate'

import {
  type as toggleDailyNotificationType,
  ToggleDailyNotificationAction,
} from '../actions/toggleDailyNotification'

import {
  type as setTextSizeType,
  SetTextSizeAction,
} from '../actions/setTextSize'

// import {
//   type as setSecondaryLanguagesType,
//   SetSecondaryLanguagesAction,
// } from '../actions/setSecondaryLanguages'

import {
  type as setPrimaryLanguageType,
  SetPrimaryLanguageAction,
} from '../actions/setPrimaryLanguage'

import { ActorMap, buildReducer } from '../actorMap'
import AppSettings from 'types/AppSettings'
import Category from 'types/Category'

import * as Amharic from 'labels/labels.am'
import * as AfaanOromoo from 'labels/labels.om'
import * as Tigrigna from 'labels/labels.tg'

const amharicCategories: Category[] = [
  {
    name: 'ዜና',
    id: 3167,
  },
  {
    name: 'ቪድዮ',
    id: 3317,
  },
  {
    name: 'የፎቶ መድብሎች',
    id: 3174,
  },
  {
    name: 'ጋቢና ቪኦኤ',
    id: 4011,
  },
  {
    name: 'ከምሽቱ ሦስት ሰዓት የአማርኛ ዜና',
    id: 3303,
  },
  {
    name: 'ሳምንታዊ ዝግጅቶች',
    id: 3173,
  },
  {
    name: 'ልዩ ዘገባዎች',
    id: 4520,
  },
]

const afaanOromooCategories: Category[] = [
  {
    name: 'Tamsaasa Guyaadhaa Guyyaa',
    id: 3295,
  },
  {
    name: 'Oromiyaa I Itoophiyaa',
    id: 3319,
  },
  {
    name: 'Afrikaa',
    id: 3222,
  },
  {
    name: 'Addunyaa',
    id: 3227,
  },
  {
    name: 'Gabaasaalee',
    id: 4518,
  },
]

const tigrignaCategories: Category[] = [
  {
    name: 'ዜና',
    id: 2914,
  },
  {
    name: 'ቪድዮ',
    id: 3312,
  },
  {
    name: 'ዓምዲ ኣሳእል',
    id: 2921,
  },
  {
    name: 'ኤርትራውያን ኣብ ኣመሪካ',
    id: 2917,
  },
  {
    name: 'ህዝቢ ምስ ህዝቢ',
    id: 2920,
  },
  {
    name: 'ፍሉይ ዓምዲ',
    id: 4522,
  },
]

const actors: ActorMap<AppSettings> = {
  [setCategoryOrderType]: (prev, { categories }: SetCategoryAction) => ({
    ...prev,
    categories,
  }),
  [setMediaPlaybackRateType]: (prev, { mediaPlaybackRate }: SetMediaPlaybackRateAction) => ({
    ...prev,
    mediaPlaybackRate,
  }),
  [toggleDailyNotificationType]: (prev, { on: dailyNotificationOn = !prev.dailyNotificationOn }: ToggleDailyNotificationAction) => ({
    ...prev,
    dailyNotificationOn,
  }),
  [setTextSizeType]: (prev, { textSize }: SetTextSizeAction) => ({
    ...prev,
    textSize,
  }),
  // [setSecondaryLanguagesType]: (prev, { secondaryLanguages }: SetSecondaryLanguagesAction) => {
  //   let categories = []
  //   if (secondaryLanguages.includes(AfaanOromoo.languageCode)) {
  //     categories = [...categories, ...afaanOromooCategories]
  //   }
  //   if (secondaryLanguages.includes(Amharic.languageCode)) {
  //     categories = [...categories, ...amharicCategories]
  //   }
  //   if (secondaryLanguages.includes(Tigrigna.languageCode)) {
  //     categories = [...categories, ...tigrignaCategories]
  //   }
  //
  //   return {
  //     ...prev,
  //     categories,
  //   }
  // },
  [setPrimaryLanguageType]: (prev, { primaryLanguage }: SetPrimaryLanguageAction) => {
    let categories = []
    if (primaryLanguage === AfaanOromoo.languageCode) {
      categories = afaanOromooCategories
    } else if (primaryLanguage === Amharic.languageCode) {
      categories = amharicCategories
    } else if (primaryLanguage === Tigrigna.languageCode) {
      categories = tigrignaCategories
    }

    return {
      ...prev,
      categories,
    }
  },
}

export const INITIAL_STATE: AppSettings = {
  categories: [],
  mediaPlaybackRate: 1,
  dailyNotificationOn: true,
  textSize: 1,
  psiphonEnabled: true,
}

export default buildReducer(INITIAL_STATE, actors)
