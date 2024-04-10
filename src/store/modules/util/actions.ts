import { ActionTree } from 'vuex'
import RootState from '@/store/RootState'
import { UtilService } from '@/services/UtilService'
import { hasError } from '@/utils'
import logger from '@/logger'
import UtilState from './UtilState'
import * as types from './mutation-types'


const actions: ActionTree<UtilState, RootState> = {
  async fetchConfigFacilities ({ commit, state }) {
    let configFacilities = JSON.parse(JSON.stringify(state.configFacilities))

    if(configFacilities.length) {
      return;
    }

    const payload = {
      facilityTypeId: 'CONFIGURATION'
    }
    
    try {
      const resp = await UtilService.fetchConfigFacilities(payload);

      if(!hasError(resp)) {
        configFacilities = resp.data;
      } else {
        throw resp.data
      }
    } catch (err: any) {
      logger.error(err)
    }

    commit(types.UTIL_CONFIG_FACILITES_UPDATED, configFacilities)
  }
}

export default actions;