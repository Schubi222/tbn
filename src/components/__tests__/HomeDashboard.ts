import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeDashboard from '../HomeDashboard.vue'

describe('Dashboard', () => {
  const wrapper = mount(HomeDashboard)
  it('renders properly', () => {
    expect(wrapper.text()).toContain('Dashboard')
  })
})
