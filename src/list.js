import cities from './js/cities'
import { getApi } from './js/api'
import { getInformationForList } from './js/data'

const promises = Object.keys(cities).map((city) => getApi(city))

Promise.all(promises)
  .then((result) => result.map(getInformationForList))
