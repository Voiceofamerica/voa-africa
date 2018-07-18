
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

import {
  type as setSecondaryLanguagesType,
  SetSecondaryLanguagesAction,
} from '../actions/setSecondaryLanguages'

import { ActorMap, buildReducer } from '../actorMap'
import AppSettings from 'types/AppSettings'
import Category from 'types/Category'

import * as Amharic from 'labels/labels.am'
import * as AfaanOromoo from 'labels/labels.om'
import * as Tigrigna from 'labels/labels.tg'

const amharicCategories: Category[] = [
  {
    name: 'News',
    id: 3167,
  },
  {
    name: 'Video',
    id: 3317,
  },
  {
    name: 'Photo Gallery',
    id: 3174,
  },
  {
    name: 'Gabina',
    id: 4011,
  },
  {
    name: 'Amharic News 1800',
    id: 3303,
  },
  {
    name: 'Features',
    id: 3173,
  },
  {
    name: 'Special Reports and Programs',
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
    name: 'News',
    id: 2914,
  },
  {
    name: 'Video',
    id: 3312,
  },
  {
    name: 'Photo Gallery',
    id: 2921,
  },
  {
    name: 'Eritreans In America',
    id: 2917,
  },
  {
    name: 'People To People',
    id: 2920,
  },
  {
    name: 'Special Reports',
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
  [setSecondaryLanguagesType]: (prev, { secondaryLanguages }: SetSecondaryLanguagesAction) => {
    let categories = []
    if (secondaryLanguages.includes(AfaanOromoo.languageCode)) {
      categories = [...categories, ...afaanOromooCategories]
    }
    if (secondaryLanguages.includes(Amharic.languageCode)) {
      categories = [...categories, ...amharicCategories]
    }
    if (secondaryLanguages.includes(Tigrigna.languageCode)) {
      categories = [...categories, ...tigrignaCategories]
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
