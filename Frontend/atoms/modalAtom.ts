// The atom is concept from recoil library from
// https://recoiljs.org/docs/introduction/core-concepts
import { atom } from 'recoil'

export const modalState = atom(
    {
        key: 'modalState',
        default: false,
    }
)