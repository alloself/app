import { authStore } from '@/main'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { router } from '@/router'

export const guards = [
  {
    name: 'authGuard',
    handler: (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
      if (!authStore.isAuth && to.name !== 'Login') {
        next({ name: 'Login' })
      } else {
        next()
      }
    },
  },
  {
    name: 'loginPageGuard',
    handler: (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
      if (to.name === 'Login' && authStore.isAuth) {
        next({ name: 'Dashboard' })
      } else {
        next()
      }
    },
  },
]

guards.forEach(({ handler }) => router.beforeEach(handler))
