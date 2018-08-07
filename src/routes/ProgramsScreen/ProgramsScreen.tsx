
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import TopNav, { TopNavItem, StaticItem } from '@voiceofamerica/voa-shared/components/TopNav'
import ThemeProvider from '@voiceofamerica/voa-shared/components/ThemeProvider'

import analytics, { AnalyticsProps } from '@voiceofamerica/voa-shared/helpers/analyticsHelper'
import ErrorBoundary from 'components/ErrorBoundary'
import Category from 'types/Category'
import { programsScreenLabels, languageCode } from 'labels'

import TopNavTheme from './TopNavTheme'
import Params from './Params'
import VideoPrograms from './VideoPrograms'
import AudioPrograms from './AudioPrograms'
import { programsScreen, programTypeNav, typeItem, active } from './ProgramsScreen.scss'

type ProgramType = 'audio' | 'video'

const VIDEO: ProgramType = 'video'
const AUDIO: ProgramType = 'audio'
const DEFAULT = VIDEO

const AMHARIC_VIDEO_ZONES: Category[] = [
  {
    id: 3317,
    name: 'ቪድዮ',
  },
  {
    id: 5349,
    name: 'እንግሊዝኛ ተማሩ',
  },
]

const AMHARIC_AUDIO_ZONES: Category[] = [
  {
    id: 3168,
    name: 'ድምጽ',
  },
  {
    id: 4011,
    name: 'ጋቢና ቪኦኤ',
  },
  {
    id: 3303,
    name: 'ከምሽቱ ሦስት ሰዓት የአማርኛ ዜና',
  },
]

const AFAAN_OROMOO_VIDEO_ZONES: Category[] = [
  {
    id: 4515,
    name: 'Viidiyoo',
  },
]

const AFAAN_OROMOO_AUDIO_ZONES: Category[] = [
  {
    id: 3221,
    name: 'Tamsaasa Sagaleen',
  },
  {
    id: 3295,
    name: 'Tamsaasa Guyaadhaa Guyyaa',
  },
  {
    id: 4516,
    name: 'Sagantaalee',
  },
]

const TIGRIGNA_VIDEO_ZONES: Category[] = [
  {
    id: 3312,
    name: 'ቪድዮ',
  },
  {
    id: 5237,
    name: 'ትምህርቲ ቋንቋ እንግሊዝ',
  },
]

const TIGRIGNA_AUDIO_ZONES: Category[] = [
  {
    id: 2915,
    name: 'ድምጺ',
  },
  {
    id: 3315,
    name: 'ፈነወ ትግርኛ 1900',
  },
]

interface Props extends RouteComponentProps<Params>, AnalyticsProps {
}

class ProgramsScreen extends React.Component<Props> {
  setProgramType = (programType: ProgramType) => {
    const { history, match } = this.props
    const { type } = match.params

    if (type === programType) {
      return
    }

    history.replace(`/programs/${programType}`)
  }

  setZoneId = (zoneId: number) => {
    const { history, match } = this.props
    const { type = DEFAULT } = match.params
    history.replace(`/programs/${type}/${zoneId}`)
  }

  renderPrograms () {
    const { history, match } = this.props
    const { type = DEFAULT } = match.params
    if (type === VIDEO) {
      return <VideoPrograms history={history} zoneId={this.getZoneId()} />
    } else if (type === AUDIO) {
      return <AudioPrograms history={history} zoneId={this.getZoneId()} />
    } else {
      throw new Error(`Invalid programType ${type}`)
    }
  }

  renderProgramTypes () {
    const { type = DEFAULT } = this.props.match.params

    return (
      <div className={programTypeNav}>
        <div className={type === VIDEO ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(VIDEO)}>
          {programsScreenLabels.videos}
        </div>
        <div className={type === AUDIO ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(AUDIO)}>
          {programsScreenLabels.audio}
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className={programsScreen}>
        {this.renderTopNav()}
        <ErrorBoundary>
          {this.renderPrograms()}
        </ErrorBoundary>
        {this.renderProgramTypes()}
      </div>
    )
  }

  private getZoneId = () => {
    const defaultZone = this.getZones()[0].id
    const { zone = defaultZone } = this.props.match.params
    return typeof zone === 'number' ? zone : parseInt(zone, 10)
  }

  private renderTopNav () {
    return this.renderTopNavFromItems(this.getZones())
  }

  private renderTopNavFromItems (items: Category[]) {
    const zoneId = this.getZoneId()

    return (
      <ThemeProvider value={TopNavTheme}>
        <TopNav flex>
          <StaticItem />
          {
            items.map(({ id, name }) => {
              const selected = zoneId === id

              return (
                <TopNavItem
                  key={id}
                  selected={selected}
                  onClick={() => this.setZoneId(id)}
                >
                  {name}
                </TopNavItem>
              )
            })
          }
          <TopNavItem />
        </TopNav>
      </ThemeProvider>
    )
  }

  private getZones () {
    const { type = DEFAULT } = this.props.match.params

    if (languageCode === 'am') {
      if (type === VIDEO) {
        return AMHARIC_VIDEO_ZONES
      } else if (type === AUDIO) {
        return AMHARIC_AUDIO_ZONES
      } else {
        throw new Error(`Unrecognized program type ${type}`)
      }
    } else if (languageCode === 'om') {
      if (type === VIDEO) {
        return AFAAN_OROMOO_VIDEO_ZONES
      } else if (type === AUDIO) {
        return AFAAN_OROMOO_AUDIO_ZONES
      } else {
        throw new Error(`Unrecognized program type ${type}`)
      }
    } else if (languageCode === 'tg') {
      if (type === VIDEO) {
        return TIGRIGNA_VIDEO_ZONES
      } else if (type === AUDIO) {
        return TIGRIGNA_AUDIO_ZONES
      } else {
        throw new Error(`Unrecognized program type ${type}`)
      }
    } else {
      throw new Error(`Unrecognized language code ${languageCode}`)
    }
  }
}

const withAnalytics = analytics<Props>({
  state: 'Programs',
  title: 'Programs',
})

export default withAnalytics(ProgramsScreen)
