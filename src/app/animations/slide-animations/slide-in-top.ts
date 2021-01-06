import {animate, animateChild, group, query,style, transition} from "@angular/animations";


export const  slideInTop = transition('menu=>home', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%',
    })
  ]),
  query(':enter', style({ transform: 'translateY(-100%)', opacity: 0 })),
  query('@*, :leave', [animateChild()],{ optional: true }),
  group([
    query(
      ':leave',
      [
        animate(
          '0.8s ease-in-out',
          style({ transform: 'translateY(100%)', opacity: 0 })
        )
      ]
    ),
    query(
      ':enter',
      [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate(
          '0.8s ease-in-out',
          style({ transform: 'translateY(0%)', opacity: 1 })
        )
      ]
    ),
    query('@*, :enter', [animateChild()])
  ])
])

