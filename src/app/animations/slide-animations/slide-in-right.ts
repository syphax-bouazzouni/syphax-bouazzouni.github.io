import {animate, animateChild, group, query, sequence, style, transition, trigger} from "@angular/animations";


export const  slideInRight = transition('*=>about,*=>contact,*=>works', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', style({ transform: 'translateX(100%)', opacity: 0 })),
    query('@*, :leave', [animateChild()],{ optional: true }),
    group([
        query(
          ':leave',
          [
            animate(
              '0.8s ease-in-out',
              style({ transform: 'translateX(-100%)', opacity: 0 })
            )
          ],
          { optional: true }
        ),
        query(
          ':enter',
          [
            style({ transform: 'translateX(100%)', opacity: 0 }),
            animate(
              '0.8s ease-in-out',
              style({ transform: 'translateX(0%)', opacity: 1 })
            )
          ]
        ),
        query('@*, :enter', [animateChild()])
      ])

])

