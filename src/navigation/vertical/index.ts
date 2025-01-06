// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import ChartBoxOutline from 'mdi-material-ui/ChartBoxOutline'
import CartOutline from 'mdi-material-ui/CartOutline'
import PackageVariantClosed from 'mdi-material-ui/PackageVariantClosed'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import AccountMultipleOutline from 'mdi-material-ui/AccountMultipleOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { TFunction } from 'i18next'

const getMenuItems = (t: TFunction): VerticalNavItemsType => {
  return [
    {
      title: t('menu.home'),
      icon: HomeOutline,
      path: '/'
    },
    {
      title: t('menu.analytics'),
      icon: ChartBoxOutline,
      path: '/analytics'
    },
    {
      title: t('menu.orders'),
      icon: CartOutline,
      path: '/orders'
    },
    {
      title: t('menu.products'),
      icon: PackageVariantClosed,
      path: '/products'
    },
    {
      title: t('menu.finance'),
      icon: CurrencyUsd,
      path: '/finance'
    },
    {
      title: t('menu.customers'),
      icon: AccountMultipleOutline,
      path: '/customers'
    },
    {
      title: t('menu.account_settings'),
      icon: AccountCogOutline,
      path: '/account-settings'
    }
  ]
}

export default getMenuItems
