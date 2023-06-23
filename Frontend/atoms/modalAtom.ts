// The atom is concept from recoil library from
// https://recoiljs.org/docs/introduction/core-concepts
import { atom } from 'recoil'

//every state is an atom
export const OTPmodalState = atom(
    {
        key: 'OPTmodalState',
        default: false,
    }
)

export const modalState = atom(
    {
        key: 'modalState',
        default: false,
    }
)