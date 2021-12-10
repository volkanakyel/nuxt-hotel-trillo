export { default as BookingBtn } from '../../components/booking-btn.vue'
export { default as CtaSection } from '../../components/cta-section.vue'
export { default as DetailsHotel } from '../../components/details-hotel.vue'
export { default as FormInput } from '../../components/form-input.vue'
export { default as Gallery } from '../../components/gallery.vue'
export { default as HeaderSection } from '../../components/header-section.vue'
export { default as Overview } from '../../components/overview.vue'
export { default as SidebarNavigation } from '../../components/sidebar-navigation.vue'
export { default as UserReviews } from '../../components/user-reviews.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
