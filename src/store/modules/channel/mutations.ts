import { MutationTree } from 'vuex'
import ChannelState from './ChannelState';
import * as types from './mutation-types'

const mutations: MutationTree <ChannelState> = {
  [types.CHANNEL_INVENTORY_CHANNELS_UPDATED] (state, payload) {
    state.inventoryChannels = payload;
  },
  [types.CHANNEL_GROUP_CONFIG_FACILITIES_UPDATED] (state, payload) {
    state.groupConfigFacilities = payload;
  },
  [types.CHANNEL_CLEARED](state) {
    state.inventoryChannels = []
  },
}
export default mutations;