import IMAGE_1000_COINS from './images/card_1.png'
import IMAGE_15_COINS from './images/card_2.png'

import IMAGE_CARD_3 from './images/card_3.png'
import IMAGE_CARD_4 from './images/card_4.png'

import IMAGE_CARD_5 from './images/card_5.png'
import IMAGE_CARD_6 from './images/card_6.png'


import IMAGE_1000_ICON from './images/icon_1.png'


import FOOTER_ICON_1 from './images/footer/footer_1.png'
import FOOTER_ICON_2 from './images/footer/footer_2.png'
import FOOTER_ICON_3 from './images/footer/footer_3.png'
import FOOTER_ICON_4 from './images/footer/footer_4.png'

export const PETROL_DATA = [
    {
        id: 1,
        img: IMAGE_15_COINS,
        title: '15 Coins',
        icon: null,
        content: '50% discount for every $100 top-up on your Shell Petrol Card',
        link: null
    },
    {
        id: 2,
        img: IMAGE_1000_COINS,
        icon: IMAGE_1000_ICON,
        title: '1,000 Coins',
        content: '70% discount top-up on your Shell Petrol Card',
        link: 'Insufficient coins'
    },
]
export const RENTAL_DATA = [
    {
        id: 1,
        img: IMAGE_CARD_3,
        title: '20 Coins',
        icon: null,
        content: 'Get $20 Rental rebate',
        link: null
    },
    {
        id: 2,
        img: IMAGE_CARD_4,
        icon: null,
        title: '15 Coins',
        content: 'Get $500 Rental rebate',
        link: null
    },
]
export const FOOD_DATA = [
    {
        id: 1,
        img: IMAGE_CARD_5,
        title: '25 Coins',
        icon: null,
        content: 'NTUC Fairprice $50 Voucher',
        link: null
    },
    {
        id: 2,
        img: IMAGE_CARD_6,
        icon: null,
        title: '5 Coins',
        content: 'Free Cold Stone Sundae at any flavour!',
        link: null
    },
]
export const CONSTANT_FOOTER = [
    {
        id: 1,
        icon: FOOTER_ICON_1,
        active: 'f-footer--active active--1'
    },
    {
        id: 2,
        icon: FOOTER_ICON_2,
        active: 'f-footer--active  active--2'
    }
    , {
        id: 3,
        icon: FOOTER_ICON_3,
        active: 'f-footer--active  active--3'
    },
    {
        id: 4,
        icon: FOOTER_ICON_4,
        active: 'f-footer--active  active--4'
    }
]