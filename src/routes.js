import Services from './components/Services.vue'
import Matches from './components/Matches.vue'
import DetailedMatch from './components/DetailedMatch.vue'

export default [
  { path: '/allMatches', component: Matches},
  { path: '/givenMatch/:id', component: DetailedMatch}
]
